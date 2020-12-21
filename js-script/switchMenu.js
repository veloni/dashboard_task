const switchPeriodOne = document.querySelector('.js-menu-switch-period-one');
const switchPeriodTwo = document.querySelector('.js-menu-switch-period-two');
const switchPeriodThree = document.querySelector('.js-menu-switch-period-three');
const openSwitch = document.querySelector('.js-switch-period-two');
const headerBarGraph = document.querySelector('.js-header-bar-graph');



let savePeriodTwo;

/* function openSwitchMenu(){
  switchPeriodOne.classList.add('translate60percent');
}

function closeSwitchMenu(){
    switchPeriodOne.classList.remove('translate60percent');
}

function AddDnTwo() {
    switchPeriodThree.classList.add('dn');
    switchPeriodTwo.classList.add('dn');
}

AddDnTwo(); 


openSwitch.onclick = function () {
    switchPeriodTwo.classList.remove('dn');
    switchPeriodThree.classList.remove('dn');
    openSwitchMenu();
}

switchPeriodOne.onclick = function () {
    switchPeriodTwo.classList.add('dn');
    switchPeriodThree.classList.add('dn');
    closeSwitchMenu();
}

switchPeriodTwo.onclick = function () {
    savePeriodTwo = switchPeriodOne.textContent
    switchPeriodOne.innerHTML = switchPeriodTwo.textContent;
    switchPeriodTwo.innerHTML = savePeriodTwo;
    closeSwitchMenu();
    changePeriod();
    DrawCircle();
    AddDnTwo();
}

switchPeriodThree.onclick = function () {
    savePeriodTwo = switchPeriodOne.textContent
    switchPeriodOne.innerHTML = switchPeriodThree.textContent;
    switchPeriodThree.innerHTML = savePeriodTwo;
    closeSwitchMenu();
    changePeriod();
    DrawCircle();
    AddDnTwo();
}
 */
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
            WeekDataSearch.push(giveDate + 1 + ' ' + monthMassive[giveMonth]);
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
            monthDataSearch.push(giveDate + 1 + ' ' + monthMassive[giveMonth]);
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

//load yearsDate

let YearData = [];

function loadDataYear() {
    task.id.forEach(function (item) {
        YearData.push(item['conditionTask']);
    });
}
loadDataYear();

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


let completedTask = 0;
const switchPeriodTaskOne = document.querySelector('.js-task-menu-change-week');
const switchPeriodTaskTwo = document.querySelector('.js-task-menu-change-month');
const switchPeriodTaskThree = document.querySelector('.js-task-menu-change-year');
const openTaskSwitch = document.querySelector('.js-switch-task-period');
const switchPeriodOpen = document.querySelector('.js-switch-task-period-open');
let savePeriod;

function AdDn() {
    switchPeriodTaskTwo.classList.add('dn');
    switchPeriodTaskThree.classList.add('dn');
    switchPeriodOpen.classList.add('dn');
}

switchPeriodTaskOne.onclick = function () {
    switchPeriodTaskTwo.classList.add('dn');
    switchPeriodTaskThree.classList.add('dn');
    openTaskSwitch.classList.remove('dn');
    switchPeriodOpen.classList.add('dn');
}

AdDn();

openTaskSwitch.onclick = function () {
    switchPeriodTaskThree.classList.remove('dn');
    switchPeriodTaskTwo.classList.remove('dn');
    switchPeriodOpen.classList.remove('dn');
    openTaskSwitch.classList.add('dn');
}

switchPeriodOne.onclick = function () {
    switchPeriodTaskTwo.classList.add('dn');
    switchPeriodTaskThree.classList.add('dn');
    openTaskSwitch.classList.remove('dn');
}

switchPeriodTaskTwo.onclick = function () {
    savePeriodTwo = switchPeriodTaskOne.textContent
    switchPeriodTaskOne.innerHTML = switchPeriodTaskTwo.textContent;
    switchPeriodTaskTwo.innerHTML = savePeriodTwo;
    openTaskSwitch.classList.remove('dn');
    changePeriodTaskCompleted();
    renderTask();
    AdDn();
}

switchPeriodTaskThree.onclick = function () {
    savePeriodTwo = switchPeriodTaskOne.textContent
    switchPeriodTaskOne.innerHTML = switchPeriodTaskThree.textContent;
    switchPeriodTaskThree.innerHTML = savePeriodTwo;
    openTaskSwitch.classList.remove('dn');
    changePeriodTaskCompleted();
    renderTask();
    AdDn();
}

function renderTask(){
    firtTextBarTask.innerHTML = completedTask + ' task completed out of ' + lengthTaskMeter;
    skaleTask.style.width = 100*completedTask/lengthTaskMeter+'%';
}

const firtTextBarTask = document.querySelector('.js-first-tex-bar-task');
const skaleTask = document.querySelector('.value-skale-tasks');
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

loadCompleteTask(WeekData, AllTaskWeek);


