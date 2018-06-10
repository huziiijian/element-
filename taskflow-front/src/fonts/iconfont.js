;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-accessory" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M697.83 327.048l-64.952-64.922L308.07 586.868c-53.814 53.792-53.814 141.048 0 194.844 53.804 53.792 141.06 53.792 194.874 0l389.772-389.708c89.712-89.662 89.712-235.062 0-324.726-89.666-89.704-235.114-89.704-324.784 0L158.704 476.456c-0.29 0.304-0.612 0.576-0.876 0.846-125.102 125.096-125.102 327.856 0 452.906 125.054 125.056 327.868 125.056 452.988 0 0.274-0.274 0.516-0.566 0.82-0.876l0.032 0.034 279.332-279.292-64.986-64.92L546.682 864.416c-0.296 0.268-0.562 0.57-0.846 0.844-89.074 89.058-233.98 89.058-323.076 0-89.062-89.042-89.062-233.922 0-322.978 0.304-0.304 0.604-0.582 0.888-0.846l-0.046-0.06 409.28-409.166c53.71-53.738 141.142-53.738 194.884 0 53.712 53.734 53.712 141.148 0 194.84l-389.77 389.7c-17.936 17.922-47.054 17.922-64.972 0-17.894-17.886-17.894-47.032 0-64.92L697.83 327.048 697.83 327.048z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tupian2" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M928.019692 95.980308 96.019692 95.980308C42.968615 95.980308 0 138.948923 0 191.960615l0 640c0 53.011692 42.968615 96.019692 96.019692 96.019692l832 0c53.011692 0 96.019692-43.008 96.019692-96.019692L1024.039385 191.960615C1024 138.948923 980.992 95.980308 928.019692 95.980308zM944.009846 734.011077l-200.861538-267.815385c0 0-11.657846-21.661538-52.657231-21.661538-46.513231 0-60.494769 20.992-60.494769 20.992l-175.931077 271.556923c0 0-9.570462 18.195692-33.043692 18.195692-24.576 0-36.312615-18.195692-36.312615-18.195692L292.194462 631.335385c0 0-23.709538-31.389538-54.508308-31.389538-30.680615 0-56.162462 34.737231-56.162462 34.737231l-101.533538 126.503385L79.990154 209.132308c0-17.644308 14.336-32.019692 32.019692-32.019692l800.019692 0c17.683692 0 32.019692 14.375385 32.019692 32.019692L944.049231 734.011077zM463.911385 384c0 62.621538-50.727385 113.348923-113.309538 113.348923-62.582154 0-113.348923-50.766769-113.348923-113.348923 0-62.542769 50.766769-113.309538 113.348923-113.309538C413.184 270.729846 463.911385 321.457231 463.911385 384z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangchuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M392.124284 362.897124c0 0-54.16462-54.894238-127.652332-10.063193-65.750493 42.800805-54.122665 121.130801-54.122665 121.130801s-146.046261 29.915333-146.046261 186.859805c3.25616 156.690692 158.604274 158.297282 158.604274 158.297282l233.191016 0.252757L456.098317 651.616828 344.280626 651.616828l167.758772-167.747515L679.775656 651.616828 567.937498 651.616828 567.937498 819.374576l226.425939-0.252757c0 0 144.56656 0.12689 164.883281-148.94324 9.661034-163.05361-139.745764-195.189518-139.745764-195.189518s16.997116-241.36314-192.811354-268.87882C446.839443 186.756451 392.124284 362.897124 392.124284 362.897124z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tupian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M766.283 821.094h-508.566v-101.712l152.571-254.284 208.934 254.284 147.061-101.714v203.425zM766.283 490.526c0 42.117-34.22 76.286-76.285 76.286-42.117 0-76.286-34.17-76.286-76.286 0-42.115 34.17-76.285 76.286-76.285 42.066 0 76.285 34.169 76.285 76.285zM834.473 291.122c-17.679-24.086-42.262-52.246-69.283-79.216-27.015-27.018-55.178-51.651-79.216-69.281-41.023-30.048-60.89-33.523-72.26-33.523h-394.139c-35.066 0-63.573 28.507-63.573 63.571v686.567c0 35.062 28.507 63.571 63.573 63.571h584.85c35.013 0 63.573-28.507 63.573-63.571v-495.855c0-11.424-3.478-31.289-33.525-72.263zM729.183 247.863c24.436 24.435 43.558 46.388 57.659 64.665h-122.373v-122.326c18.276 14.153 40.279 33.277 64.663 57.659h0.050zM817.139 859.238c0 6.905-5.809 12.715-12.715 12.715h-584.85c-6.907 0-12.717-5.809-12.717-12.715v-686.565c0-6.854 5.809-12.715 12.717-12.715 0 0 394.038 0 394.139 0v177.999c0 14.004 11.373 25.428 25.428 25.428h177.999v495.854z"  ></path>' +
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