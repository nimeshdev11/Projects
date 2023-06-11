
const endDate = "30 April 2023 2:00 PM";
document.getElementById("end_date").innerHTML = endDate;
const input = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const differ = (end - now) / 1000;
  
  if(differ < 0 ) return ;
  input[0].value =  Math.floor(differ / 3600 / 24);
  input[1].value =  Math.floor(differ / 3600) % 24;
  input[2].value =  Math.floor(differ / 60) % 60;
  input[3].value =  Math.floor(differ) % 60;

  input[0].value = formatTime( input[0].value)
  input[1].value = formatTime( input[1].value)
  input[2].value = formatTime( input[2].value)
  input[3].value = formatTime( input[3].value)


}

function formatTime(time){
return time < 10 ? `0 ${time}` : time

}
setInterval(() => {
  clock();
}, 5000);








// For div Box
 
// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minsEl = document.getElementById("mins");
// const secondsEl = document.getElementById("seconds");

// const newYears = "1 Jan 2021";

// function countdown() {
//     const newYearsDate = new Date(newYears);
//     const currentDate = new Date();

//     const totalSeconds = (newYearsDate - currentDate) / 1000;

//     const days = Math.floor(totalSeconds / 3600 / 24);
//     const hours = Math.floor(totalSeconds / 3600) % 24;
//     const mins = Math.floor(totalSeconds / 60) % 60;
//     const seconds = Math.floor(totalSeconds) % 60;

//     daysEl.innerHTML = days;
//     hoursEl.innerHTML = formatTime(hours);
//     minsEl.innerHTML = formatTime(mins);
//     secondsEl.innerHTML = formatTime(seconds);
// }

// function formatTime(time) {
//     return time < 10 ? `0${time}` : time;
// }

// // initial call
// countdown();

// setInterval(countdown, 1000);
// Footer



