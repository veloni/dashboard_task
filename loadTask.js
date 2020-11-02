let task = {
            id: [
              {
    
                nameUser:"Egor",
                dueDate:"12 september",
                typeTaskdueDate:"21 january",
                nameTask:"Hacaton",
                conditionTask:"completed",
                typeTask:"Reminder"
            },
             
            {
                nameUser:"Dima",
                dueDate:"23 december",
                nameTask:"Fix bag",
                conditionTask:"completed",
                typeTask:"event"
            },

            {
                nameUser:"Serega",
                dueDate:"5 may",
                nameTask:"lern react",
                conditionTask:"active",
                typeTask:"Call"
            },

            {
                nameUser:"Serega",
                dueDate:"5 may",
                nameTask:"lern react",
                conditionTask:"ended",
                typeTask:"Call"
            },


            {
                nameUser:"Serega",
                dueDate:"5 may",
                nameTask:"lern react",
                conditionTask:"active",
                typeTask:"Call"
            },

            {
    
                nameUser:"Egor",
                dueDate:"12 september",
                typeTaskdueDate:"21 january",
                nameTask:"Hacaton",
                conditionTask:"completed",
                typeTask:"Reminder"
            },


            {
    
                nameUser:"Egor",
                dueDate:"12 september",
                typeTaskdueDate:"21 january",
                nameTask:"Hacaton",
                conditionTask:"completed",
                typeTask:"Reminder"
            },


            
            ]
          };


const nameTask = document.querySelectorAll('.js-text-condition-one')
const nameUser = document.querySelectorAll('.js-name-task-text')
const dueDate = document.querySelectorAll('.js-due-date')
const typeTask = document.querySelectorAll('.js-text-condition-two')
const conditionTask = document.querySelectorAll('.js-button-task')


nameUser.forEach((item,index) => {
    item.innerHTML = task.id[index].nameUser;
});

nameTask.forEach((item,index) => {
    item.innerHTML = task.id[index].nameTask;
});

dueDate.forEach((item,index) => {
    item.innerHTML = task.id[index].dueDate;
});

typeTask.forEach((item,index) => {
    item.innerHTML = task.id[index].typeTask;
});

conditionTask.forEach((item,index) => {
    item.innerHTML = task.id[index].conditionTask;

          if (task.id[index].conditionTask == "ended")
          {
            item.style.backgroundColor = 'red';
            item.style.borderColor = 'red';
          }

          if (task.id[index].conditionTask == "completed")
          {
            item.style.backgroundColor = 'green';
            item.style.borderColor = 'green';
          }

          if (task.id[index].conditionTask == "active")
          {
            item.style.backgroundColor = 'orange';
            item.style.borderColor = 'orange';
          }



});

//узнаём проценты тасков

let conditionTaskMassive=[];
let quantityCompleted = 0;
let quantityEnded = 0;
let quantityActive = 0;
let lenghtJson;

lenghtJson = task.id.length; // 7 

  task.id.forEach((item,index) => {
    conditionTaskMassive[index] = task.id[index].conditionTask;
});


conditionTaskMassive.forEach((item) =>{

    if(item == "active")
    {
        quantityActive += 1; 
    }

    if(item == "completed")
    {
        quantityCompleted += 1; 
    }

    if(item == "ended")
    {
        quantityEnded += 1; 
     
    }


});

quantityCompleted = quantityCompleted / lenghtJson * 100   ;
quantityActive = quantityActive / lenghtJson * 100 ;
quantityEnded = quantityEnded / lenghtJson * 100 ;


console.log(quantityActive);
console.log(quantityCompleted);
console.log(quantityEnded);


let canvas = document.getElementById('js-graph-circle');
let canvas2 = document.getElementById('js-graph-circle2');
let canvas3 = document.getElementById('js-graph-circle3');

let obCanvas = canvas.getContext('2d');
let obCanvas2 = canvas2.getContext('2d');
let obCanvas3 = canvas3.getContext('2d');

obCanvas.beginPath();
//context.arc(x, y, r, sAngle, eAngle, counterclockwise);


function ebabva(){

obCanvas.arc(100, 80, 50, 0, quantityActive*2*3.14/100, false);
obCanvas.lineWidth = 5;
obCanvas.strokeStyle = "red";

obCanvas.stroke();
obCanvas.beginPath();
}

function asdsa(){


obCanvas.strokeStyle = "orange";
obCanvas.arc(100, 80, 50, quantityActive*2*3.14/100, quantityActive*2*3.14/100+quantityEnded*2*3.14/100  , false);
obCanvas.lineWidth = 3;
obCanvas.stroke();
obCanvas.beginPath();

}

function asdsa1(){
obCanvas.arc(100, 80, 50, quantityActive*2*3.14/100+quantityEnded*2*3.14/100, 0 , false);
obCanvas.lineWidth = 2;
obCanvas.strokeStyle = "green";
obCanvas.stroke();
obCanvas.beginPath();
    }
    

    ebabva()
    asdsa();
    asdsa1();

