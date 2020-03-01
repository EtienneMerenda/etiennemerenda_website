SVG(document).on('logoAnimEnd', errorHandler);

const backgroundTiming = {duration: 500, delay: 0, wait: 0}

function showError() {
  SVG(document).off('logoAnimEnd');
  
  SVG('.logo').toggleClass('anime');
  SVG('.logo').toggleClass('background');
  
  errorHandler()
}

function errorHandler () {
  setTimeout(function () {
    SVG('.error').css('opacity', '1')
    SVG('footer').css('opacity', '1')
  }, 300)
}

function mainHandler () {
  dayNightHandler(logoHandler)
}