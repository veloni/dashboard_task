//aside
const sidebar = document.querySelector('.js-left-sidebar');
const header = document.querySelector('.js-header');
const mainSectionGenerallyBox = document.querySelector('.main-section-generally-box');
const mainSection = document.querySelector('.js-main-section');


const asideItemText = document.querySelectorAll('.js-remove-aside');
const asideBox = document.querySelectorAll('.js-aside-change-flex-remove');

const listener = () => {
  const toggleButton = document.querySelector('.js-toggle-sidebar');

  toggleButton.onclick = function() {
    handleToggleButtonClick();
  };
};

const handleToggleButtonClick = () => {
  const sidebarClasses = sidebar.classList;
  const isOpened = sidebarClasses.contains('open');

  isOpened && sidebarClasses.remove('open');
  !isOpened && sidebarClasses.add('open');

  asideStyleHandler(isOpened);

  // decomposition
  if (isOpened) {
    sidebarClasses.remove('open');

    asideBox.forEach((item) => {
      item.style.justifyContent = 'center';
    });


    asideItemText.forEach((item) => {
      item.classList.add('dn');
    });
    return;
  }

  sidebarClasses.add('open');

  // decomposition
  asideBox.forEach((item) => {
    item.style.justifyContent = 'left';
  });

  asideItemText.forEach((item) => {
    item.classList.remove('dn');
  });
};

asideStyleHandler = (isOpened) => {
  const taskBar = document.querySelector('.js-bar-task');
  const titleTextAside = document.querySelector('.js-title-text-aside-box');
  const titleTextAsideBox = document.querySelector('.js-title-aside-box');

  taskBar.style.width = isOpened ? '780px' : '635px';
  titleTextAside.innerHTML = isOpened ? 'SaaS' : 'SaaS Kit';
  mainSectionGenerallyBox.style.paddingLeft = isOpened ? '8%' : '20%';
  mainSection.style.width = isOpened ? '1280px' : '1120px';
  titleTextAsideBox.style.justifyContent = isOpened ? 'center' : 'space-between';
};

listener();

// menuChangeBarTask

// isolate
const switchPeriod = document.querySelector('.js-switch-period');
const menuSwitchPeriod = document.querySelectorAll('.js-menu-switch-period');
let saveMonthTop;
let saveYearTop;

// rework
function AddDn() {
  menuSwitchPeriod.forEach((item, index) => {
    if (index > 0) {
      item.classList.add('dn');
    }
  });
}
AddDn();

// to listener
switchPeriod.onclick = function () {
  menuSwitchPeriod.forEach((item) => {
    item.classList.remove('dn');

  });
}

// rework
menuSwitchPeriod[0].onclick = function () {
  menuSwitchPeriod[0].innerHTML = menuSwitchPeriod[0].textContent;
  AddDn();
}

menuSwitchPeriod[1].onclick = function () {
  const savePeriod = menuSwitchPeriod[0].innerHTML ;
  menuSwitchPeriod[0].innerHTML = menuSwitchPeriod[1].textContent;
  menuSwitchPeriod[1].innerHTML = savePeriod;
  AddDn();
}

menuSwitchPeriod[2].onclick = function () {
  const savePeriod = menuSwitchPeriod[0].innerHTML ;
  menuSwitchPeriod[0].innerHTML = menuSwitchPeriod[2].textContent;
  menuSwitchPeriod[2].innerHTML = savePeriod;
  AddDn();
}

// Calendar

// rework variables
// isolated
// decomposition
const calendarNowMonth = document.querySelectorAll('.js-calendar-now-month');
const calendarNowDay = document.querySelectorAll('.js-calendar-now-day');
const calendarNowDate = document.querySelector('.js-now-date')

let now = new Date();
let nowYear;
let nowMonth;
let nowDate;
let nowWeekday;
let toggleMonth;
let i = 0;

const monthMassive = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthMassiveRecution = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdayMassive = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

nowYear = now.getFullYear();
nowMonth = now.getMonth();
nowDate = now.getDate();
nowWeekday = now.getDay();
maxDateMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

calendarNowDate.innerHTML = `${nowDate} ${monthMassive[nowMonth]}, ${weekdayMassive[nowWeekday]}`;

calendarNowMonth.forEach((item) => {
  item.innerHTML = monthMassiveRecution[nowMonth];
});

calendarNowDay.forEach((item, index) => {
  // rework
  if (nowDate + i - 1 >= maxDateMonth) {
    let resultMonth = nowMonth += 1;
    nowDate = 1;
    i = 0;
    toggleMonth = index;
    calendarNowMonth.forEach((item, index) => {
      if (index >= toggleMonth) {
        item.innerHTML = monthMassiveRecution[resultMonth];
      }
    });
  }
  item.innerHTML = innerHTML = nowDate + i;
  i++;

});