const body = document.querySelector('body')
let toggleButton

// functions use to animate dot of toggle element
function toggleActivate (toggleDot) {

  toggleDot
    .animate(500, '>')
    .transform({translateX: "21"})
  toggleDot
    .css('fill', 'rgb(27, 38, 44)')

}

function toggleDeactivate (toggleDot) {
  toggleDot
    .animate(500, '<')
    .transform({translateX: "0"})
  toggleDot
    .css('fill', 'white')
}

// Get element needs to be toggled
function switchMode () {

  if (toggleButton.hasClass("inactive")) {

    // Active toggle
    toggleActivate(toggleDot);

    body.classList.toggle("night")
    body.classList.toggle("day")
  
  } else {

    // Animate button
    toggleDeactivate(toggleDot);

    body.classList.toggle("night")
    body.classList.toggle("day")

  }

  // Toggle class
  toggleButton.toggleClass("active");
  toggleButton.toggleClass("inactive");
}
