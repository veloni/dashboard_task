const switchPeriodOne = document.querySelector('.js-menu-switch-period-one');
const switchPeriodTwo = document.querySelector('.js-menu-switch-period-two');
const switchPeriodThree = document.querySelector('.js-menu-switch-period-three');
const openSwitch = document.querySelector('.js-switch-period-two');
let savePeriodTwo;

function AddDnTwo() {
    menuSwitchPeriod.forEach((item, index) => {
        switchPeriodThree.classList.add('dn');
        switchPeriodTwo.classList.add('dn');
    });
}

AddDnTwo();

openSwitch.onclick = function () {
    switchPeriodTwo.classList.remove('dn');
    switchPeriodThree.classList.remove('dn');
}

switchPeriodOne.onclick = function () {
    switchPeriodTwo.classList.add('dn');
    switchPeriodThree.classList.add('dn');
}

switchPeriodTwo.onclick = function () {
    savePeriodTwo = switchPeriodOne.textContent
    switchPeriodOne.innerHTML = switchPeriodTwo.textContent;
    switchPeriodTwo.innerHTML = savePeriodTwo;
    AddDnTwo();
}

switchPeriodThree.onclick = function () {
    savePeriodTwo = switchPeriodOne.textContent
    switchPeriodOne.innerHTML = switchPeriodThree.textContent;
    switchPeriodThree.innerHTML = savePeriodTwo;
    AddDnTwo();

}

//alert(DateTwo.getDate());//день
//alert(DateTwo.getDay());// номер недели
//alert(DateTwo.getMonth());// номер недели 
// И ПОТОМ ЭТО В МАССИВЫ ХУЯК ХУЯК ТУДА СЮДА ПРОВЕРКА ПЕРЕРЕНДЕР И В ПРОДАКШН


let date = new Date();
let start = new Date(date.getFullYear(), 0, 0);
let diff = date - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay); // получаем порядковый номер сегодняшнего дня
let numberWeek = date.getDay(); // порядковый номер недели
let Month = date.getMonth();

console.log(day);

let indexWeek = [];
let WeekDataSearch = [];
let WeekData = [];

function giveWeekIndex(){
    quantityDataMassive.forEach(function(item,index) {

        if (index > day - numberWeek && index < day - numberWeek + 8 && item != 0)
        {
         indexWeek.push(index);
         indexWeek.push(item);
        }
        });
}
giveWeekIndex();

//to config
let monthMassiveTwo = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

function giveValueWeekSearch(){
    indexWeek.forEach(function(item,index) {
        if(index % 2 == 0)
        {
            console.log(item);
            let dateNumberYears = new Date(2020, 0, item);
            let maxDateMonthTwo = new Date(dateNumberYears.getFullYear(), dateNumberYears.getMonth() + 1, 0).getDate();
            let giveMonth = dateNumberYears.getMonth();
            let giveDate = dateNumberYears.getDate();
        
            if(giveDate > maxDateMonthTwo){
                giveDate = 0;
                giveMonth += 1;
            }
            WeekDataSearch.push(giveDate +' '+ monthMassiveTwo[giveMonth]);
        }
        });
}
giveValueWeekSearch();

function DateLoad(){

    task.id.filter(function(item, index) {
        WeekDataSearch.forEach(function(elem) {
            if(item['dueDate'] == elem)
            {
                WeekData.push(item['conditionTask'])
            }
        });
    });
}

DateLoad();

console.log(WeekData);










