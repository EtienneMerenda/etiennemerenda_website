// Add event listener on document to fire animations
SVG(document).on('logoAnimEnd', showHome)

const backgroundTiming = {duration: 1500, delay: 0, wait: 0}
const jobsTiming = {duration: 4000, delay: 300, wait: 0}

function mainHandler () {
  dayNightHandler(logoHandler)
}

function showHome() {

  // When jobs handler is executed, remove event listener.
  SVG(document).off('logoAnimEnd')

  setTimeout(function () {
    SVG('.jobs').css('opacity', '1')
    SVG('footer').css('opacity', '1')
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
  startDashAnim(svg, jobsTiming, fireEvent); //startDashAnim(svg, 4000, 300, 0, dashEndJobsFire);
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
