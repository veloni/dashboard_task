const loadCalendar = () => {
	let i = 0;
	const calendarNowMonth = document.querySelectorAll('.js-calendar-now-month');
	const calendarNowDay = document.querySelectorAll('.js-calendar-now-day');
	const calendarNowDate = document.querySelector('.js-now-date')

	let nowMonth = _now.getMonth();
	let nowDate = _now.getDate();
	let nowWeekday = _now.getDay();
	let maxDateMonth = new Date(_now.getFullYear(), _now.getMonth() + 1, 0).getDate();

	calendarNowDate.innerHTML = `${nowDate} ${_monthMassive[nowMonth]}, ${_weekdayMassive[nowWeekday]}`;

	calendarNowMonth.forEach((item) => item.innerHTML = _monthMassiveRecution[nowMonth]);

	calendarNowDay.forEach((item, index) => {
		if (nowDate + i - 1 >= maxDateMonth) {
			let resultMonth = nowMonth += 1;
			nowDate = 1;
			i = 0;
			toggleMonth = index;

			calendarNowMonth.forEach((item, index) => {
				if (index >= toggleMonth) {
					if (_monthMassiveRecution[resultMonth] === undefined) {item.innerHTML = 'Jan';} 
					item.innerHTML = _monthMassiveRecution[resultMonth];
				}
			});
		}

		item.innerHTML = innerHTML = nowDate + i;
		i++;
	});
	
}

loadCalendar();