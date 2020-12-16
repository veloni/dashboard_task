let now = new Date();
let nowYear;
let nowMonth;
let nowDate;
let nowWeekday;
let toggleMonth;
let i = 0;

function loadCalendar() {
  
const switchPeriod = document.querySelector('.js-switch-period');
const menuSwitchPeriod = document.querySelectorAll('.js-menu-switch-period');;
const boxSwitchMenu = document.querySelector('.box-switch-menu');
const headerTask = document.querySelector('.box-text-header-bar-task');
let saveMonthTop;
let saveYearTop;

const calendarNowMonth = document.querySelectorAll('.js-calendar-now-month');
const calendarNowDay = document.querySelectorAll('.js-calendar-now-day');
const calendarNowDate = document.querySelector('.js-now-date')

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
}

loadCalendar();