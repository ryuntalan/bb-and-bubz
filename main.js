/*
const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const menuButton = document.querySelector('.menuButton')
const menuClose = document.querySelector('.menuClose')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    menuButton.classList.toggle('invisible')
    menuClose.classList.toggle('visible')
    
})
*/

var timer = document.getElementById('timer');

function time() {
  var d = new Date();

  var girlfriendDate = new Date('12/10/2021');
  var todaysDate = new Date();

  var diffTime = Math.abs(todaysDate - girlfriendDate);
  var diffDays = Math.round((diffTime / (1000 * 60 * 60 * 24)) - 1);

  var displayDays = 0;
  var displayHours = 0;
  var displayMinutes = 0;

  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  var diffHours = Math.round((h - 20));
  var diffMinutes = Math.round(m - 35);

  //Calculate hour and day difference from 8:35pm
  if (diffHours < 0 ) {
    //if hours are below 20. It's before 8:00pm.
    displayHours = 24 + diffHours;
    displayDays = diffDays - 1;
    console.log(diffDays);

  } else {
    //if hours are above 20. It's after 8:00pm.
    displayHours = diffHours;
    displayDays = diffDays;
  }

  //Calculate minute difference from 8:35pm
  if (diffMinutes < 0 ) {
    //if minutes are below 35 minutes
    displayMinutes = 60 + diffMinutes;
    displayHours = displayHours - 1
  } else {
    //if minutes are at or above 35 minutes
    displayMinutes = diffMinutes;
  }  

  timer.textContent = 
(displayDays + " days") + ", " + (displayHours + " hours") + ", " + (displayMinutes + " minutes") + ", and " + (s + " seconds");
}


setInterval(time, 1000);