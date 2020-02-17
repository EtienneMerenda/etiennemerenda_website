const toggleButton = document.querySelector('.toggle');
const toggleWrap = document.querySelector('.toggle_wrap');

const root = getComputedStyle(document.documentElement);

const nightBackground = root.getPropertyValue("--nightBackground");
const nightBackgroundLowOpacity = root.getPropertyValue("--nightBackgroundLowOpacity");
const nightFont = root.getPropertyValue("--nightFont");
const hooverNightFont = root.getPropertyValue("--hooverNightFont");
const nightFillSvg = root.getPropertyValue("--nightFillSvg");
const nightGitlabColor = root.getPropertyValue("--nightGitlabColor");

const dayBackground = root.getPropertyValue("--dayBackground");
const dayBackgroundLowOpacity = root.getPropertyValue("--dayBackgroundLowOpacity");
const dayFont = root.getPropertyValue("--dayFont");
const hooverDayFont = root.getPropertyValue("--hooverDayFont");
const dayFillSvg = root.getPropertyValue("--dayFillSvg");
const dayGitlabColor = root.getPropertyValue("--dayGitlabColor");

function setProp(variableName, value) {
  document.documentElement.style.setProperty(variableName, value);
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
  } else {
    setProp("--background", dayBackground);
    setProp("--backgroundLowOpacity", dayBackgroundLowOpacity);
    setProp("--font", dayFont);
    setProp("--hooverFont", hooverDayFont);
    setProp("--fillSvg", dayFillSvg);
    setProp("--gitlabColor", dayGitlabColor);
  }

  // Toggle class
  toggleWrap.classList.toggle("active");
  toggleWrap.classList.toggle("inactive");
}

toggleButton.onclick = switchMode
