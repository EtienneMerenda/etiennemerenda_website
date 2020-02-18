// Script init document function when page is loaded

// Wait fully load page
function initHome () {

  // Choose night day mode with local time
  const date = new Date();
  const hour = date.getHours()
  console.log(hour);

  if (hour < 7 | hour > 20) {
    switchMode();
  }

}

// firefox
window.load = initHome

// Other nav
window.onload = initHome
