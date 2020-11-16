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


//week
//month
//year done

let DateTwo = new Date();
//alert(DateTwo.getDate());//день
//alert(DateTwo.getDay());// номер недели
//alert(DateTwo.getMonth());// номер недели 
// И ПОТОМ ЭТО В МАССИВЫ ХУЯК ХУЯК ТУДА СЮДА ПРОВЕРКА ПЕРЕРЕНДЕР И В ПРОДАКШН
