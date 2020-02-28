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

  // Choose night day mode with local time
  const date = new Date();
  const hour = date.getHours()
  console.log(hour);

  if (hour < 7 | hour > 18) {
  //  switchMode();
  }
}

const toggleSvg = [{url: "static/assets/logo/toggle.svg", class: ".toggle"}]

toggleSvg.forEach(svg => {
  addSVG(svg, onLoadToggle)
});
