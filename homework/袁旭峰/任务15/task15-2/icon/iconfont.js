;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-google" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M410.148864 279.972864c-40.522752-1.19808-67.724288 39.596032-60.695552 92.85632 6.962176 53.327872 45.504512 90.55232 86.028288 91.810816 40.464384 1.175552 63.740928-33.110016 56.771584-86.445056C485.289984 324.934656 450.605056 281.208832 410.148864 279.972864z"  ></path>'+
      ''+
      '<path d="M427.14112 573.678592c-60.367872-0.687104-111.486976 38.178816-111.486976 83.257344 0 45.973504 43.568128 84.265984 103.958528 84.265984 84.836352 0 114.412544-35.93728 114.412544-81.94048 0-5.551104-0.6912-10.984448-1.921024-16.229376-6.672384-26.00448-33.060864-40.281088-65.876992-63.115264C454.358016 576.062464 441.20064 573.812736 427.14112 573.678592z"  ></path>'+
      ''+
      '<path d="M513.676288 0c-281.63072 0-509.958144 228.763648-509.958144 510.911488 0 282.18368 228.328448 510.892032 509.958144 510.892032 281.673728 0 509.950976-228.708352 509.950976-510.892032C1023.627264 228.763648 795.350016 0 513.676288 0zM552.64256 375.949312c0 33.31584-18.363392 60.12928-44.394496 80.45056-25.376768 19.893248-30.186496 28.19584-30.186496 45.099008 0 14.39744 30.314496 35.861504 44.274688 46.309376 48.535552 36.478976 58.381312 59.42784 58.381312 105.023488 0 56.945664-61.270016 113.509376-160.78336 113.509376-87.346176 0-161.050624-35.557376-161.050624-92.490752 0-57.750528 61.134848-117.991424 148.466688-117.991424 9.531392 0 18.228224-0.26112 27.25376-0.26112-11.9296-11.593728-21.594112-21.61664-21.594112-39.1936 0-10.484736 3.291136-20.451328 7.98208-29.379584-4.736 0.305152-9.590784 0.618496-14.58688 0.618496-71.701504 0-113.475584-50.500608-113.475584-113.821696 0-61.983744 63.561728-118.367232 139.828224-118.367232 39.33184 0 150.327296 0 150.327296 0l-33.619968 35.369984-39.465984 0C537.884672 306.7904 552.64256 339.64032 552.64256 375.949312zM768.468992 366.660608l-69.35552 0 0 69.419008-34.670592 0 0-69.419008-69.280768 0L595.162112 331.922432l69.280768 0 0-69.489664 34.670592 0 0 69.489664 69.35552 0L768.468992 366.660608z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-facebook1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.328704 3.997696C231.589888 3.997696 3.976192 231.611392 3.976192 512.350208c0 280.732672 227.612672 508.346368 508.352512 508.346368 280.732672 0 508.346368-227.612672 508.346368-508.346368C1020.674048 231.548928 793.061376 3.997696 512.328704 3.997696L512.328704 3.997696zM643.73248 512.2816l-83.303424 0.068608-0.062464 305.005568L446.050304 817.355776 446.050304 512.350208l-76.253184 0L369.79712 407.2448l76.253184-0.063488-0.124928-61.889536c0-85.7856 23.25504-137.954304 124.224512-137.954304l84.13184 0 0 105.162752-52.614144 0c-39.33184 0-41.237504 14.680064-41.237504 42.066944l-0.124928 52.615168 94.550016 0L643.73248 512.2816 643.73248 512.2816zM643.73248 512.2816"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.097002 1023.999982C229.361557 1023.999982 9.0e-06 794.638434 9.0e-06 511.096993 9.0e-06 229.361548 229.361557 0 511.097002 0s511.096993 229.361548 511.096993 511.096993C1023.999991 794.638434 794.638443 1023.999982 511.097002 1023.999982M769.354493 377.453256c-18.059964 9.029982-39.731922 14.447972-59.597883 16.253968 21.671957-12.641975 37.925925-34.313932 46.955907-57.791886-19.865961 12.641975-43.343915 21.671957-66.821868 25.28395-23.477954-25.28395-61.403879-39.731922-101.135801-30.701939-45.149911 10.835979-77.657847 48.761904-81.26984 93.911815 0 10.835979 0 21.671957 1.805996 32.507936-86.687829-3.611993-164.345676-46.955907-216.719573-110.165783-9.029982 16.253968-14.447972 34.313932-14.447972 52.373897 0 36.119929 18.059964 68.627865 46.955907 86.687829-18.059964 0-34.313932-5.417989-46.955907-12.641975l0 1.805996c0 50.5679 36.119929 93.911815 84.881833 102.941797-9.029982 1.805996-18.059964 3.611993-27.089947 3.611993-7.223986 0-12.641975 0-19.865961-1.805996 12.641975 41.537918 52.373897 72.239858 97.523808 72.239858-36.119929 28.895943-81.26984 45.149911-130.031744 45.149911-9.029982 0-16.253968 0-25.28395-1.805996 46.955907 28.895943 101.135801 46.955907 160.733683 46.955907 193.241619 0 299.795409-160.733683 299.795409-299.795409 0-5.417989 0-9.029982 0-14.447972C736.846557 417.185178 754.906521 399.125213 769.354493 377.453256"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
