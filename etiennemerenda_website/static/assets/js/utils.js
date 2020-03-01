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
  
// Total length setter for elements in svg 
function setPath (el) {
  const length = el.node.getTotalLength()
  el.css("stroke-dasharray", length + " " + length);
  el.css("stroke-dashoffset", length);
}
  
// Return if element have getTotalLength function (boolean)
function haveGetTotalLength (e) {
  return (typeof e.node.getTotalLength === "function")
}
  
// Fire dash aniamtion
function dash (el, duration, delay=0, wait=0, callback=() => {}) {
  
  el.animate({
    duration: duration,
    delay: delay,
    wait: wait
  }).css("stroke-dashoffset", 0).after(callback) // callBack event
}
  
// Fire all animations in SVG (dasharray animation)
function startDashAnim (svg, eventTiming, fire) {
  
  let duration, delay, wait;

  duration = eventTiming.duration;
  delay = eventTiming.delay;
  wait = eventTiming.wait;

  svg
    .children()
    .each(function (el) {
      if (haveGetTotalLength(el)) {
        dash(el, duration, delay, wait, fire);
      } else {
        startDashAnim(el, eventTiming, fire)
      }
    }
  )
}
  
  
  
// Add svg with ajax request and setup event when are loaded
function addSVG (svgParams, onLoadEvent) {

  let url = svgParams.url
  let class_ = svgParams.class
    
  const xhttp = new XMLHttpRequest()
  xhttp.open('GET', url, true)
  xhttp.send()
  xhttp.onload = onLoadEvent.bind(
    null, 
    {
      class: class_,
      svg: xhttp,
    }
  )
}
  
function preventAddSVG (tagSelector) {
    const svg = document.createElement("svg")
    
    return document.querySelector(tagSelector).contains(svg)
}