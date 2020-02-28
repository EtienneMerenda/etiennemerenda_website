// Total length setter for elements in svg 
function setPath (el) {
  const length = el.getTotalLength()
  el.style.strokeDasharray = length + " " + length;
  el.style.strokeDashoffset = length;
}

// Transition setter for elements in svg 
function setTransition (el, sec, ease) {
  // ease-in ease-out ease-in-out
  el.getBoundingClientRect();
  el.style.transition = el.style.WebkitTransition = 'stroke-dashoffset '+ sec + 's ' + ease + " 3s";
}

// Change style attribute to firing animation
function startDash (el) {
  el.style.strokeDashoffset = '0';
}

// Return if element have getTotalLength function (boolean)
function haveGetTotalLength (e) {
  return (typeof e.getTotalLength === "function")
}

// Setup animation parameters for dash-array animation
function setupAnimSVG (svg) {
  for (tag of svg) {
    if (haveGetTotalLength(tag)) {
      setPath(tag)
      setTransition(tag, "5", "ease-in-out")
    } else {
      setupAnimSVG(tag.children)
    }
  }
}

// Fire all animations in SVG (dasharray animation)
function startAnimSVG (svg) {
  for (tag of svg) {
    if (haveGetTotalLength(tag)) {
      startDash(tag)
    } else {
      startAnimSVG(tag.children)
    }
  }
}

// Add end animation event listner
function eventEndAnime (el) {

  el.on('transitionend', function() {
    el.toggleClass('anime');
    el.toggleClass('day')
    el.off('transitionend');
    el.fire('rotation')
  })
}

// Add svg with ajax request and setup event when are loaded
function addSVG (p, onLoadEvent) {
  const xhttp = new XMLHttpRequest()

  xhttp.open('GET', p.url, true)
  xhttp.send()
  xhttp.onload = onLoadEvent.bind(null, {class: p.class, svg: xhttp})
}

function onLoadJobs (data) {

  let className = data.class,
      svgCode = data.svg.responseText;
  

  // Add svg in DOM
  let svg = SVG().addTo(className).svg(svgCode);

  // Add event in end of animation
  eventEndAnime(svg)

  // Toggle anime class for SVG dash-array animation time
  svg.toggleClass("anime")

  // Get svg in svg element (SVG.js)
  let innerSvg = svg.node;

  // Setup animation
  setupAnimSVG(innerSvg.children)

  // Start animation 
  startAnimSVG(innerSvg.children)
}

// ------- Start add elements -----------------------------------------------

// Array contains url to get SVG and class name of div in DOM
const jobsSvg = [
  {url: "static/assets/logo/home/engrenage_wolf.svg", class: ".logo"},
  {url: "static/assets/logo/home/python.svg", class: ".python"},
  {url: "static/assets/logo/home/web.svg", class: ".web"},
  {url: "static/assets/logo/home/modeling.svg", class: ".modeling"},
  {url: "static/assets/logo/home/print.svg", class: ".print"}
]

// Load each svg on home page
jobsSvg.forEach(svg => {
  addSVG(svg, onLoadJobs)
});