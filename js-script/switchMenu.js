const switchPeriodOne = document.querySelector('.js-menu-switch-period-one');
const switchPeriodTwo = document.querySelector('.js-menu-switch-period-two');
const switchPeriodThree = document.querySelector('.js-menu-switch-period-three');
const openSwitch = document.querySelector('.js-switch-period-two');
const iconOpenSwitch = document.querySelector('.js-switch-period-two-open');
const headerBarGraph = document.querySelector('.js-header-bar-graph');
let savePeriodTwo;

function AddDnTwo() {
    switchPeriodThree.classList.add('dn');
    switchPeriodTwo.classList.add('dn');
    iconOpenSwitch.classList.add('dn');
    openSwitch.classList.remove('dn');
}

AddDnTwo();

openSwitch.onclick = function() {
    switchPeriodTwo.classList.remove('dn');
    switchPeriodThree.classList.remove('dn');
    iconOpenSwitch.classList.remove('dn');
    openSwitch.classList.add('dn');
}

switchPeriodOne.onclick = function() {
    switchPeriodTwo.classList.add('dn');
    switchPeriodThree.classList.add('dn');
    iconOpenSwitch.classList.add('dn');
    openSwitch.classList.remove('dn');
}

switchPeriodTwo.onclick = function() {
    savePeriodTwo = switchPeriodOne.textContent
    switchPeriodOne.innerHTML = switchPeriodTwo.textContent;
    switchPeriodTwo.innerHTML = savePeriodTwo;
    changePeriod();
    DrawCircle();
    AddDnTwo();
}

switchPeriodThree.onclick = function() {
    savePeriodTwo = switchPeriodOne.textContent
    switchPeriodOne.innerHTML = switchPeriodThree.textContent;
    switchPeriodThree.innerHTML = savePeriodTwo;
    changePeriod();
    DrawCircle();
    AddDnTwo();
}

let date = new Date();
let start = new Date(date.getFullYear(), 0, 0);
let diff = date - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);
let numberWeek = date.getDay();
let Month = date.getMonth();
let indexWeek = [];
let WeekDataSearch = [];
let WeekData = [];

function giveWeekIndex() {
    quantityDataMassive.forEach(function(item, index) {
        if (index < day + numberWeek && item !== 0) { 
            indexWeek.push(index);
            indexWeek.push(item);
        }
    });
}
giveWeekIndex();

function giveValueWeekSearch() {
    indexWeek.forEach(function(item, index) {
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
    task.id.filter(function(item, index) {
        WeekDataSearch.forEach(function(elem) {
            if (item['dueDate'] == elem) {
                WeekData.push(item['conditionTask']);
                AllTaskWeek += 1;
            }
        });
    });
}

DateLoadWeek();

let indexMonth = [];

function giveMonthIndex() {
    quantityDataMassive.forEach(function(item, index) {
        nowDate = now.getDate();
        if (index > day - nowDate && index < day - nowDate + maxDateMonth && item != 0) {
            indexMonth.push(index);
            indexMonth.push(item);
        }
    });
}

giveMonthIndex();

let monthDataSearch = [];

function giveValueMonthSearch() {
    indexMonth.forEach(function(item, index) {
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
    task.id.filter(function(item, index) {
        monthDataSearch.forEach(function(elem) {
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
    task.id.forEach(function(item) {
        YearData.push(item['conditionTask']);
    });
}
loadDataYear();

let YearsDataSearch = [];

function loadDataSeacrgYear() {
    task.id.forEach(function(item) {
        YearsDataSearch.push(item['dueDate']);
    });
}

/* console.log(YearsDataSearch); */

loadDataSeacrgYear();

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

    if (length === 0) {
        quantityCompleted = 0;
        quantityActive = 0;
        quantityEnded = 0;
    } else {
        quantityCompleted = quantityCompleted / length * 100;
        quantityActive = quantityActive / length * 100;
        quantityEnded = quantityEnded / length * 100;
    }
}

function changePeriod() {

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
const switchMenu = document.querySelector('.switch-menu');
let savePeriod;

function AdDn() {
    switchPeriodTaskTwo.classList.add('dn');
    switchPeriodTaskThree.classList.add('dn');
    switchPeriodOpen.classList.add('dn');
}

switchPeriodTaskOne.onclick = function() {
    switchPeriodTaskTwo.classList.add('dn');
    switchPeriodTaskThree.classList.add('dn');
    openTaskSwitch.classList.remove('dn');
    switchPeriodOpen.classList.add('dn');
}

AdDn();

openTaskSwitch.onclick = function() {
    switchPeriodTaskThree.classList.remove('dn');
    switchPeriodTaskTwo.classList.remove('dn');
    switchPeriodOpen.classList.remove('dn');
    openTaskSwitch.classList.add('dn');
}

switchPeriodTaskTwo.onclick = function() {
    savePeriodTwo = switchPeriodTaskOne.textContent
    switchPeriodTaskOne.innerHTML = switchPeriodTaskTwo.textContent;
    switchPeriodTaskTwo.innerHTML = savePeriodTwo;
    openTaskSwitch.classList.remove('dn');
    changePeriodTaskCompleted();
    renderTask();
    AdDn();
}

switchPeriodTaskThree.onclick = function() {
    savePeriodTwo = switchPeriodTaskOne.textContent
    switchPeriodTaskOne.innerHTML = switchPeriodTaskThree.textContent;
    switchPeriodTaskThree.innerHTML = savePeriodTwo;
    openTaskSwitch.classList.remove('dn');
    changePeriodTaskCompleted();
    renderTask();
    AdDn();
}

function renderTask() {
    firtTextBarTask.innerHTML = completedTask + ' task completed out of ' + lengthTaskMeter;
    skaleTask.style.width = 100 * completedTask / lengthTaskMeter + '%';
}

const firtTextBarTask = document.querySelector('.js-first-tex-bar-task');
const skaleTask = document.querySelector('.value-skale-tasks');
let lengthTaskMeter = 0;

const loadCompleteTask = (period, lenght) => {
    completedTask = 0;
    period.forEach((item) => {
        if (item == 'completed') {
            completedTask += 1;
            lengthTaskMeter = lenght;
        }
    });
}

function changePeriodTaskCompleted() {

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

//lineal graph

const switchPeriodLinealGraphOne = document.querySelector('.js-menu-change-week-lineal-graph');
const switchPeriodLinealGraphTwo = document.querySelector('.js-menu-change-month-lineal-graph');
const switchPeriodLinealGraphThree = document.querySelector('.js-menu-change-year-lineal-graph');
const closeLinealGraphSwitch = document.querySelector('.js-button-close-lineal-graph');
const openLinealGraphSwitch = document.querySelector('.js-button-open-lineal-graph');
let savePeriodLinealGraph = 0;

function addDnLinealGraph() {
    switchPeriodLinealGraphTwo.classList.add('dn');
    switchPeriodLinealGraphThree.classList.add('dn');
    openLinealGraphSwitch.classList.add('dn');
}

addDnLinealGraph();

closeLinealGraphSwitch.onclick = function() {
    openLinealGraphSwitch.classList.remove('dn');
    switchPeriodLinealGraphTwo.classList.remove('dn');
    switchPeriodLinealGraphThree.classList.remove('dn');
    closeLinealGraphSwitch.classList.add('dn');
}

//Research

let dateX = [];
let dateY = [];
let data = [];
let maxNumberX = 0;
let minNumberX = 0;
let maxNumberY = 0;
let minNumberY = 0;
let labelX = [];

//and for week
const monthDataFromLinealGraph = (period) => {

    data = [];
    dateX = [];
    dateY = [];
    maxNumberX = 0;
    minNumberX = 0;
    maxNumberY = 0;
    minNumberY = 0;
    labelX = [];

    let monthDataLinealGraph = [];
    let calcDateX = [];

    task.id.filter(function(item, index) {
        period.forEach(function(elem) {
            if (item['dueDate'] === elem && item['conditionTask'] === 'completed') {
                monthDataLinealGraph.push(elem);
            }
        });
    });

    console.log(monthDataLinealGraph);

    monthDataLinealGraph.filter(function(item, index) {
        let quanityCompleted = 0;
        monthDataLinealGraph.forEach(function(elem, index) {
            if (item === elem) {
                calcDateX.push(item);
                quanityCompleted += 1;
                delete monthDataLinealGraph[index];
            }
        });
        dateY.push(quanityCompleted);
    });

    calcDateX.forEach(function(item, index) {
        if (calcDateX[index] == calcDateX[index - 1]) {
            delete calcDateX[index - 1];
        }
    });

    calcDateX.forEach(function(item, index) {
        dateX.push(item.match(/\d+/));
    });

    let calcOne = dateY;
    let calcTwo = dateX;

    calcTwo.forEach(function(el, i, item) {
        item[i] = [item[i], calcOne[i]];
    })

    calcTwo.sort(function(a, b) {
        return a[0] - b[0]
    });
    let calcThree = calcTwo.map(function(el, i, item) {
        item[i] = el[0];
        return el[1];
    })

    dateX = calcTwo.flat();
    dateY = calcThree.flat();

    dateX.forEach(function(item, index) {
        dateX[index] = parseFloat(dateX[index]);
    })

    if (dateX.length === 12) {
        maxNumberX = 12;
        minNumberX = 0;
        labelX = monthMassiveRecutionForLinealGraph;
    } else {
        maxNumberX = Math.max.apply(Math, dateX);
        minNumberX = Math.min.apply(Math, dateX);
    }
   
    maxNumberY = Math.max.apply(Math, dateY);
    minNumberY = Math.min.apply(Math, dateY);

    dateX.forEach(function(item, index) {
        data[index] = {
            x: dateX[index],
            y: dateY[index]
        }
    });
   
};

const yearDataFromLinealGraph = () => {
    data = [];
    let yerLinealGraph = [];
    let yerLinealGraphTwo = [];
    data = [];
    dateX = [];
    dateY = [];
    maxNumberX = 0;
    minNumberX = 0;
    maxNumberY = 0;
    minNumberY = 0;
    labelX = [];

    task.id.forEach(function(item, index) {
        if (item['conditionTask'] === 'completed') {
            yerLinealGraph.push(item['dueDate']);
        }
    });

    yerLinealGraphTwo = yerLinealGraph;

    yerLinealGraphTwo.filter(function(item, i) {
        let saveCompletedTask = 0;
        yerLinealGraph.forEach(function(elem, index) {
            if (item === elem) {
                saveCompletedTask = saveCompletedTask + 1;
            }
            dateY[i] = saveCompletedTask;
        });
    });

    let monthDataNumber = [];
    let numberMonthDataNumber = [];

    yerLinealGraphTwo.forEach(function(item, index) {
        monthDataNumber.push(item.replace(/[0-9]/g, '').trim());
        numberMonthDataNumber.push(item.match(/\d+/));
    });

    let monthDataNumberValue = [];

    monthDataNumber.forEach(function(item, index) {
        monthMassive.forEach(function(elem, i) {
            if (item === elem) {
                monthDataNumberValue.push(monthValue[i]);
            }
        });
    });

    let monthForDateX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let monthForDateY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    monthDataNumber.forEach(function(item, index) {
        monthMassive.forEach(function(elem, i) {
            if (item === elem) {
                monthForDateY[i] = monthForDateY[i] + 1;
            }
        });
    });

    dateY = monthForDateY;
    dateX = monthForDateX;
   
    if (dateX.length === 12) {
        maxNumberX = 12;
        minNumberX = 0;
        labelX = monthMassiveRecutionForLinealGraph;
    } else {
        maxNumberX = Math.max.apply(Math, dateX);
        minNumberX = Math.min.apply(Math, dateX);
    }
   
    maxNumberY = Math.max.apply(Math, dateY);
    minNumberY = Math.min.apply(Math, dateY);

    dateX.forEach(function(item, index) {
        data[index] = {
            x: dateX[index],
            y: dateY[index]
        }
    });
}

monthDataFromLinealGraph(WeekDataSearch);

window.globalRerender(); 

function changePeriodLinealGraph(period){
    switch (period.trim()) {
        case 'This month'.trim():
            monthDataFromLinealGraph(monthDataSearch);
            document.querySelector('.js-trigger-charts').click();
            break;
        case 'This week'.trim():
            monthDataFromLinealGraph(WeekDataSearch);
            document.querySelector('.js-trigger-charts').click();
            break;
        case 'This year'.trim():
            yearDataFromLinealGraph();
            document.querySelector('.js-trigger-charts').click();
            break;
    }
} 

switchPeriodLinealGraphTwo.onclick = function () {
    changePeriodLinealGraph(switchPeriodLinealGraphTwo.textContent);
    savePeriodLinealGraph = switchPeriodLinealGraphOne.textContent
    switchPeriodLinealGraphOne.innerHTML = switchPeriodLinealGraphTwo.textContent;
    switchPeriodLinealGraphTwo.innerHTML = savePeriodLinealGraph;
    closeLinealGraphSwitch.classList.remove('dn');
    addDnLinealGraph();
} 

switchPeriodLinealGraphThree.onclick = function () {
    changePeriodLinealGraph(switchPeriodLinealGraphThree.textContent);
    savePeriodLinealGraph = switchPeriodLinealGraphOne.textContent
    switchPeriodLinealGraphOne.innerHTML = switchPeriodLinealGraphThree.textContent;
    switchPeriodLinealGraphThree.innerHTML = savePeriodLinealGraph;
    addDnLinealGraph();
    closeLinealGraphSwitch.classList.remove('dn');
}  

//yearDataFromLinealGraph(); 
//monthDataFromLinealGraph(monthDataSearch);
//monthDataFromLinealGraph(WeekDataSearch);
