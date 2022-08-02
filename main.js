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
  var diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  var displayDays = 0;



  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();


  //Calculate minute difference from 8:35pm
  var diffMinutes = Math.round(m - 35);
  var displayMinutes = 0;

  if (diffMinutes < 0 ) {
      displayMinutes = 60 + diffMinutes;
  } else {
      displayMinutes = diffMinutes;
  }

  //Calculate hour and day difference from 8:35pm
  var diffHours = Math.round((h - 20));
  var displayHours = 0;
  
  if (diffHours < 0 ) {
    displayHours = 23 + diffHours;
    displayDays = Math.round(diffDays - 1);

  } else {
    displayHours = diffHours;
    displayDays = diffDays;
  }



  timer.textContent = 
(displayDays + " days") + ", " + (displayHours + " hours") + ", " + (displayMinutes + " minutes") + ", and " + (s + " seconds");
}

setInterval(time, 1000);