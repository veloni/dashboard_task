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

//узнаём проценты тасков
// isolated
// check and rework variables
let conditionTaskMassive = [];
let quantityCompleted = 0;
let quantityEnded = 0;
let quantityActive = 0;
let lenghtJson;

lenghtJson = task.id.length; // 7

const taskId = task.id;

taskId.forEach((item, index) => {
    conditionTaskMassive[index] = task.id[index].conditionTask;
});


conditionTaskMassive.forEach((item) => {
    // to switch
    if (item == "active") {
        quantityActive += 1;
    }

    if (item == "completed") {
        quantityCompleted += 1;
    }

    if (item == "ended") {
        quantityEnded += 1;

    }


});

// isolated
quantityCompleted = quantityCompleted / lenghtJson * 100;
quantityActive = quantityActive / lenghtJson * 100;
quantityEnded = quantityEnded / lenghtJson * 100;


//console.log(quantityActive);
//console.log(quantityCompleted);
//console.log(quantityEnded);


let canvas = document.getElementById('js-graph-circle');
let obCanvas = canvas.getContext('2d');

// naming
function DrawCircleRed() {
    obCanvas.arc(75, 80, 65, 0, quantityActive * 2 * 3.14 / 100, false);
    obCanvas.lineWidth = 5;
    obCanvas.strokeStyle = "red";
    obCanvas.stroke();
    obCanvas.beginPath();
}

// colors to config
function DrawCircleOrange() {
    obCanvas.strokeStyle = "orange";
    obCanvas.arc(75, 80, 65, quantityActive * 2 * 3.14 / 100, quantityActive * 2 * 3.14 / 100 + quantityEnded * 2 * 3.14 / 100, false);
    obCanvas.lineWidth = 5;
    obCanvas.stroke();
    obCanvas.beginPath();

}

function DrawCircleGreen() {
    obCanvas.arc(75, 80, 65, quantityActive * 2 * 3.14 / 100 + quantityEnded * 2 * 3.14 / 100, 0, false);
    obCanvas.lineWidth = 5;
    obCanvas.strokeStyle = "green";
    obCanvas.stroke();
    obCanvas.beginPath();
}


function drawTextPercent(){
    const percentCircleText = document.querySelector('.percent');
    percentCircleText.innerHTML = Math.ceil(quantityCompleted) + '%';
}


DrawCircleRed();
DrawCircleOrange();
DrawCircleGreen();
drawTextPercent();


// isolated
// variables
// remove selection by id
let Graph = document.getElementById('js-graph');
let graphCanvas = canvas.getContext('2d');

graphCanvas.lineWidth = 2;
graphCanvas.strokeStyle = "blue";

graphCanvas.beginPath();

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

console.log(comparisonMassive);
console.log(daysDateMassive);

let quantityDataMassive = [];
let j = 0;

for(i = 0; i<=daysYears; i++){
    for(j = 0; j<7; j++){

    if(comparisonMassive[i] == daysDateMassive[j])
    {
        quantityDataMassive[i] = quantityDataMassive[i]+1;
    }
    else
    {
        quantityDataMassive[i] = 0;
    }
}
}

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


let canvasGraph = document.getElementById('js-graph');
let drawGraph = canvasGraph.getContext('2d');


drawGraph.lineWidth = 1;
drawGraph.strokeStyle = "blue";


drawGraph.beginPath();
for(let i = 0; i<365; i++)
{

drawGraph.moveTo(0+i, 50*quantityDataMassive[i]);
drawGraph.lineTo(1+i, 50*quantityDataMassive[i+1]);

drawGraph.stroke();
}


