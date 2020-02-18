const toggleButton = document.querySelector('.toggle');
const toggleWrap = document.querySelector('.toggle_wrap');

console.log(toggleButton);


// Get all css values
const root = getComputedStyle(document.documentElement);

// Get night colors
const nightBackground = root.getPropertyValue("--nightBackground");
const nightBackgroundLowOpacity = root.getPropertyValue("--nightBackgroundLowOpacity");
const nightFont = root.getPropertyValue("--nightFont");
const hooverNightFont = root.getPropertyValue("--hooverNightFont");
const nightFillSvg = root.getPropertyValue("--nightFillSvg");
const nightGitlabColor = root.getPropertyValue("--nightGitlabColor");

// Get day colors
const dayBackground = root.getPropertyValue("--dayBackground");
const dayBackgroundLowOpacity = root.getPropertyValue("--dayBackgroundLowOpacity");
const dayFont = root.getPropertyValue("--dayFont");
const hooverDayFont = root.getPropertyValue("--hooverDayFont");
const dayFillSvg = root.getPropertyValue("--dayFillSvg");
const dayGitlabColor = root.getPropertyValue("--dayGitlabColor");

// Change css vars values
function setProp(variableName, value) {
  document.documentElement.style.setProperty(variableName, value);
}

// functions use to animate dot of toggle element
function toggleActivate (toggleDot) {

  // Remove st0 class to overwrite color of button element
  toggleDot.removeClass("st0");
  toggleDot.animate({transform: "t21,0"}, 300, mina.easein)
  toggleDot.attr({fill: "black"})
  console.log("toggled")
}

function toggleDeactivate (toggleDot) {
  toggleDot.animate({transform: "t0,0"}, 300, mina.easein)
  toggleDot.attr({fill: "white"})
}

// Get element needs to be toggled
function switchMode () {
  if (toggleWrap.classList.contains("inactive")) {

    // Change css varibel value
    setProp("--background", nightBackground);
    setProp("--backgroundLowOpacity", nightBackgroundLowOpacity);
    setProp("--font", nightFont);
    setProp("--hooverFont", hooverNightFont);
    setProp("--fillSvg", nightFillSvg);
    setProp("--gitlabColor", nightGitlabColor);

    // Active toggle
    toggleActivate(toggleDot);
  } else {
    setProp("--background", dayBackground);
    setProp("--backgroundLowOpacity", dayBackgroundLowOpacity);
    setProp("--font", dayFont);
    setProp("--hooverFont", hooverDayFont);
    setProp("--fillSvg", dayFillSvg);
    setProp("--gitlabColor", dayGitlabColor);

    // Animate button
    toggleDeactivate(toggleDot);
  }

  // Toggle class
  toggleWrap.classList.toggle("active");
  toggleWrap.classList.toggle("inactive");
}

toggleButton.onclick = switchMode
