//aside
const toggleButton = document.querySelector('.js-toggle-sidebar');
const sidebar = document.querySelector('.js-left-sidebar');
const header = document.querySelector('.js-header');
const taskBar = document.querySelector('.js-bar-task');
const mainSectionGenerallyBox = document.querySelector('.main-section-generally-box');
const mainSection = document.querySelector('.js-main-section');
const titleTextAside = document.querySelector('.js-title-text-aside-box');
const titleTextAsideBox = document.querySelector('.js-title-aside-box');

const asideItemText = document.querySelectorAll('.js-remove-aside');
const asideBox = document.querySelectorAll('.js-aside-change-flex-remove');

toggleButton.onclick = function () {
  const sidebarClasses = sidebar.classList;
  const isOpened = sidebarClasses.contains('open');
  isOpened && sidebarClasses.remove('open');
  !isOpened && sidebarClasses.add('open');
  taskBar.style.width = isOpened ? '780px' : '635px';
  titleTextAside.innerHTML = isOpened ? 'SaaS' : 'SaaS Kit';
  mainSectionGenerallyBox.style.paddingLeft = isOpened ? '8%' : '20%';
  mainSection.style.width = isOpened ? '1280px' : '1120px';
  titleTextAsideBox.style.justifyContent = isOpened ? 'center' : 'space-between';

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

  asideBox.forEach((item) => {
    item.style.justifyContent = 'left';
  });



  asideItemText.forEach((item) => {
    item.classList.remove('dn');
  });

}


//Calendar
const calendarNowMonth = document.querySelectorAll('.js-calendar-now-month');
const calendarNowDay = document.querySelectorAll('.js-calendar-now-day');
const calendarNowDate = document.querySelector('.js-now-date')

let now = new Date();
let nowYear;
let nowMonth;
let nowDate;
let nowWeekday;
let monthMassive = [];
let monthMassiveRecution = [];
let toggleMonth;
let i = 0;

monthMassive = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
monthMassiveRecution = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
weekdayMassive = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

nowYear = now.getFullYear();
nowMonth = now.getMonth();
nowDate = now.getDate();
nowWeekday = now.getDay();
maxDateMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

calendarNowDate.innerHTML = nowDate + " " + monthMassive[nowMonth] + ", " + weekdayMassive[nowWeekday];

calendarNowMonth.forEach((item) => {
  item.innerHTML = monthMassiveRecution[nowMonth];
});

calendarNowDay.forEach((item, index) => {
  if (nowDate + i - 1 >= maxDateMonth) {
    nowMonth += 1;
    nowDate = 1;
    i = 0;
    toggleMonth = index;
    calendarNowMonth.forEach((item, index) => {
      if (index >= toggleMonth) {
        item.innerHTML = monthMassiveRecution[nowMonth];
      }
    });
  }
  item.innerHTML = innerHTML = nowDate + i;
  i++;

});


























