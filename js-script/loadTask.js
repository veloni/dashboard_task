function removeIcon(){
    const twoCircle = document.querySelectorAll('.js-two-circle');
    const editDeleteIcon = document.querySelectorAll('.js-edit-delete-icon');
}

const anyFunction = (massive, name) => {
    massive.forEach((item, index) => {
        item.innerHTML = task.id[index][name];
    });
};

const barTaskAddType = () => {
    const barTaskBox = document.querySelectorAll('.js-box-task');
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

window.testFunctionTwo = barTaskAddType;
barTaskAddType();

const renderTasks = () => {

    const nameTask = document.querySelectorAll('.js-text-condition-one')
    const nameUser = document.querySelectorAll('.js-name-task-text')
    const dueDate = document.querySelectorAll('.js-due-date')
    const typeTask = document.querySelectorAll('.js-text-condition-two')
    const conditionTask = document.querySelectorAll('.js-button-task')
  
    anyFunction(nameUser, 'nameUser');
    anyFunction(nameTask, 'nameTask');
    anyFunction(dueDate, 'dueDate');
    anyFunction(typeTask, 'typeTask');

    conditionTask.forEach((item, index) => {
        item.innerHTML = task.id[index].conditionTask;
    
        function addColors(color){
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
}

window.testFunction = renderTasks;
renderTasks();

startDate = new Date('Jan 1, 2020');

maxDateMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
day = startDate.getDate();
month = startDate.getMonth();

let daysInYearMassive = [];
let daysDateMassive = [];

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

function daysInYear(year) {
    let days = 0;
    [...Array(12)].forEach((item,index) => { 
            days += daysInMonth(index, year);
    });
    return days;
}

let daysYears = daysInYear(2020);

function loadAllDate(){
    [...Array(1+daysYears*2)].forEach((item,index) => { 
        if(day <= daysInMonth(month, 2020)) 
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

let quantityDataMassive = [];
let comparisonMassive = [];

function filterData() {
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
    ;

    comparisonMassive.filter(function(item, i) {
        daysDateMassive.forEach(function(elem) {
            if (elem === item) {
                quantityDataMassive[i] += 1;
            }
        });
    });
};

compareTwoFirstMassives();
