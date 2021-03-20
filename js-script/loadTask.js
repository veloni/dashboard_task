
const renderTaskJs = () => {

	const renderTextTask = (massive, name) => {
		massive.forEach((item, index) => item.innerHTML = _task.id[index][name]);
	};

	const barTaskAddType = () => {
		let barTaskBox = document.querySelectorAll('.js-box-task');

		barTaskBox.forEach((item,index) => {
			switch(_task.id[index].conditionTask) {
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
			item.innerHTML = _task.id[index].conditionTask;

			switch (_task.id[index].conditionTask) {
				case 'ended':
					addColors(item, _colors.endedColor);
					break;
				case 'completed':
					addColors(item, _colors.completedColor);
					break;
				case 'active':
					addColors(item, _colors.activeColor);
					break;
				default:
					break;
			}
		});

		_circleOneEdit.forEach((item,index) => {
			switch (_task.id[index].conditionTask) {
				case 'ended':
					circleEditType(index, _circleOneEdit, 'active');
					circleEditType(index, _circleTwoEdit, 'completed');
					circleEditColor(index, _circleOneEdit, _colors.activeColor);
					circleEditColor(index, _circleTwoEdit, _colors.completedColor);
					addWidthCircle(index);
					break;
				case 'completed':
					circleEditType(index, _circleOneEdit, 'ended');
					circleEditType(index, _circleTwoEdit, 'active');
					circleEditColor(index, _circleOneEdit, _colors.endedColor);
					circleEditColor(index, _circleTwoEdit, _colors.activeColor);
					addWidthCircle(index);
					break;
				case 'active':
					circleEditType(index, _circleOneEdit, 'ended');
					circleEditType(index, _circleTwoEdit, 'completed');
					circleEditColor(index, _circleOneEdit, _colors.endedColor);
					circleEditColor(index, _circleTwoEdit, _colors.completedColor);
					addWidthCircle(index);
					break;
				default:
					break;
			}
		});
	}

	const circleEditType = (index, circle, type) => {
		circle[index].classList.add(type);
	}

	const circleEditColor = (index, circle, color) => {
		circle[index].style.stroke = color;
	}

	const addColors = (item, color) => {
		item.style.backgroundColor = color;
		item.style.borderColor = color;
	};

	const addWidthCircle = (index) => {
		_circleOneEdit[index].style.strokeWidth = 2;
		_circleTwoEdit[index].style.strokeWidth = 2;
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

		const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

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
			if (index % 2) {
				daysInYearMassive[index] = _monthMassive[daysInYearMassive[index]];
				_comparisonMassive.push(`${daysInYearMassive[index - 1]} ${daysInYearMassive[index]}`);
			}
		});

		[...Array(_lenghtJson)].forEach((item,index) => {
			daysDateMassive[index] = _task.id[index].dueDate;
		});

		_comparisonMassive.filter(function(item, i) {
			daysDateMassive.forEach(function(elem) {
				if (elem === item) {
					_quantityDataMassive[i] += 1;
				}
			});
		});
	}
	loadTask();
}

renderTaskJs();