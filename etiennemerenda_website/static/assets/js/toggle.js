let toggleButton

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

    // Change css variable value
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
  toggleButton.toggleClass("active");
  toggleButton.toggleClass("inactive");
}
