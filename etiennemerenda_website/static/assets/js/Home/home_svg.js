// Construct functions --------------------------------

// Dash animation ------------------------
// Total length setter for elements in svg 
function setPath (el) {
  const length = el.node.getTotalLength()
  el.css("stroke-dasharray", length + " " + length);
  el.css("stroke-dashoffset", length);
}

// Change style attribute to firing animation
function dash (el, duration, delay=0, wait=0, fire) {
  el.animate({
    duration: duration,
    delay: delay,
    wait: wait
  }).css("stroke-dashoffset", 0).after(fire)
}

// Return if element have getTotalLength function (boolean)
function haveGetTotalLength (e) {
  return (typeof e.node.getTotalLength === "function")
}

// Setup animation parameters for dash-array animation
function setupDashAnim (svg) {

  svg.children().each(function (el) {

    if (haveGetTotalLength(el)) {
      setPath(el);
    } else {
      setupDashAnim(el)}
    }
  )
}

// Fire all animations in SVG (dasharray animation)
function startDashAnim (svg, duration=8000, delay=500, wait=0, fire) {

  svg
    .children()
    .each(function (el) {
      if (haveGetTotalLength(el)) {
        dash(el, duration, delay, wait, fire);
      } else {
        startDashAnim(el, duration, delay, wait, fire)
      }
    }
  )
}


// EventListner on end of animation ------------
// Add end animation event listner
function eventEndAnime (el) {

  // When dashEnd fireing, remove anime class => fill day or night color.
  el.on('dashEnd', function(e) {
    el.toggleClass('anime');
    el.off('dashEnd');
  })
}

function dashEndJobsFire () {

  // Iterate svg in jobs and fire dashEnd event
  svgMain.forEach(s => {
    s.fire("dashEnd")
  });
}

// Add svg with ajax request and setup event when are loaded
function addSVG (p, onLoadEvent) {

  const xhttp = new XMLHttpRequest()
  xhttp.open('GET', p.url, true)
  xhttp.send()
  xhttp.onload = onLoadEvent.bind(
    null, 
    {
      class: p.class,
      svg: xhttp
    }
  )
}

// What appens when jobs SVG is loaded
function onLoadJobs (data) {

  let className, svgCode;

  className = data.class;
  svgCode = data.svg.responseText;

  // Add svg in DOM
  let svg = SVG().addTo(className).svg(svgCode);

  svgMain.push(svg);

  // Add event in end of animation
  eventEndAnime(svg)

  // Toggle anime class for SVG dash-array animation time
  svg.toggleClass("anime");

  // Setup animation
  setupDashAnim(svg);

  // Start draw animation 
  startDashAnim(svg, 8000, 3000, 0, dashEndJobsFire);
}

//What appens when logo svg is loaded
function onLoadLogo (data) {

  let className, svgCode;

  className = data.class;
  svgCode = data.svg.responseText;

  // Add svg in DOM
  let svg = SVG().addTo(className).svg(svgCode);
  
  setupDashAnim(svg)

  startDashAnim(svg, 3000, 0, 0, showHome)
}

function showHome() {

  SVG('.jobs').css('opacity', '1')
  SVG('footer').show('opacity', '1')
  addJobsSvg()
}

// ------- Start add elements -----------------------------------------------

function addJobsSvg () {

  // Array contains url to get SVG and class name of div in DOM
  const jobsSvg = [
    {url: "static/assets/logo/home/python.svg", class: ".python"},
    {url: "static/assets/logo/home/web.svg", class: ".web"},
    {url: "static/assets/logo/home/modeling.svg", class: ".modeling"},
    {url: "static/assets/logo/home/print.svg", class: ".print"}
  ]

  // Load each svg on home page
  jobsSvg.forEach(svg => {
    addSVG(svg, onLoadJobs)
  });
}



function addLogoSvg () {

  let logo;
  logo = {url: "static/assets/logo/home/engrenage.svg", class: ".logo"};

  addSVG(logo, onLoadLogo)

}

const svgMain = [];

addLogoSvg()
