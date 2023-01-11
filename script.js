const message = document.getElementById("message");
const dateDisplay = document.getElementById("date");
const clockDisplay = document.getElementById("clock");
const weekDisplay = document.getElementById("week");
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
const currentWeekDay = weekdays[currentDate.getDay()];
const currentDay = currentDate.getDate();
const currentMonth = months[currentDate.getMonth()]
const startDate = new Date(currentDate.getFullYear(), 0, 1);
const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
const currentWeek = Math.ceil(days / 7);

dateDisplay.textContent = `${currentWeekDay} ${currentDay} ${currentMonth}`;
weekDisplay.textContent = `Week ${currentWeek}`;

function updateClock() {
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds();
  clockDisplay.textContent = `${currentHour}:${currentMinute}:${currentSecond}`;
}

function clock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  h = checkTime(h);
  m = checkTime(m);
  clockDisplay.textContent = h + ":" + m;
  if (h >= 0 && h <= 6) {
    message.textContent = "Shouldn't you be sleeping?";
  } else if (h >= 7 && h <= 11) {
    message.textContent = "Good morning sleepy hedgehog"
  } else if (h >= 19 && h <= 22) {
    message.textContent = "Good evening honey bear"
  } else if (h === 23) {
    message.textContent = "Time to get some rest baby bug"
  } else if (h === 13 && m === 37) {
    message.textContent = "Love you panda"
  } else {
    message.textContent = "Welcome back Christiane"
  }
  setTimeout(clock, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };
  return i;
}

clock();