;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-baidu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M617.799115 701.846836l-48.212048 0c0 0-6.189979-3.821025-6.189979-14.608719L563.397087 586.078159l-54.407144 0.690732 0 112.530936c0 0 5.258771 29.753651 44.683688 29.753651l91.331102 0L645.004733 593.039711 617.801161 593.039711l0 108.807125L617.799115 701.846836z"  ></path>' +
    '' +
    '<path d="M454.581776 593.039711l-51.003628 0c0 0-47.073108-1.858324-63.570851 51.53677-5.711072 35.622312 5.102205 49.197492 6.986111 53.715389 1.915629 4.457522 17.136286 30.760584 55.3097 30.760584l79.482239 0L481.785348 524.394285l-27.203572-0.611937L454.581776 593.039711zM454.581776 701.846836l-40.220027 0c0 0-24.781406-0.685615-32.407084-29.219485-3.825119-12.750395 0.610914-24.919553 2.603291-30.65723 1.858324-5.712095 10.147104-21.729907 27.282367-21.729907l42.741453 0L454.581776 701.846836z"  ></path>' +
    '' +
    '<path d="M512.575608 0C230.134911 0 1.170149 228.991368 1.170149 511.430018c0 282.437627 228.964762 511.394203 511.405459 511.394203 282.439674 0 511.403412-228.956575 511.403412-511.394203C1023.979021 228.991368 795.015282 0 512.575608 0zM543.762911 271.417643c4.063549-37.193087 48.53439-94.254687 84.186378-86.097914 35.545564 8.101515 67.954695 55.226812 61.393255 95.792717-6.431479 40.61707-38.706557 94.199429-88.917122 87.664595C550.297745 362.347608 538.928813 316.922023 543.762911 271.417643zM438.589547 169.059394c37.564547 0 67.956741 43.249013 67.956741 96.646154 0 53.447283-30.391171 96.697319-67.956741 96.697319-37.507242 0-67.950601-43.250036-67.950601-96.697319C370.637922 212.308407 401.082305 169.059394 438.589547 169.059394zM226.653623 398.050762c0 0 8.023744-79.562057 63.092967-84.47495 43.751457-3.77293 75.950809 44.097334 79.294974 71.486124 2.072195 17.769712 11.316743 99.06218-56.715723 113.696482C244.451988 513.345648 219.191675 434.81713 226.653623 398.050762zM744.488515 740.737588c-37.216623 87.722924-173.228343 42.161239-173.228343 42.161239s-50.161447-16.128329-108.361987-3.216251c-58.202587 13.018501-108.385523 8.079002-108.385523 8.079002s-68.087725 1.645476-87.479377-84.368526C247.64061 617.268532 334.986957 570.114582 341.522814 562.091862c6.42841-8.157797 51.776224-38.97364 80.83812-87.693248 29.220508-48.720631 116.564809-87.717807 178.064488 8.076956 45.344744 64.976874 123.05257 125.120672 123.05257 125.120672S781.65295 653.077086 744.488515 740.737588zM733.11856 540.944216c-74.487481 1.676176-77.649498-50.339502-77.649498-87.61036 0-39.050388 8.023744-94.28027 68.00893-94.28027 59.875692 0 75.998905 58.522881 75.998905 77.942163C799.475874 456.547037 807.632648 539.299763 733.11856 540.944216z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-douban" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999996 0.008186c-282.767132 0-511.995907 229.228775-511.995907 511.995907s229.228775 511.995907 511.995907 511.995907 511.995907-229.228775 511.995907-511.995907S794.767128 0.008186 511.999996 0.008186zM297.694095 290.030559l428.602591 0 0 48.284703L297.694095 338.315262 297.694095 290.030559zM689.039131 388.67523l0 188.748828L334.951651 577.424058 334.951651 388.67523 689.039131 388.67523zM738.435145 733.969441 285.57201 733.969441l0-47.758724 131.969661 0c-12.078083-25.390273-27.842115-52.671617-47.382147-81.986269l47.382147-18.777669c18.804275 27.842115 35.567054 61.4567 50.429553 100.763938l89.6406 0c17.744129-30.329772 33.351596-63.96994 46.742581-100.763938l51.516304 18.777669c-13.478989 31.048133-28.018124 58.400085-43.422975 81.986269l125.987413 0L738.435145 733.969441z"  ></path>' +
    '' +
    '<path d="M386.301156 436.924117l251.913427 0 0 92.26845-251.913427 0 0-92.26845Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M411.270737 607.649684c-17.973895-7.504842-41.189053 0.229053-52.264421 17.542737-11.223579 17.394526-5.955368 38.103579 11.870316 46.201263 18.108632 8.232421 42.132211 0.417684 53.342316-17.421474C435.253895 635.944421 429.446737 615.370105 411.270737 607.649684z"  ></path>' +
    '' +
    '<path d="M455.545263 589.352421c-6.885053-2.721684-15.508211 0.579368-19.550316 7.329684-3.920842 6.790737-1.751579 14.524632 5.146947 17.367579 7.019789 2.883368 16.006737-0.458105 20.048842-7.370105C465.071158 599.740632 462.551579 591.912421 455.545263 589.352421z"  ></path>' +
    '' +
    '<path d="M427.52 469.315368c-115.968 11.439158-203.924211 82.216421-196.378947 158.073263 7.531789 75.910737 107.654737 128.161684 223.649684 116.749474 115.994947-11.439158 203.924211-82.216421 196.392421-158.140632C643.664842 510.140632 543.541895 457.889684 427.52 469.315368zM529.300211 648.299789c-23.673263 53.355789-91.769263 81.798737-149.530947 63.232-55.754105-17.933474-79.373474-72.811789-54.945684-122.246737 23.956211-48.464842 86.352842-75.870316 141.541053-61.561263C523.506526 542.437053 552.663579 596.143158 529.300211 648.299789z"  ></path>' +
    '' +
    '<path d="M512 0C229.241263 0 0 229.227789 0 512c0 282.758737 229.241263 512 512 512 282.772211 0 512-229.241263 512-512C1024 229.227789 794.772211 0 512 0zM455.531789 794.974316c-145.354105 0-293.941895-70.197895-293.941895-185.667368 0-60.362105 38.386526-130.182737 104.474947-196.069053 88.252632-87.929263 191.164632-127.986526 229.874526-89.397895 17.084632 17.003789 18.741895 46.457263 7.760842 81.623579-5.726316 17.690947 16.666947 7.895579 16.666947 7.936 71.343158-29.763368 133.564632-31.514947 156.321684 0.862316 12.139789 17.246316 10.954105 41.472-0.215579 69.510737-5.173895 12.921263 1.589895 14.928842 11.466105 17.879579 40.178526 12.422737 84.924632 42.455579 84.924632 95.380211C772.837053 684.638316 646.090105 794.974316 455.531789 794.974316zM718.672842 427.802947c4.715789-14.457263 1.765053-30.962526-9.202526-43.061895-10.954105-12.072421-27.136-16.666947-42.037895-13.527579l0-0.026947c-12.463158 2.694737-24.724211-5.268211-27.392-17.664-2.667789-12.463158 5.281684-24.697263 17.744842-27.338105 30.531368-6.467368 63.595789 2.937263 85.989053 27.715368 22.447158 24.764632 28.456421 58.489263 18.849684 88.064-3.907368 12.099368-16.936421 18.728421-29.062737 14.848-12.139789-3.920842-18.782316-16.922947-14.874947-28.995368L718.672842 427.816421zM853.261474 471.134316c-0.013474 0.013474-0.013474 0.080842-0.013474 0.107789-4.567579 14.026105-19.712 21.706105-33.778526 17.165474-14.133895-4.554105-21.854316-19.590737-17.300211-33.670737l0-0.013474c13.999158-43.169684 5.12-92.429474-27.567158-128.565895-32.714105-36.122947-80.949895-49.92-125.507368-40.488421-14.484211 3.085474-28.752842-6.130526-31.838316-20.574316-3.098947-14.403368 6.144-28.631579 20.641684-31.717053l0.026947 0c62.625684-13.271579 130.519579 6.117053 176.545684 56.966737C860.483368 341.113263 872.892632 410.381474 853.261474 471.134316z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-4tongshushaoer" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.003 2.356c-281.468 0-509.647 228.179-509.647 509.647s228.179 509.635 509.647 509.635 509.635-228.166 509.635-509.635-228.166-509.647-509.635-509.647zM652.614 232.666c-10.77-11.084-24.881-17.163-39.667-17.429-11.713-0.209-21.050-10.281-20.852-22.494 0.209-12.213 9.874-21.947 21.586-21.738 25.603 0.454 50.146 11.026 68.763 30.178 39.412 40.587 39.785 106.813 0.815 147.866-38.923 41.087-102.458 41.484-141.87 0.885-8.336-8.592-8.406-22.598-0.174-31.296 8.243-8.686 21.679-8.767 30.016-0.174 22.738 23.414 59.379 23.193 81.838-0.512 22.482-23.693 22.273-61.883-0.454-85.284zM366.746 621.855c27.338 56.887 83.131 93.574 145.258 93.574 58.913 0 112.285-32.972 141.008-85.331 1.536-2.794 2.934-5.517 4.202-8.174 5.216-10.944 17.953-15.415 28.455-9.979 10.491 5.438 14.786 18.71 9.571 29.657-1.653 3.458-3.446 6.95-5.391 10.479-36.21 65.981-103.551 107.591-177.846 107.591-78.346 0-148.738-46.281-183.213-118.001-5.251-10.933-1.012-24.218 9.477-29.69 10.48-5.473 23.229-1.059 28.48 9.874zM344.88 524.95c0-24.427 19.013-44.243 42.45-44.243 11.573 0 22.064 4.832 29.713 12.656 7.858 8.034 12.737 19.222 12.737 31.587 0 24.426-19.013 44.243-42.45 44.243-23.437 0-42.45-19.817-42.45-44.243zM597.799 524.95c0-24.427 19.013-44.243 42.45-44.243 11.572 0 22.063 4.832 29.713 12.656 7.858 8.034 12.737 19.222 12.737 31.587 0 24.426-19.013 44.243-42.45 44.243s-42.45-19.817-42.45-44.243zM774.726 702.682c-54.699 92.455-151.626 150.321-258.254 150.321-107.569 0-205.219-58.901-259.603-152.627-51.019-3.178-91.431-47.316-91.431-101.269 0-36.909 19.094-70.126 48.749-87.929 12.575-163.002 143.523-290.41 302.286-290.41 11.377 0 22.624 0.652 33.694 1.933 11.654 1.35 20.049 12.294 18.745 24.438-1.292 12.144-11.794 20.887-23.437 19.537-9.501-1.106-19.186-1.653-29.003-1.653-140.239 0-255.248 115.603-260.639 261.21l-0.535 14.38-12.831 5.319c-20.701 8.594-34.591 29.538-34.591 53.174 0 31.6 24.578 57.213 54.885 57.213 1.559 0 3.074-0.070 4.576-0.198l13.716-1.164 6.625 12.575c45.513 86.403 132.521 141.229 228.796 141.229 95.065 0 181.13-53.453 227.142-138.121l6.007-11.084 12.213-0.14c30.062-0.362 54.279-25.846 54.279-57.214 0-20.897-10.851-39.806-28.025-49.867l-10.665-6.251-0.151-12.749c-0.687-56.934-18.197-111.004-49.657-156.109-6.893-9.885-4.797-23.717 4.681-30.901 9.477-7.196 22.75-5.006 29.643 4.879 34.393 49.285 54.465 107.86 57.423 169.661 24.299 18.838 39.202 48.738 39.202 81.338 0 51.229-36.431 93.632-83.841 100.479z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1366 1024">' +
    '' +
    '<path d="M677.647059 0C394.541176 0 165.647059 228.894118 165.647059 512c0 283.105882 228.894118 512 512 512 283.105882 0 512-228.894118 512-512C1189.647059 228.894118 960.752941 0 677.647059 0zM528.564706 314.729412c7.529412-19.576471 19.576471-37.647059 34.635294-52.705882 15.058824-15.058824 33.129412-27.105882 51.2-34.635294 19.576471-7.529412 40.658824-12.047059 60.235294-12.047059 21.082353 0 42.164706 4.517647 60.235294 12.047059 19.576471 7.529412 37.647059 19.576471 51.2 34.635294 15.058824 15.058824 27.105882 33.129412 34.635294 52.705882 7.529412 19.576471 12.047059 40.658824 12.047059 61.741176 0 21.082353-4.517647 42.164706-12.047059 61.741176-7.529412 19.576471-19.576471 37.647059-34.635294 52.705882-15.058824 15.058824-33.129412 27.105882-51.2 34.635294-19.576471 7.529412-40.658824 12.047059-60.235294 12.047059-21.082353 0-42.164706-4.517647-60.235294-12.047059-19.576471-7.529412-37.647059-19.576471-51.2-34.635294-15.058824-15.058824-27.105882-33.129412-34.635294-52.705882-7.529412-19.576471-12.047059-40.658824-12.047059-61.741176C516.517647 353.882353 521.035294 332.8 528.564706 314.729412zM927.623529 772.517647c-6.023529 16.564706-18.070588 25.6-34.635294 34.635294-15.058824 9.035294-36.141176 12.047059-58.729412 12.047059 0 0 0 0 0 0l-316.235294 0c0 0 0 0 0 0-22.588235 0-42.164706-4.517647-58.729412-13.552941-16.564706-9.035294-28.611765-22.588235-34.635294-37.647059-6.023529-16.564706-6.023529-40.658824 0-58.729412 3.011765-7.529412 4.517647-16.564706 9.035294-24.094118 45.176471-87.341176 137.035294-147.576471 242.447059-147.576471 76.8 0 146.070588 30.117647 195.764706 81.317647 21.082353 22.588235 33.129412 39.152941 45.176471 63.247059 4.517647 7.529412 9.035294 15.058824 10.541176 24.094118 3.011765 9.035294 6.023529 22.588235 6.023529 34.635294C933.647059 752.941176 930.635294 763.482353 927.623529 772.517647z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-writing_h" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024a512 512 0 1 1 512-512 512.0512 512.0512 0 0 1-512 512z m209.92-716.8h-419.84a15.36 15.36 0 0 0 0 30.72h419.84a15.36 15.36 0 0 0 0-30.72z m0 133.12h-419.84a15.36 15.36 0 0 0 0 30.72h419.84a15.36 15.36 0 0 0 0-30.72zM286.72 588.8a15.36 15.36 0 0 0 15.36 15.36h235.52a15.36 15.36 0 0 0 0-30.72h-235.52a15.36 15.36 0 0 0-15.36 15.36zM721.92 573.44h-92.16a15.36 15.36 0 0 0 0 30.72h92.16a15.36 15.36 0 0 0 0-30.72z m0 133.12h-419.84a15.36 15.36 0 0 0 0 30.72h419.84a15.36 15.36 0 0 0 0-30.72z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
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

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)