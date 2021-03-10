const renderTextTask = (massive, name) => {
	massive.forEach((item, index) => item.innerHTML = task.id[index][name]);
};

const barTaskAddType = () => {
	let barTaskBox = document.querySelectorAll('.js-box-task');

	barTaskBox.forEach((item,index) => {
		switch(task.id[index].conditionTask){
			case 'ended':
				item.classList.add('ended')
				break;
			case 'completed':
				item.classList.add('completed')
				break;
			case 'active':
				item.classList.add('active')
				break;
			default:
			break;
		}
	});
}

window.barTaskFunction = barTaskAddType;
barTaskAddType();

const renderTasks = () => {
	const nameTask = document.querySelectorAll('.js-text-condition-one');
	const nameUser = document.querySelectorAll('.js-name-task-text');
	const dueDate = document.querySelectorAll('.js-due-date');
	const typeTask = document.querySelectorAll('.js-text-condition-two');
	const conditionTask = document.querySelectorAll('.js-button-task');

	renderTextTask(nameUser, 'nameUser');
	renderTextTask(nameTask, 'nameTask');
	renderTextTask(dueDate, 'dueDate');
	renderTextTask(typeTask, 'typeTask');

	conditionTask.forEach((item, index) => {
		item.innerHTML = task.id[index].conditionTask;

		switch (task.id[index].conditionTask) {
			case 'ended':
				addColors(item, colors.endedColor);
				break;
			case 'completed':
				addColors(item, colors.completedColor);
				break;
			case 'active':
				addColors(item, colors.activeColor);
				break;
			default:
				break;
		}
	});

	circleOneEdit.forEach((item,index) => {
		switch (task.id[index].conditionTask) {
			case 'ended':
				circleOneEdit[index].classList.add('active');
				circleTwoEdit[index].classList.add('completed');
				circleOneEdit[index].style.stroke = colors.activeColor;
				circleTwoEdit[index].style.stroke = colors.completedColor;
				addWidthCircle(index);
				break;
			case 'completed':
				circleOneEdit[index].classList.add('ended');
				circleTwoEdit[index].classList.add('active');
				circleOneEdit[index].style.stroke = colors.endedColor;
				circleTwoEdit[index].style.stroke = colors.activeColor;
				addWidthCircle(index);
				break;
			case 'active':
				circleOneEdit[index].classList.add('ended');
				circleTwoEdit[index].classList.add('completed');
				circleOneEdit[index].style.stroke = colors.endedColor;
				circleTwoEdit[index].style.stroke = colors.completedColor;
				addWidthCircle(index);
				break;
			default:
			break;
		}
	});
}

const addColors = (item, color) => {
	item.style.backgroundColor = color;
	item.style.borderColor = color;
};

const addWidthCircle = (index) => {
	circleOneEdit[index].style.strokeWidth = 2;
	circleTwoEdit[index].style.strokeWidth = 2;
};

window.barRenderTask = renderTasks;
renderTasks();

const loadTask = () => {
	startDate = new Date('Jan 1, 2021');
	maxDateMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
	day = startDate.getDate();
	month = startDate.getMonth();

	let daysInYearMassive = [];
	let daysDateMassive = [];

	const daysInMonth = (month, year) => {return new Date(year, month, 0).getDate();}

	let days = 0;

	[...Array(12)].forEach((item,index) => {
		days += daysInMonth(index, 2021);
	});

	let daysYears = days;
	
	[...Array(1 + daysYears * 2)].forEach(() => {
		if (day <= daysInMonth(month, 2021)) {
			daysInYearMassive.push(day);
			daysInYearMassive.push(month);
			day += 1;
		}
		else {
			day = 1;
			month += 1;
		}
	});

	[...Array(daysYears * 2) + 1].forEach((item,index) => {
		if (index % 2 ) {
			daysInYearMassive[index] = monthMassive[daysInYearMassive[index]];
			comparisonMassive.push(daysInYearMassive[index - 1] + ' ' + daysInYearMassive[index]);
		}
	});

	[...Array(lenghtJson)].forEach((item,index) => {
		daysDateMassive[index] = task.id[index].dueDate;
	});

	comparisonMassive.filter(function(item, i) {
		daysDateMassive.forEach(function(elem) {
			if (elem === item) {quantityDataMassive[i] += 1;}
		});
	});
}

loadTask();