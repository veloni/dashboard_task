let task = {
    id: [
       
        {
            nameUser: "Dima",
            dueDate: "12 september",
            nameTask: "Fix bag",
            conditionTask: "completed",
            typeTask: "event"
        },

        {
            nameUser: "Serega",
            dueDate: "23 december",
            nameTask: "Fix bag",
            conditionTask: "completed",
            typeTask: "event"
        },

        {
            nameUser: "Serega",
            dueDate: "5 may",
            nameTask: "lern react",
            conditionTask: "active",
            typeTask: "Call"
        },

        {
            nameUser: "Serega",
            dueDate: "5 may",
            nameTask: "lern react",
            conditionTask: "ended",
            typeTask: "Call"
        },


        {
            nameUser: "Serega",
            dueDate: "5 may",
            nameTask: "lern react",
            conditionTask: "active",
            typeTask: "Call"
        },

        {

            nameUser: "Egor",
            dueDate: "12 september",
            typeTaskdueDate: "21 january",
            nameTask: "Hacaton",
            conditionTask: "completed",
            typeTask: "Reminder"
        },


        {

            nameUser: "Egor",
            dueDate: "12 september",
            typeTaskdueDate: "21 january",
            nameTask: "Hacaton",
            conditionTask: "completed",
            typeTask: "Reminder"
        },



    ]
};

const nameTask = document.querySelectorAll('.js-text-condition-one')
const nameUser = document.querySelectorAll('.js-name-task-text')
const dueDate = document.querySelectorAll('.js-due-date')
const typeTask = document.querySelectorAll('.js-text-condition-two')
const conditionTask = document.querySelectorAll('.js-button-task')


nameUser.forEach((item, index) => {
    item.innerHTML = task.id[index].nameUser;
});

nameTask.forEach((item, index) => {
    item.innerHTML = task.id[index].nameTask;
});

dueDate.forEach((item, index) => {
    item.innerHTML = task.id[index].dueDate;
});

typeTask.forEach((item, index) => {
    item.innerHTML = task.id[index].typeTask;
});

conditionTask.forEach((item, index) => {
    item.innerHTML = task.id[index].conditionTask;

    if (task.id[index].conditionTask == "ended") {
        item.style.backgroundColor = 'red';
        item.style.borderColor = 'red';
    }

    if (task.id[index].conditionTask == "completed") {
        item.style.backgroundColor = 'green';
        item.style.borderColor = 'green';
    }

    if (task.id[index].conditionTask == "active") {
        item.style.backgroundColor = 'orange';
        item.style.borderColor = 'orange';
    }



});

//узнаём проценты тасков

let conditionTaskMassive = [];
let quantityCompleted = 0;
let quantityEnded = 0;
let quantityActive = 0;
let lenghtJson;

lenghtJson = task.id.length; // 7 

task.id.forEach((item, index) => {
    conditionTaskMassive[index] = task.id[index].conditionTask;
});


conditionTaskMassive.forEach((item) => {

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

quantityCompleted = quantityCompleted / lenghtJson * 100;
quantityActive = quantityActive / lenghtJson * 100;
quantityEnded = quantityEnded / lenghtJson * 100;


//console.log(quantityActive);
//console.log(quantityCompleted);
//console.log(quantityEnded);


let canvas = document.getElementById('js-graph-circle');
let obCanvas = canvas.getContext('2d');


function ebabva() {
    obCanvas.arc(100, 80, 50, 0, quantityActive * 2 * 3.14 / 100, false);
    obCanvas.lineWidth = 5;
    obCanvas.strokeStyle = "red";
    obCanvas.stroke();
    obCanvas.beginPath();
}

function asdsa() {
    obCanvas.strokeStyle = "orange";
    obCanvas.arc(100, 80, 50, quantityActive * 2 * 3.14 / 100, quantityActive * 2 * 3.14 / 100 + quantityEnded * 2 * 3.14 / 100, false);
    obCanvas.lineWidth = 3;
    obCanvas.stroke();
    obCanvas.beginPath();

}

function asdsa1() {
    obCanvas.arc(100, 80, 50, quantityActive * 2 * 3.14 / 100 + quantityEnded * 2 * 3.14 / 100, 0, false);
    obCanvas.lineWidth = 2;
    obCanvas.strokeStyle = "green";
    obCanvas.stroke();
    obCanvas.beginPath();
}


ebabva()
asdsa();
asdsa1();


let Graph = document.getElementById('js-graph');
let graphCanvas = canvas.getContext('2d');

graphCanvas.lineWidth = 2;
graphCanvas.strokeStyle = "blue";

graphCanvas.beginPath();


startDate = new Date('Jan 1, 2020')

maxDateMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
day = startDate.getDate();
month = startDate.getMonth();

console.log(maxDateMonth);
console.log(day);
console.log(month);


let daysInYearMassive = [];
let daysDateMassive = [];






function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }



  
  function daysInYear(year) {
    var days = 0;
    
    for(var month = 1; month <= 12; month++) {
      days += daysInMonth(month, year);
    }

    return days;
  }
  
  let daysYears = daysInYear(2020);
  console.log(daysYears);
  
  monthMassive = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']


function loadAllDate(){
    for(i=0; i<=daysYears*2; i++){
        daysInYearMassive.push(day);
        daysInYearMassive.push(month);
      
        day += 1;
    if(day>daysInMonth(month,2020))
    {
        
        month +=1;
        day = 1;
    }
    }
}



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

//console.log(test);

console.log(quantityDataMassive);
console.log(quantityDataMassive[126]);
console.log(quantityDataMassive[255]);

console.log();



