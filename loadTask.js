function removeIcon(){
    const twoCircle = document.querySelectorAll('.js-two-circle');
    const editDeleteIcon = document.querySelectorAll('.js-edit-delete-icon');


}







let task = window.taskList;

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
  
    const colors = {
        activeColor: 'blue',
    };

    anyFunction(nameUser, 'nameUser');
    anyFunction(nameTask, 'nameTask');
    anyFunction(dueDate, 'dueDate');
    anyFunction(typeTask, 'typeTask');


    // descomposition
    conditionTask.forEach((item, index) => {
        item.innerHTML = task.id[index].conditionTask;
        switch (task.id[index].conditionTask) {
            case 'ended':
                item.style.backgroundColor = 'red';
                item.style.borderColor = 'red';
                break;
            case 'completed':
                item.style.backgroundColor = 'green';
                item.style.borderColor = 'green';
                break;
            case 'active':
                item.style.backgroundColor = colors.activeColor;
                item.style.borderColor = colors.activeColor;
                break;
            default:
                break;
        }
    });
}

window.testFunction = renderTasks;
renderTasks();

let lenghtJson;
lenghtJson = task.id.length;
const taskId = task.id;

//узнаём проценты тасков
// isolated
// check and rework variables
// isolated
// variables
// remove selection by id

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

    for(var month = 1; month <= 12; month++) {
      days += daysInMonth(month, year);
    }
    return days;
  }

  let daysYears = daysInYear(2020);
  console.log(daysYears);

  // move to config
  monthMassive = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

// rewrite to declarative style

function loadAllDate(){
    for(i=0;i<1+daysYears*2;i++){

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
    }
}

console.log(daysInYearMassive);

loadAllDate();

//console.log(daysInYearMassive);

for(i = 0; i<=daysYears*2; i += 2){
   daysInYearMassive[i+1] = monthMassive[daysInYearMassive[i+1]];
}
let comparisonMassive = [];
//console.log(daysInYearMassive);

for(i = 0; i<=daysYears*2; i += 2){

    comparisonMassive.push(daysInYearMassive[i]+' '+ daysInYearMassive[i+1]);

     }

for(i = 0; i<lenghtJson; i++){
    daysDateMassive[i] = task.id[i].dueDate;
}
console.log("tut");
console.log(comparisonMassive);
console.log(daysDateMassive);
let quantityDataMassive = [];

const compareTwoFirstMassives = () => {
    comparisonMassive.filter(function(item, i) {
        daysDateMassive.forEach(function(elem) {
            if (elem === item) {
                quantityDataMassive[i] += 1;
            }
        });
    });
    console.log(quantityDataMassive);
};

compareTwoFirstMassives();

//console.log(test);

/* console.log(quantityDataMassive);
console.log(quantityDataMassive[126]);
console.log(quantityDataMassive[255]);
console.log(); */



