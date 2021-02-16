const loadCalendar = () => {
  let i = 0;

  const calendarNowMonth = document.querySelectorAll('.js-calendar-now-month');
  const calendarNowDay = document.querySelectorAll('.js-calendar-now-day');
  const calendarNowDate = document.querySelector('.js-now-date')

  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const nowDate = now.getDate();
  const nowWeekday = now.getDay();
  const maxDateMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

  calendarNowDate.innerHTML = `${nowDate} ${monthMassive[nowMonth]}, ${weekdayMassive[nowWeekday]}`;

  calendarNowMonth.forEach((item) => {
      item.innerHTML = monthMassiveRecution[nowMonth];
  });

  calendarNowDay.forEach((item, index) => {
      if (nowDate + i - 1 >= maxDateMonth) {
          let resultMonth = nowMonth += 1;
          nowDate = 1;
          i = 0;
          toggleMonth = index;
          calendarNowMonth.forEach((item, index) => {
              if (index >= toggleMonth) {
                  if (monthMassiveRecution[resultMonth] === undefined) {
                      item.innerHTML = 'Jan';
                  } else {
                      item.innerHTML = monthMassiveRecution[resultMonth];
                  }
              }
          });
      }
      item.innerHTML = innerHTML = nowDate + i;
      i++;
  });
}

loadCalendar();