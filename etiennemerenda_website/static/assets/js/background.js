function addLogoSvg () {

  let logo;
  logo = {url: "static/assets/svg/home/logo.svg", class: ".logo"};
  
  addSVG(logo, onLoadLogo)
  
}

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
    let logo = logoMain[0]

     logo.toggleClass('anime');
     logo.toggleClass('background');
    SVG(document).fire('logoAnimEnd')
  }
  
  startDashAnim(svg, backgroundTiming, fireEvent);
}

function logoHandler() {
  addLogoSvg()
}

const logoMain = []