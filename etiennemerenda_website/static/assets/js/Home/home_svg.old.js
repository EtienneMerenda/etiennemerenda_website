//Create logo svg
let logo = Snap("#logo");
let python = Snap("#python");
let web = Snap("#web")
let modeling = Snap("#modeling")
let print = Snap("#print")
let arrow = Snap("#arrow_left")

// Create callback to add arrow on left screen
function onArrowLoaded(data) {
  arrow.append(data);
}

// Create callback to add logo
function onLogoLoaded(data) {
    logo.append(data);
};
// Create callback to add python SVG
function onPythonLoaded(data) {
    python.append(data);

    // animate element of python svg
    rotate(python.select("#circle"), 'r-360')
};
// Create callback to add web SVG
function onWebLoaded(data) {
    web.append(data);

    // Define path for vibes
    let path = "M 0, 0 m -2, 0 a 2,2 0 1,0 2,0 a 2,2 0 1,0 -2,0"

    // get text of web svg
    let coding = web.select("#Coding")

    // Lauch vibes
    vibes(coding, path, 1000)
};
// Create callback to add modeling SVG
function onLModelingLoaded(data) {
    modeling.append(data);
};
// Create callback to add print SVG
function onPrintLoaded(data) {
    print.append(data);
};

// Load SVG file with snapSVG
Snap.load("static/assets/logo/Home/engrenage_wolf.svg", onLogoLoaded)
Snap.load("static/assets/logo/Home/python.svg", onPythonLoaded)
Snap.load("static/assets/logo/Home/web.svg", onWebLoaded)
Snap.load("static/assets/logo/Home/modeling.svg", onLModelingLoaded)
Snap.load("static/assets/logo/Home/print.svg", onPrintLoaded)
Snap.load("static/assets/logo/Home/arrow_left.svg", onArrowLoaded)

// fill svg with custom color
python.attr({fill: "#3282B8"})
web.attr({fill: "#3282B8"})
modeling.attr({fill: "#3282B8"})
print.attr({fill: "#3282B8"})

// Create function to rotate selected element
function rotate(el, deg) {

  // Get size of element
  box = el.getBBox()

  // Init parms for rotate
  let init = "r0," + box.cx + ',' + box.cy;
  let final = deg + ',' + box.cx + ',' + box.cy;

  // Initialise transfom attribute
  el.transform(init);

  // Setup animation
  el.animate({
    transform: final
  }, 40000, mina.linear, rotate.bind(null, el, deg)); // bind args ?
};


function vibes (el, path, delay) {

  // create path
  path = el.path(path).attr({ 'fill': 'none', 'stroke': 'none'});

  // Get length of path
  let pathLen = Snap.path.getTotalLength(path)

  // Get getBBox
  let box = el.getBBox()

  Snap.animate(
    from=0,
    to=pathLen,
    function(step) {
      // Each step, refresh position
      moveToPoint = Snap.path.getPointAtLength( path, step );
      x = moveToPoint.x;
      y = moveToPoint.y;
      el.transform('translate(' + x + ',' + y + ')');
  }, delay, mina.linear, function() {vibes.bind(null, el, path, delay)})
}
