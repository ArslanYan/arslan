setInterval(() => {
  const clock = document.querySelector('#clock');
  const day = document.querySelector('#day');
  const month = document.querySelector('#month');
  const year = document.querySelector('#year');
  const amPm = document.querySelector('#am_pm');

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }

  if (seconds <= 9) {
    seconds = `0${seconds}`;
  }

  const cDate = date.getDate();
  const cMonth = date.getMonth();
  const cYear = date.getFullYear();

  const cDay = date.getDate();

  const daysName = [
    'Sunday',
    'Monday',
    'Tueaday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  if (hours < 12) {
    amPm.innerHTML = 'AM';
  } else {
    amPm.innerHTML = 'PM';
  }

  clock.innerHTML = `${hours}:${minutes}:${seconds}`;

  day.innerHTML = `${daysName[cDay]} | ${cDate}-`;

  month, (innerHTML = cMonth);

  year.innerHTML = `-${cYear}`;
}, 1000);
