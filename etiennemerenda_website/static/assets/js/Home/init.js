// Script init document function when page is loaded

// Wait fully load page
window.onload = function () {

  // ----- SVG animations

  // Setup rotate for Dev Pyton SVG
  rotate(python.select("#circle"), 'r-360')

  // Define path for vibes
  let path = "M 0, 0 m -2, 0 a 2,2 0 1,0 2,0 a 2,2 0 1,0 -2,0"

  let coding = web.select("#Coding")

  vibes(coding, path, 1000)
  // animateAlongPath(path, coding, 0, 6000, animateAlongPath)

  // Choose night day mode with local time
  const date = new Date();
  const hour = date.getHours()
  console.log(hour);

  if (hour < 7 | hour > 20) {
    switchMode();
  }

}
