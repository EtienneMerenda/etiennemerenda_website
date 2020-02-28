const body = document.querySelector('body')
let toggleButton

// functions use to animate dot of toggle element
function toggleActivate (toggleDot) {

  // Remove st0 class to overwrite color of button element
  toggleDot.animate(500, '>').transform({translateX: "21"})
  toggleDot.fill("black")
}

function toggleDeactivate (toggleDot) {
  toggleDot.animate(500, '<').transform({translateX: "0"})
  toggleDot.fill("white")
}

// Get element needs to be toggled
function switchMode () {

  if (toggleButton.hasClass("inactive")) {

    body.classList.toggle("night")
    body.classList.toggle("day")

    // Active toggle
    toggleActivate(toggleDot);
  } else {

    body.classList.toggle("night")
    body.classList.toggle("day")

    // Animate button
    toggleDeactivate(toggleDot);
  }

  // Toggle class
  toggleButton.toggleClass("active");
  toggleButton.toggleClass("inactive");
}
