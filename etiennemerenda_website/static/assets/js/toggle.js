const body = document.querySelector('body')
let toggleButton

function onLoadToggle (data) {

  let className = data.class,
      svgCode = data.svg.responseText;

  // Add svg in DOM
  let svg = SVG().addTo(className).svg(svgCode);

  // Get dot svg part of toggle
  toggleDot = SVG('#toggle #dot');
  toggleButton = SVG('#toggle');

  // Add inactive class
  toggleButton.toggleClass("inactive")

  // add eventlistner on toggleButton
  toggleButton.click(switchMode)

  mainHandler()
}

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
function switchMode (callback) {

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

  if (callback.constructor.name === "Function") {callback()}

  
  
}

const toggleSvg = [{url: "static/assets/logo/toggle.svg", class: ".toggle"}]

// Load togle button and fire events to load others components
toggleSvg.forEach(svg => {
  addSVG(svg, onLoadToggle)
});