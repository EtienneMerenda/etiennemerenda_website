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
  
function preventAddSVG (tagSelector) {
    const svg = document.createElement("svg")
    
    return document.querySelector(tagSelector).contains(svg)
}