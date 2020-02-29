function mainHandler () {
  dayNightHandler(logoHandler)
}

function dayNightHandler(callback) {
  // Choose night day mode with local time
  const date = new Date();
  const hour = date.getHours()

  if (hour > 20 | hour < 7) {
    switchMode(callback);
  } else {
    callback()
  }
}

// Logo handler
function logoHandler() {
  addLogoSvg()
}

function addLogoSvg () {

  let logo;
  logo = {url: "static/assets/svg/home/logo.svg", class: ".logo"};

  addSVG(logo, onLoadLogo)

}

//What appens when logo svg is loaded
function onLoadLogo (data) {

  let className, svgCode;

  className = data.class;
  svgCode = data.svg.responseText;

  // Add svg in DOM
  let svg = SVG().addTo(className).svg(svgCode);

  // Add svg in handler
  logoMain.push(svg);

  svg.toggleClass('anime')

  setupDashAnim(svg);

  function fireEvent () {
    SVG(document).fire('fireJobs')
  }

  startDashAnim(svg, 1500, 200, 0, fireEvent); // startDashAnim(svg, 1500, 200, 0, showHome);
}

// Add event listener on document to fire animations
SVG(document).on('fireJobs', showHome)

function showHome() {

  // When jobs handler is executed, remove event listener.
  SVG(document).off('fireJobs')

  let logo = logoMain[0]

  logo.toggleClass('anime');
  logo.toggleClass('background');

  setTimeout(function () {
    SVG('.jobs').css('opacity', '1')
    SVG('footer').show('opacity', '1')
    jobsHandler()
  }, 300)
}

function jobsHandler () {

  // Array contains url to get SVG and class name of div in DOM
  const jobsSvg = [
    {url: "static/assets/svg/home/python.svg", class: ".python"},
    {url: "static/assets/svg/home/web.svg", class: ".web"},
    {url: "static/assets/svg/home/modeling.svg", class: ".modeling"},
    {url: "static/assets/svg/home/print.svg", class: ".print"}
  ]

  // Load each svg on home page
  jobsSvg.forEach(svg => {
    addSVG(svg, onLoadJobs)
  });
}

// What appens when jobs SVG is loaded
function onLoadJobs (data) {

  let className, svgCode;

  className = data.class;
  svgCode = data.svg.responseText;

  // Add svg in DOM
  let svg = SVG().addTo(className).svg(svgCode);

  jobsMain.push(svg);

  // Toggle anime class for SVG dash-array animation time
  svg.toggleClass("anime");

  // Setup animation
  setupDashAnim(svg);

  function fireEvent () {
    SVG(document).fire('fireDashEnd')
  }

  // Start draw animation 
  startDashAnim(svg, 4000, 300, 0, fireEvent); //startDashAnim(svg, 4000, 300, 0, dashEndJobsFire);
}

SVG(document).on('fireDashEnd', jobsEndAnim)

function jobsEndAnim () {

  SVG(document).off('fireDashEnd');

  jobsMain.forEach((svg) => {
    svg.toggleClass('anime')
  })
}

// Create const to handle fire events
const jobsMain = [];
const logoMain = []
