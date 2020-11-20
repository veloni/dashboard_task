const switchPeriodOne = document.querySelector('.js-menu-switch-period-one');
const switchPeriodTwo = document.querySelector('.js-menu-switch-period-two');
const switchPeriodThree = document.querySelector('.js-menu-switch-period-three');
const openSwitch = document.querySelector('.js-switch-period-two');
let savePeriodTwo;


function AddDnTwo() {
    switchPeriodThree.classList.add('dn');
    switchPeriodTwo.classList.add('dn');
}

AddDnTwo();

//loadInterest(YearData, lenghtJson);
//loadInterest(MonthData, MonthData.length);
//loadInterest(WeekData, WeekData.length);
// DrawCircle();


openSwitch.onclick = function () {
    switchPeriodTwo.classList.remove('dn');
    switchPeriodThree.classList.remove('dn');
}

switchPeriodOne.onclick = function () {
    switchPeriodTwo.classList.add('dn');
    switchPeriodThree.classList.add('dn');
}

switchPeriodOne.onclick = function () {
    switchPeriodTwo.classList.add('dn');
    switchPeriodThree.classList.add('dn');
}

switchPeriodTwo.onclick = function () {
    savePeriodTwo = switchPeriodOne.textContent
    switchPeriodOne.innerHTML = switchPeriodTwo.textContent;
    switchPeriodTwo.innerHTML = savePeriodTwo;
    changePeriod();
    DrawCircle();
    AddDnTwo();
}

switchPeriodThree.onclick = function () {
    savePeriodTwo = switchPeriodOne.textContent
    switchPeriodOne.innerHTML = switchPeriodThree.textContent;
    switchPeriodThree.innerHTML = savePeriodTwo;
    changePeriod();
    DrawCircle();
    AddDnTwo();
}

//load Week Data
let date = new Date();
let start = new Date(date.getFullYear(), 0, 0);
let diff = date - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay); // получаем порядковый номер сегодняшнего дня
let numberWeek = date.getDay(); // порядковый номер недели
let Month = date.getMonth();
let indexWeek = [];
let WeekDataSearch = [];
let WeekData = [];
function giveWeekIndex() {
    quantityDataMassive.forEach(function (item, index) {
        if (index > day - numberWeek && index < day - numberWeek + 8 && item != 0) {
            indexWeek.push(index);
            indexWeek.push(item);
        }
    });
}
giveWeekIndex();

//to config
let monthMassiveTwo = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
function giveValueWeekSearch() {
    indexWeek.forEach(function (item, index) {
        if (index % 2 == 0) {
            let dateNumberYears = new Date(2020, 0, item);
            let maxDateMonthTwo = new Date(dateNumberYears.getFullYear(), dateNumberYears.getMonth() + 1, 0).getDate();
            let giveMonth = dateNumberYears.getMonth();
            let giveDate = dateNumberYears.getDate();

            if (giveDate > maxDateMonthTwo) {
                giveDate = 0;
                giveMonth += 1;
            }
            WeekDataSearch.push(giveDate + 1 + ' ' + monthMassiveTwo[giveMonth]);
        }
    });
}
giveValueWeekSearch();

let AllTaskWeek = 0;

function DateLoadWeek() {

    task.id.filter(function (item, index) {
        WeekDataSearch.forEach(function (elem) {
            if (item['dueDate'] == elem) {
                WeekData.push(item['conditionTask']);
                AllTaskWeek += 1;
            }
        
        });
    });
}

DateLoadWeek();

console.log(WeekData);

//LoadMonthData

let indexMonth = [];

function giveMonthIndex() {
    quantityDataMassive.forEach(function (item, index) {
        if (index > day - nowDate && index < day - nowDate + maxDateMonth && item != 0) {
            indexMonth.push(index);
            indexMonth.push(item);
        }
    });
}

giveMonthIndex();

let monthDataSearch = [];

function giveValueMonthSearch() {
    indexMonth.forEach(function (item, index) {
        if (index % 2 == 0) {
            let dateNumberYears = new Date(2020, 0, item);
            let giveMonth = dateNumberYears.getMonth();
            let giveDate = dateNumberYears.getDate();
            monthDataSearch.push(giveDate + 1 + ' ' + monthMassiveTwo[giveMonth]);
        }
    });
}
giveValueMonthSearch();

let MonthData = [];
let allTaskMonth = 0;;


function MonthLoadWeek() {
    task.id.filter(function (item, index) {
        monthDataSearch.forEach(function (elem) {
            if (item['dueDate'] == elem) {
                MonthData.push(item['conditionTask']);
                allTaskMonth += 1;
            }
        });
    });
}
MonthLoadWeek();
console.log(MonthData);

//load yearsDate

let YearData = [];

function loadDataYear() {
    task.id.forEach(function (item) {
        YearData.push(item['conditionTask']);
    });
}
loadDataYear();
console.log(YearData);

let quantityCompleted = 0;
let quantityEnded = 0;
let quantityActive = 0;

const loadInterest = (period, length) => {
    quantityCompleted = 0;
    quantityEnded = 0;
    quantityActive = 0;

    period.forEach((item) => {
        switch (item) {
            case ('active'):
                quantityActive += 1;
                break;
            case ('completed'):
                quantityCompleted += 1;
                break;
            case ('ended'):
                quantityEnded += 1;
                break;
        }
    });
    quantityCompleted = quantityCompleted / length * 100;
    quantityActive = quantityActive / length * 100;
    quantityEnded = quantityEnded / length * 100;
}

function changePeriod(){

    switch (switchPeriodOne.textContent.trim()) {
    case 'This month'.trim():
        loadInterest(MonthData, MonthData.length);
        break;
    case 'This week'.trim():
        loadInterest(WeekData, WeekData.length);
        break;
    case 'This year'.trim():
        loadInterest(YearData, lenghtJson);
        break;
        }
    }

loadInterest(WeekData, WeekData.length);

function DrawCircle() {

    // isolated
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

    function DrawTextPercent() {
        const percentCircleText = document.querySelector('.percent');
        percentCircleText.innerHTML = Math.ceil(quantityCompleted) + '%';
    }

    DrawCircleRed();
    DrawCircleOrange();
    DrawCircleGreen();
    DrawTextPercent();
}

DrawCircle();

let completedTask = 0;
const switchPeriodTaskOne = document.querySelector('.js-task-menu-change-week');
const switchPeriodTaskTwo = document.querySelector('.js-task-menu-change-month');
const switchPeriodTaskThree = document.querySelector('.js-task-menu-change-year');
const openTaskSwitch = document.querySelector('.js-switch-task-period');
let savePeriod;



function AdDn() {
switchPeriodTaskTwo.classList.add('dn');
switchPeriodTaskThree.classList.add('dn');
}

switchPeriodTaskOne.onclick = function () {
    switchPeriodTaskTwo.classList.add('dn');
    switchPeriodTaskThree.classList.add('dn');
}

AdDn();

openTaskSwitch.onclick = function () {
    switchPeriodTaskThree.classList.remove('dn');
    switchPeriodTaskTwo.classList.remove('dn');
}

switchPeriodOne.onclick = function () {
    switchPeriodTaskTwo.classList.add('dn');
    switchPeriodTaskThree.classList.add('dn');
}

switchPeriodTaskTwo.onclick = function () {
    savePeriodTwo = switchPeriodTaskOne.textContent
    switchPeriodTaskOne.innerHTML = switchPeriodTaskTwo.textContent;
    switchPeriodTaskTwo.innerHTML = savePeriodTwo;
    changePeriodTaskCompleted();
    renderTask();
    AdDn();
}

switchPeriodTaskThree.onclick = function () {
    savePeriodTwo = switchPeriodTaskOne.textContent
    switchPeriodTaskOne.innerHTML = switchPeriodTaskThree.textContent;
    switchPeriodTaskThree.innerHTML = savePeriodTwo;
    changePeriodTaskCompleted();
    renderTask();
    AdDn();
}

const firtTextBarTask = document.querySelector('.js-first-tex-bar-task');
const skaleTask = document.querySelector('.skale-tasks');
let lengthTaskMeter;
const loadCompleteTask = (period,lenght) => {
    completedTask = 0;
    period.forEach((item) => {
            if( item == 'completed'){
            completedTask += 1;
            lengthTaskMeter = lenght;
        }
    });
}

function changePeriodTaskCompleted(){

    switch (switchPeriodTaskOne.textContent.trim()) {
    case 'This month'.trim():
        loadCompleteTask(MonthData, allTaskMonth);
        break;
    case 'This week'.trim():
        loadCompleteTask(WeekData, AllTaskWeek);
        break;
    case 'This year'.trim():
        loadCompleteTask(YearData, lenghtJson);
        break;
        }
    }


function renderTask(){
    firtTextBarTask.innerHTML = completedTask + ' task completed out of ' + lengthTaskMeter;
    skaleTask.setAttribute('max',lengthTaskMeter);
    skaleTask.setAttribute('value',completedTask);
}


loadCompleteTask(WeekData, AllTaskWeek);

renderTask();
