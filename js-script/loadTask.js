const anyFunction = (massive, name) => {
    massive.forEach((item, index) => {item.innerHTML = task.id[index][name];});
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
    anyFunction(nameUser, 'nameUser');
    anyFunction(nameTask, 'nameTask');
    anyFunction(dueDate, 'dueDate');
    anyFunction(typeTask, 'typeTask');

    conditionTask.forEach((item, index) => {
        item.innerHTML = task.id[index].conditionTask;
    
        const addColors = (color) => {
            item.style.backgroundColor = color;
            item.style.borderColor = color;
        }

        switch (task.id[index].conditionTask) {
            case 'ended':
                addColors(colors.endedColor);
                break;
            case 'completed':
                addColors(colors.completedColor);
                break;
            case 'active':
                addColors(colors.activeColor);
                break;
            default:
                break;
        }
    });

    circleOneEdit.forEach((item,index) => {
        const addWidthCircle = () => {
            circleOneEdit[index].style.strokeWidth = 2;
            circleTwoEdit[index].style.strokeWidth = 2; 
        }
        switch (task.id[index].conditionTask) {
            case 'ended':
                circleOneEdit[index].classList.add('active');
                circleTwoEdit[index].classList.add('completed');
                circleOneEdit[index].style.stroke = colors.activeColor;
                circleTwoEdit[index].style.stroke = colors.completedColor;
                addWidthCircle();
                break;
            case 'completed':
                circleOneEdit[index].classList.add('ended');
                circleTwoEdit[index].classList.add('active');
                circleOneEdit[index].style.stroke = colors.endedColor;
                circleTwoEdit[index].style.stroke = colors.activeColor;
                addWidthCircle();
                break;
            case 'active':
                circleOneEdit[index].classList.add('ended');
                circleTwoEdit[index].classList.add('completed');
                circleOneEdit[index].style.stroke = colors.endedColor;
                circleTwoEdit[index].style.stroke = colors.completedColor;
                addWidthCircle();
                break;
            default:
                break;
        }
    });
} 

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
    
    const daysInYear = (year) => {
        let days = 0;
        [...Array(12)].forEach((item,index) => { 
                days += daysInMonth(index, year);
        });
        return days;
    }

    let daysYears = daysInYear(2021);

    const loadAllDate = () =>{
        [...Array(1+daysYears*2)].forEach((item,index) => { 
            if(day <= daysInMonth(month, 2021)) 
                {
                    daysInYearMassive.push(day);
                    daysInYearMassive.push(month);
                    day += 1;
                }
            else
                {
                    day = 1;
                    month +=1;
                }
        });
    }

loadAllDate();

const filterData = () => {
    [...Array(daysYears*2)+1].forEach((item,index) => { 
        if (index % 2 ){
        daysInYearMassive[index] = monthMassive[daysInYearMassive[index]];
        comparisonMassive.push(daysInYearMassive[index-1]+' '+ daysInYearMassive[index]);
        }
    });

    [...Array(lenghtJson)].forEach((item,index) => { 
        daysDateMassive[index] = task.id[index].dueDate;
});
}

filterData();

const compareTwoFirstMassives = () => {
    comparisonMassive.filter(function(item, i) {
        daysDateMassive.forEach(function(elem) {
            if (elem == item) {
                quantityDataMassive[i] += 1;
            }
        });
    });
};
compareTwoFirstMassives();
}

loadTask();