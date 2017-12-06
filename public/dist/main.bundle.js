/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//----------------------------------------------------/
// TheSaaS
//----------------------------------------------------/
//

+function ($, window) {

  var thesaas = {
    name: 'TheSaaS',
    version: '1.4.1'
  };

  thesaas.defaults = {
    googleApiKey: null,
    googleAnalyticsId: null,
    smoothScroll: false

    // Breakpoint values
    //
  };thesaas.breakpoint = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200
  };

  // Config application
  //
  thesaas.config = function (options) {
    //$.extend(true, thesaas.defaults, options);

    // Rteurn config value
    if (typeof options === 'string') {
      return thesaas.defaults[options];
    }

    // Save configs
    $.extend(true, thesaas.defaults, options);

    // Make necessary changes
    //
    if (!thesaas.defaults.smoothScroll) {
      SmoothScroll.destroy();
    }

    // Google map
    // 
    if ($('[data-provide~="map"]').length && window["google.maps.Map"] === undefined) {
      $.getScript("https://maps.googleapis.com/maps/api/js?key=" + thesaas.defaults.googleApiKey + "&callback=thesaas.map");
    }

    // Google Analytics
    //
    if (thesaas.defaults.googleAnalyticsId) {
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      ga('create', thesaas.defaults.googleAnalyticsId, 'auto');
      ga('send', 'pageview');
    }
  };

  // Initialize the application
  //
  thesaas.init = function () {

    thesaas.topbar();
    // thesaas.parallax();
    // thesaas.carousel();
    // thesaas.scrolling();
    thesaas.counter();
    // thesaas.aos();
    // thesaas.typed();
    // thesaas.contact();
    // thesaas.mailer();
    thesaas.constellation();
    // thesaas.shuffle();


    $(document).on('click', '[data-provide~="lightbox"]', lity);
  };

  //----------------------------------------------------/
  // Parallax
  //----------------------------------------------------/
  thesaas.parallax = function () {

    $('[data-parallax]').each(function () {
      var parallax = $(this);
      var options = {
        imageSrc: parallax.data('parallax'),
        speed: 0.3,
        bleed: 50
      };

      if ($(this).hasClass('header')) {
        options.speed = 0.6;
      }

      options = $.extend(options, thesaas.getDataOptions(parallax));

      parallax.parallax(options);
    });
  };

  //----------------------------------------------------/
  // Google map
  //----------------------------------------------------/
  thesaas.map = function () {

    $('[data-provide~="map"]').each(function () {

      var setting = {
        lat: '',
        lng: '',
        zoom: 13,
        markerLat: '',
        markerLng: '',
        markerIcon: '',
        style: ''
      };

      setting = $.extend(setting, thesaas.getDataOptions($(this)));

      var map = new google.maps.Map($(this)[0], {
        center: {
          lat: Number(setting.lat),
          lng: Number(setting.lng)
        },
        zoom: Number(setting.zoom)
      });

      var marker = new google.maps.Marker({
        position: {
          lat: Number(setting.markerLat),
          lng: Number(setting.markerLng)
        },
        map: map,
        animation: google.maps.Animation.DROP,
        icon: setting.markerIcon
      });

      var infowindow = new google.maps.InfoWindow({
        content: $(this).dataAttr('info', '')
      });

      marker.addListener('click', function () {
        infowindow.open(map, marker);
      });

      switch (setting.style) {
        case 'light':
          map.set('styles', [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]);
          break;

        case 'dark':
          map.set('styles', [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }]);
          break;

        default:
          if (Array.isArray(setting.style)) {
            map.set('styles', setting.style);
          }
      }
    });
  };

  //----------------------------------------------------/
  // Carousel
  //----------------------------------------------------/
  thesaas.carousel = function () {

    $('.swiper-container').each(function () {
      var options = {
        autoplay: 3000,
        speed: 1000,
        loop: true,
        breakpoints: {
          // when window width is <= 640px
          480: {
            slidesPerView: 1
          }
        }
      };

      var swiper = $(this);

      if (swiper.find('.swiper-button-next').length) {
        options.nextButton = '.swiper-button-next';
      }

      if (swiper.find('.swiper-button-prev').length) {
        options.prevButton = '.swiper-button-prev';
      }

      if (swiper.find('.swiper-pagination').length) {
        options.pagination = '.swiper-pagination';
        options.paginationClickable = true;
      }

      options = $.extend(options, thesaas.getDataOptions(swiper));

      new Swiper(swiper, options);
    });
  };

  //----------------------------------------------------/
  // Smooth scroll to a target element
  //----------------------------------------------------/
  thesaas.scrolling = function () {

    var topbar_height = 60;
    var html_body = $('html, body');

    // Back to top
    $(document).on('click', '.scroll-top', function () {
      html_body.animate({ scrollTop: 0 }, 600);
      $(this).blur();
      return false;
    });

    // Smoothscroll to anchor
    $(document).on('click', '[data-scrollto]', function () {
      var id = '#' + $(this).data('scrollto');
      if ($(id).length > 0) {
        var offset = 0;
        if ($('.topbar.topbar-sticky').length) {
          offset = topbar_height;
        }
        html_body.animate({ scrollTop: $(id).offset().top - offset }, 1000);
      }
      return false;
    });

    // Smoothscroll to anchor in page load
    var hash = location.hash.replace('#', '');
    if (hash != '' && $("#" + hash).length > 0) {
      html_body.animate({ scrollTop: $("#" + hash).offset().top - topbar_height }, 1000);
    }
  };

  //----------------------------------------------------/
  // jQuery CountTo and Count Down
  //----------------------------------------------------/
  thesaas.counter = function () {

    // CountTo
    var waypoints = $('[data-provide~="counter"]:not(.counted)').waypoint({
      handler: function handler(direction) {
        $(this.element).countTo().addClass('counted');
      },
      offset: '100%'
    });

    // Count Down - OLD
    /*
    $('[data-countdown]').each(function() {
      var format = '%D day%!D %H:%M:%S';
      var countdown = $(this);
      if ( countdown.hasDataAttr('format') )
        format = countdown.data('format');
       countdown.countdown( countdown.data('countdown'), function(event) {
        countdown.html(event.strftime( format ));
      } )
     });
    */

    // Count Down
    $('[data-countdown]').each(function () {
      var format = '';
      format += '<div class="row gap-items-3">';
      format += '<div class="col"><h5>%D</h5><small>Day%!D</small></div>';
      format += '<div class="col"><h5>%H</h5><small>Hour%!H</small></div>';
      format += '<div class="col"><h5>%M</h5><small>Minute%!M</small></div>';
      format += '<div class="col"><h5>%S</h5><small>Second%!S</small></div>';
      format += '</div>';

      if ($(this).hasDataAttr('format')) {
        format = $(this).data('format');
      }

      $(this).countdown($(this).data('countdown'), function (event) {
        $(this).html(event.strftime(format));
      });
    });
  };

  //----------------------------------------------------/
  // Animate on scroll
  //----------------------------------------------------/
  thesaas.aos = function () {
    AOS.init({
      offset: 220,
      duration: 1500,
      disable: 'mobile'
      //startEvent: 'load',
    });

    // Preview fix which wasn't working very well
    /*
    $(window).on('load', function() {
      AOS.refresh();
    });
    */

    //$(window).on('resize', function () { AOS.refresh(); });
    //$(window).on('load', function() { setTimeout(AOS.refreshHard, 150); });
  };

  //----------------------------------------------------/
  // Topbar functionality
  //----------------------------------------------------/
  thesaas.topbar = function () {

    var body = $('body');
    $(window).on('scroll', function () {
      if ($(document).scrollTop() > 10) {
        body.addClass('body-scrolled');
      } else {
        body.removeClass('body-scrolled');
      }
    });

    // Open menu on click
    //
    $(document).on('click', '.nav-toggle-click .nav-link', function (e) {
      var link = $(this),
          item = link.closest('.nav-item'),
          siblings = item.siblings('.nav-item');

      if ('#' == link.attr('href')) {
        e.preventDefault();
      }

      siblings.removeClass('show');
      siblings.find('.nav-item.show').removeClass('show');
      item.toggleClass('show');
    });

    // Topbar toggler
    // 
    $(document).on('click', '.topbar-toggler', function () {
      //body.toggleClass('topbar-reveal').prepend('<div class="topbar-backdrop"></div>');
      body.toggleClass('topbar-reveal');
      $(this).closest('.topbar').prepend('<div class="topbar-backdrop"></div>');
    });

    $(document).on('click', '.topbar-backdrop', function () {
      body.toggleClass('topbar-reveal');
      $(this).remove();
    });

    // Dropdown for small screens
    //
    $(document).on('click', '.topbar-reveal .topbar-nav .nav-item > .nav-link', function () {
      var item = $(this),
          submenu = item.next('.nav-submenu'),
          parent = item.closest('.nav-submenu');
      item.closest('.topbar-nav').find('.nav-submenu').not(submenu).not(parent).slideUp();
      submenu.slideToggle();
    });

    // Close nav if a scrollto link clicked
    //
    $(document).on('click', '.topbar-reveal .topbar-nav .nav-link', function () {
      if ($(this).hasDataAttr('scrollto')) {
        body.removeClass('topbar-reveal');
        $('.topbar-backdrop').remove();
      }
    });
  };

  //----------------------------------------------------/
  // Typed
  //----------------------------------------------------/
  thesaas.typed = function () {

    $('[data-type]').each(function () {
      var el = $(this);
      var strings = el.data('type').split(',');
      var options = {
        strings: strings,
        typeSpeed: 50,
        backDelay: 800,
        loop: true
      };

      options = $.extend(options, thesaas.getDataOptions(el));

      el.typed(options);
    });
  };

  //----------------------------------------------------/
  // Contact form - This is depricated
  //----------------------------------------------------/
  thesaas.contact = function () {

    $(document).on('click', '#contact-send', function () {

      var name = $("#contact-name").val();
      var email = $("#contact-email").val();
      var message = $("#contact-message").val();
      var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
      var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var _error = $('#contact-error');

      if (email.length < 1) {
        _error.html('Please enter your email address.').fadeIn(500);
        return;
      }

      if (!validEmail.test(email)) {
        _error.html('Please enter a valid email address.').fadeIn(500);
        return;
      }

      $.ajax({
        type: "POST",
        url: "assets/php/sendmail_depricated.php",
        data: dataString,
        success: function success() {
          _error.fadeOut(400);
          $('#contact-success').fadeIn(1000);
          $("#contact-name, #contact-email, #contact-message").val('');
        },
        error: function error() {
          _error.html('There is a problem in our email service. Please try again later.').fadeIn(500);
        }
      });
    });
  };

  //----------------------------------------------------/
  // Mailer function
  //----------------------------------------------------/
  thesaas.mailer = function () {

    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    $('[data-form="mailer"]').each(function () {

      var form = $(this);
      var email = form.find('[name="email"]');
      var message = form.find('[name="message"]');
      var email_form_group = email.closest('.form-group');
      var message_form_group = message.closest('.form-group');

      form.on('submit', function () {

        form.children('.alert-danger').remove();

        if (email.length) {
          if (email.val().length < 1 || !validEmail.test(email.val())) {
            email_form_group.addClass('has-danger');
            return false;
          }
        }

        if (message.length) {
          if (message.val().length < 1) {
            message_form_group.addClass('has-danger');
            return false;
          }
        }

        $.ajax({
          type: "POST",
          url: form.attr('action'),
          data: form.serializeArray()
        }).done(function (data) {
          var response = $.parseJSON(data);
          if ('success' == response.status) {
            form.find('.alert-success').fadeIn(1000);
            form.find(':input').val('');
          } else {
            form.prepend('<div class="alert alert-danger">' + response.message + '</div>');
            console.log(response.reason);
          }
        });

        return false;
      });

      email.on('focus', function () {
        email_form_group.removeClass('has-danger');
      });

      message.on('focus', function () {
        message_form_group.removeClass('has-danger');
      });
    });
  };

  //----------------------------------------------------/
  // Constellation
  //----------------------------------------------------/
  thesaas.constellation = function () {
    var color = 'rgba(255, 255, 255, .8)',
        distance = 120;

    if ($(window).width() < 700) {
      distance = 25;
    }

    $('.constellation').each(function () {

      if ('dark' == $(this).data('color')) {
        color = 'rgba(0, 0, 0, .5)';
      }

      $(this).constellation({
        distance: distance,
        star: {
          color: color,
          width: 1
        },
        line: {
          color: color,
          width: 0.2
        }
      });
    });
  };

  //----------------------------------------------------/
  // Shuffle.js
  //----------------------------------------------------/
  thesaas.shuffle = function () {
    if (undefined === window['shuffle'] || 0 === $('[data-provide="shuffle"]').length) {
      return;
    }

    var Shuffle = window.shuffle;

    Shuffle.options.itemSelector = '[data-shuffle="item"]';
    Shuffle.options.sizer = '[data-shuffle="sizer"]';
    Shuffle.options.delimeter = ',';
    Shuffle.options.speed = 500;

    $('[data-provide="shuffle"]').each(function () {

      var list = $(this).find('[data-shuffle="list"]');
      var filter = $(this).find('[data-shuffle="filter"]');
      var shuffleInstance = new Shuffle(list);

      if (filter.length) {

        $(filter).find('[data-shuffle="button"]').each(function () {
          $(this).on('click', function () {
            var btn = $(this);
            var isActive = btn.hasClass('active');
            var btnGroup = btn.data('group');

            $(this).closest('[data-shuffle="filter"]').find('[data-shuffle="button"].active').removeClass('active');

            var filterGroup;
            if (isActive) {
              btn.removeClass('active');
              filterGroup = Shuffle.ALL_ITEMS;
            } else {
              btn.addClass('active');
              filterGroup = btnGroup;
            }

            shuffleInstance.filter(filterGroup);
          });
        });
      } //End if


      $(this).imagesLoaded(function () {
        shuffleInstance.layout();
      });
    });
  };

  // Convert data-attributes options to Javascript object
  //
  thesaas.getDataOptions = function (el, castList) {
    var options = {};

    $.each($(el).data(), function (key, value) {

      key = thesaas.dataToOption(key);

      // Escape data-provide
      if (key == 'provide') {
        return;
      }

      if (castList != undefined) {
        var type = castList[key];
        switch (type) {
          case 'bool':
            value = Boolean(value);
            break;

          case 'num':
            value = Number(value);
            break;

          case 'array':
            value = value.split(',');
            break;

          default:

        }
      }

      options[key] = value;
    });

    return options;
  };

  // Convert fooBarBaz to foo-bar-baz
  //
  thesaas.optionToData = function (name) {
    return name.replace(/([A-Z])/g, "-$1").toLowerCase();
  };

  // Convert foo-bar-baz to fooBarBaz
  //
  thesaas.dataToOption = function (name) {
    return name.replace(/-([a-z])/g, function (x) {
      return x[1].toUpperCase();
    });
  };

  window.thesaas = thesaas;
}(jQuery, window);

$(function () {
  thesaas.init();
});

// Check if an element has a specific data attribute
//
jQuery.fn.hasDataAttr = function (name) {
  return $(this)[0].hasAttribute('data-' + name);
};

// Get data attribute. If element doesn't have the attribute, return default value
//
jQuery.fn.dataAttr = function (name, def) {
  return $(this)[0].getAttribute('data-' + name) || def;
};

// Instance search
//
//$.expr[':'] -> $.expr.pseudos
jQuery.expr[':'].search = function (a, i, m) {
  return $(a).html().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {

  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  thesaas.config({

    /*
    |--------------------------------------------------------------------------
    | Google API Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your Google API key if you need to use Google Maps
    | in your application
    |
    | https://developers.google.com/maps/documentation/javascript/get-api-key
    |
    */

    googleApiKey: 'AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto',

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: false

  });

  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded", function () {
  var div,
      n,
      v = document.getElementsByClassName("youtube-player");
  for (n = 0; n < v.length; n++) {
    div = document.createElement("div");
    div.setAttribute("data-id", v[n].dataset.id);
    div.innerHTML = labnolThumb(v[n].dataset.id);
    div.onclick = labnolIframe;
    v[n].appendChild(div);
  }
});

function labnolThumb(id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
      play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

function labnolIframe() {
  var iframe = document.createElement("iframe");
  var embed = "https://www.youtube.com/embed/ID?autoplay=1";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2U1ZTkwYzE2ZTAwMzg5YzA0ZmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvdGhlc2Fhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL3lvdXR1YmUuanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInRoZXNhYXMiLCJuYW1lIiwidmVyc2lvbiIsImRlZmF1bHRzIiwiZ29vZ2xlQXBpS2V5IiwiZ29vZ2xlQW5hbHl0aWNzSWQiLCJzbW9vdGhTY3JvbGwiLCJicmVha3BvaW50IiwieHMiLCJzbSIsIm1kIiwibGciLCJjb25maWciLCJvcHRpb25zIiwiZXh0ZW5kIiwiU21vb3RoU2Nyb2xsIiwiZGVzdHJveSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImdldFNjcmlwdCIsImkiLCJzIiwibyIsImciLCJyIiwiYSIsIm0iLCJxIiwicHVzaCIsImFyZ3VtZW50cyIsImwiLCJEYXRlIiwiY3JlYXRlRWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXN5bmMiLCJzcmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZG9jdW1lbnQiLCJnYSIsImluaXQiLCJ0b3BiYXIiLCJjb3VudGVyIiwiY29uc3RlbGxhdGlvbiIsIm9uIiwibGl0eSIsInBhcmFsbGF4IiwiZWFjaCIsImltYWdlU3JjIiwiZGF0YSIsInNwZWVkIiwiYmxlZWQiLCJoYXNDbGFzcyIsImdldERhdGFPcHRpb25zIiwibWFwIiwic2V0dGluZyIsImxhdCIsImxuZyIsInpvb20iLCJtYXJrZXJMYXQiLCJtYXJrZXJMbmciLCJtYXJrZXJJY29uIiwic3R5bGUiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiY2VudGVyIiwiTnVtYmVyIiwibWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iLCJhbmltYXRpb24iLCJBbmltYXRpb24iLCJEUk9QIiwiaWNvbiIsImluZm93aW5kb3ciLCJJbmZvV2luZG93IiwiY29udGVudCIsImRhdGFBdHRyIiwiYWRkTGlzdGVuZXIiLCJvcGVuIiwic2V0IiwiQXJyYXkiLCJpc0FycmF5IiwiY2Fyb3VzZWwiLCJhdXRvcGxheSIsImxvb3AiLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJzd2lwZXIiLCJmaW5kIiwibmV4dEJ1dHRvbiIsInByZXZCdXR0b24iLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbkNsaWNrYWJsZSIsIlN3aXBlciIsInNjcm9sbGluZyIsInRvcGJhcl9oZWlnaHQiLCJodG1sX2JvZHkiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiYmx1ciIsImlkIiwib2Zmc2V0IiwidG9wIiwiaGFzaCIsImxvY2F0aW9uIiwicmVwbGFjZSIsIndheXBvaW50cyIsIndheXBvaW50IiwiaGFuZGxlciIsImRpcmVjdGlvbiIsImVsZW1lbnQiLCJjb3VudFRvIiwiYWRkQ2xhc3MiLCJmb3JtYXQiLCJoYXNEYXRhQXR0ciIsImNvdW50ZG93biIsImV2ZW50IiwiaHRtbCIsInN0cmZ0aW1lIiwiYW9zIiwiQU9TIiwiZHVyYXRpb24iLCJkaXNhYmxlIiwiYm9keSIsInJlbW92ZUNsYXNzIiwiZSIsImxpbmsiLCJpdGVtIiwiY2xvc2VzdCIsInNpYmxpbmdzIiwiYXR0ciIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJwcmVwZW5kIiwicmVtb3ZlIiwic3VibWVudSIsIm5leHQiLCJwYXJlbnQiLCJub3QiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJ0eXBlZCIsImVsIiwic3RyaW5ncyIsInNwbGl0IiwidHlwZVNwZWVkIiwiYmFja0RlbGF5IiwiY29udGFjdCIsInZhbCIsImVtYWlsIiwibWVzc2FnZSIsImRhdGFTdHJpbmciLCJ2YWxpZEVtYWlsIiwiZXJyb3IiLCJmYWRlSW4iLCJ0ZXN0IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJzdWNjZXNzIiwiZmFkZU91dCIsIm1haWxlciIsImZvcm0iLCJlbWFpbF9mb3JtX2dyb3VwIiwibWVzc2FnZV9mb3JtX2dyb3VwIiwiY2hpbGRyZW4iLCJzZXJpYWxpemVBcnJheSIsImRvbmUiLCJyZXNwb25zZSIsInBhcnNlSlNPTiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJyZWFzb24iLCJjb2xvciIsImRpc3RhbmNlIiwid2lkdGgiLCJzdGFyIiwibGluZSIsInNodWZmbGUiLCJTaHVmZmxlIiwiaXRlbVNlbGVjdG9yIiwic2l6ZXIiLCJkZWxpbWV0ZXIiLCJsaXN0IiwiZmlsdGVyIiwic2h1ZmZsZUluc3RhbmNlIiwiYnRuIiwiaXNBY3RpdmUiLCJidG5Hcm91cCIsImZpbHRlckdyb3VwIiwiQUxMX0lURU1TIiwiaW1hZ2VzTG9hZGVkIiwibGF5b3V0IiwiY2FzdExpc3QiLCJrZXkiLCJ2YWx1ZSIsImRhdGFUb09wdGlvbiIsIkJvb2xlYW4iLCJvcHRpb25Ub0RhdGEiLCJ0b0xvd2VyQ2FzZSIsIngiLCJ0b1VwcGVyQ2FzZSIsImpRdWVyeSIsImZuIiwiaGFzQXR0cmlidXRlIiwiZGVmIiwiZ2V0QXR0cmlidXRlIiwiZXhwciIsInNlYXJjaCIsImluZGV4T2YiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwibiIsInYiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiZGF0YXNldCIsImlubmVySFRNTCIsImxhYm5vbFRodW1iIiwib25jbGljayIsImxhYm5vbElmcmFtZSIsImFwcGVuZENoaWxkIiwidGh1bWIiLCJwbGF5IiwiaWZyYW1lIiwiZW1iZWQiLCJyZXBsYWNlQ2hpbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFMLENBQWlCVixHQUFqQjtBQUNEO0FBQ0YsQ0FYSDs7QUFhQSxTQUFTTyxXQUFULENBQXFCdkgsRUFBckIsRUFBeUI7QUFDdkIsTUFBSTJILFFBQVEscURBQVo7QUFBQSxNQUNFQyxPQUFPLDBCQURUO0FBRUEsU0FBT0QsTUFBTXRILE9BQU4sQ0FBYyxJQUFkLEVBQW9CTCxFQUFwQixJQUEwQjRILElBQWpDO0FBQ0Q7O0FBRUQsU0FBU0gsWUFBVCxHQUF3QjtBQUN0QixNQUFJSSxTQUFTN0wsU0FBU04sYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsTUFBSW9NLFFBQVEsNkNBQVo7QUFDQUQsU0FBT1QsWUFBUCxDQUFvQixLQUFwQixFQUEyQlUsTUFBTXpILE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEtBQUtnSCxPQUFMLENBQWFySCxFQUFqQyxDQUEzQjtBQUNBNkgsU0FBT1QsWUFBUCxDQUFvQixhQUFwQixFQUFtQyxHQUFuQztBQUNBUyxTQUFPVCxZQUFQLENBQW9CLGlCQUFwQixFQUF1QyxHQUF2QztBQUNBLE9BQUt0TCxVQUFMLENBQWdCaU0sWUFBaEIsQ0FBNkJGLE1BQTdCLEVBQXFDLElBQXJDO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNlNWU5MGMxNmUwMDM4OWMwNGZkIiwiaW1wb3J0IFwiLi90aGVzYWFzLmpzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdC5qc1wiO1xuaW1wb3J0IFwiLi95b3V0dWJlLmpzXCI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL21haW4uanMiLCIndXNlIHN0cmljdCc7XG5cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuLy8gVGhlU2FhU1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuLy9cbitmdW5jdGlvbiAoJCwgd2luZG93KSB7XG5cbiAgdmFyIHRoZXNhYXMgPSB7XG4gICAgbmFtZTogJ1RoZVNhYVMnLFxuICAgIHZlcnNpb246ICcxLjQuMScsXG4gIH07XG5cbiAgdGhlc2Fhcy5kZWZhdWx0cyA9IHtcbiAgICBnb29nbGVBcGlLZXk6IG51bGwsXG4gICAgZ29vZ2xlQW5hbHl0aWNzSWQ6IG51bGwsXG4gICAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgfVxuXG4gIC8vIEJyZWFrcG9pbnQgdmFsdWVzXG4gIC8vXG4gIHRoZXNhYXMuYnJlYWtwb2ludCA9IHtcbiAgICB4czogNTc2LFxuICAgIHNtOiA3NjgsXG4gICAgbWQ6IDk5MixcbiAgICBsZzogMTIwMFxuICB9O1xuXG5cbiAgLy8gQ29uZmlnIGFwcGxpY2F0aW9uXG4gIC8vXG4gIHRoZXNhYXMuY29uZmlnID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvLyQuZXh0ZW5kKHRydWUsIHRoZXNhYXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgLy8gUnRldXJuIGNvbmZpZyB2YWx1ZVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGVzYWFzLmRlZmF1bHRzW29wdGlvbnNdO1xuICAgIH1cblxuXG4gICAgLy8gU2F2ZSBjb25maWdzXG4gICAgJC5leHRlbmQodHJ1ZSwgdGhlc2Fhcy5kZWZhdWx0cywgb3B0aW9ucyk7XG5cblxuICAgIC8vIE1ha2UgbmVjZXNzYXJ5IGNoYW5nZXNcbiAgICAvL1xuICAgIGlmICghdGhlc2Fhcy5kZWZhdWx0cy5zbW9vdGhTY3JvbGwpIHtcbiAgICAgIFNtb290aFNjcm9sbC5kZXN0cm95KCk7XG4gICAgfVxuXG5cblxuICAgIC8vIEdvb2dsZSBtYXBcbiAgICAvLyBcbiAgICBpZiAoJCgnW2RhdGEtcHJvdmlkZX49XCJtYXBcIl0nKS5sZW5ndGggJiYgd2luZG93W1wiZ29vZ2xlLm1hcHMuTWFwXCJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICQuZ2V0U2NyaXB0KFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1cIiArIHRoZXNhYXMuZGVmYXVsdHMuZ29vZ2xlQXBpS2V5ICsgXCImY2FsbGJhY2s9dGhlc2Fhcy5tYXBcIik7XG4gICAgfVxuXG5cbiAgICAvLyBHb29nbGUgQW5hbHl0aWNzXG4gICAgLy9cbiAgICBpZiAodGhlc2Fhcy5kZWZhdWx0cy5nb29nbGVBbmFseXRpY3NJZCkge1xuICAgICAgKGZ1bmN0aW9uIChpLCBzLCBvLCBnLCByLCBhLCBtKSB7XG4gICAgICAgIGlbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddID0gcjsgaVtyXSA9IGlbcl0gfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIChpW3JdLnEgPSBpW3JdLnEgfHwgW10pLnB1c2goYXJndW1lbnRzKVxuICAgICAgICB9LCBpW3JdLmwgPSAxICogbmV3IERhdGUoKTsgYSA9IHMuY3JlYXRlRWxlbWVudChvKSxcbiAgICAgICAgICBtID0gcy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTsgYS5hc3luYyA9IDE7IGEuc3JjID0gZzsgbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBtKVxuICAgICAgfSkod2luZG93LCBkb2N1bWVudCwgJ3NjcmlwdCcsICdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCAnZ2EnKTtcblxuICAgICAgZ2EoJ2NyZWF0ZScsIHRoZXNhYXMuZGVmYXVsdHMuZ29vZ2xlQW5hbHl0aWNzSWQsICdhdXRvJyk7XG4gICAgICBnYSgnc2VuZCcsICdwYWdldmlldycpO1xuICAgIH1cblxuICB9XG5cblxuXG4gIC8vIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gIC8vXG4gIHRoZXNhYXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgdGhlc2Fhcy50b3BiYXIoKTtcbiAgICAvLyB0aGVzYWFzLnBhcmFsbGF4KCk7XG4gICAgLy8gdGhlc2Fhcy5jYXJvdXNlbCgpO1xuICAgIC8vIHRoZXNhYXMuc2Nyb2xsaW5nKCk7XG4gICAgdGhlc2Fhcy5jb3VudGVyKCk7XG4gICAgLy8gdGhlc2Fhcy5hb3MoKTtcbiAgICAvLyB0aGVzYWFzLnR5cGVkKCk7XG4gICAgLy8gdGhlc2Fhcy5jb250YWN0KCk7XG4gICAgLy8gdGhlc2Fhcy5tYWlsZXIoKTtcbiAgICB0aGVzYWFzLmNvbnN0ZWxsYXRpb24oKTtcbiAgICAvLyB0aGVzYWFzLnNodWZmbGUoKTtcblxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXByb3ZpZGV+PVwibGlnaHRib3hcIl0nLCBsaXR5KTtcblxuICB9O1xuXG5cblxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cbiAgLy8gUGFyYWxsYXhcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuICB0aGVzYWFzLnBhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgJCgnW2RhdGEtcGFyYWxsYXhdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGFyYWxsYXggPSAkKHRoaXMpO1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGltYWdlU3JjOiBwYXJhbGxheC5kYXRhKCdwYXJhbGxheCcpLFxuICAgICAgICBzcGVlZDogMC4zLFxuICAgICAgICBibGVlZDogNTBcbiAgICAgIH07XG5cbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdoZWFkZXInKSkge1xuICAgICAgICBvcHRpb25zLnNwZWVkID0gMC42O1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQob3B0aW9ucywgdGhlc2Fhcy5nZXREYXRhT3B0aW9ucyhwYXJhbGxheCkpO1xuXG4gICAgICBwYXJhbGxheC5wYXJhbGxheChvcHRpb25zKTtcblxuICAgIH0pO1xuXG4gIH1cblxuXG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuICAvLyBHb29nbGUgbWFwXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cbiAgdGhlc2Fhcy5tYXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAkKCdbZGF0YS1wcm92aWRlfj1cIm1hcFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgc2V0dGluZyA9IHtcbiAgICAgICAgbGF0OiAnJyxcbiAgICAgICAgbG5nOiAnJyxcbiAgICAgICAgem9vbTogMTMsXG4gICAgICAgIG1hcmtlckxhdDogJycsXG4gICAgICAgIG1hcmtlckxuZzogJycsXG4gICAgICAgIG1hcmtlckljb246ICcnLFxuICAgICAgICBzdHlsZTogJydcbiAgICAgIH1cblxuICAgICAgc2V0dGluZyA9ICQuZXh0ZW5kKHNldHRpbmcsIHRoZXNhYXMuZ2V0RGF0YU9wdGlvbnMoJCh0aGlzKSkpO1xuXG4gICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCgkKHRoaXMpWzBdLCB7XG4gICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgIGxhdDogTnVtYmVyKHNldHRpbmcubGF0KSxcbiAgICAgICAgICBsbmc6IE51bWJlcihzZXR0aW5nLmxuZylcbiAgICAgICAgfSxcbiAgICAgICAgem9vbTogTnVtYmVyKHNldHRpbmcuem9vbSlcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgbGF0OiBOdW1iZXIoc2V0dGluZy5tYXJrZXJMYXQpLFxuICAgICAgICAgIGxuZzogTnVtYmVyKHNldHRpbmcubWFya2VyTG5nKVxuICAgICAgICB9LFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcbiAgICAgICAgaWNvbjogc2V0dGluZy5tYXJrZXJJY29uXG4gICAgICB9KTtcblxuICAgICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgIGNvbnRlbnQ6ICQodGhpcykuZGF0YUF0dHIoJ2luZm8nLCAnJylcbiAgICAgIH0pO1xuXG4gICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHN3aXRjaCAoc2V0dGluZy5zdHlsZSkge1xuICAgICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgICAgbWFwLnNldCgnc3R5bGVzJywgW3sgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLCBcInN0eWxlcnNcIjogW3sgXCJjb2xvclwiOiBcIiNlOWU5ZTlcIiB9LCB7IFwibGlnaHRuZXNzXCI6IDE3IH1dIH0sIHsgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIiwgXCJzdHlsZXJzXCI6IFt7IFwiY29sb3JcIjogXCIjZjVmNWY1XCIgfSwgeyBcImxpZ2h0bmVzc1wiOiAyMCB9XSB9LCB7IFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIiwgXCJzdHlsZXJzXCI6IFt7IFwiY29sb3JcIjogXCIjZmZmZmZmXCIgfSwgeyBcImxpZ2h0bmVzc1wiOiAxNyB9XSB9LCB7IFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLCBcInN0eWxlcnNcIjogW3sgXCJjb2xvclwiOiBcIiNmZmZmZmZcIiB9LCB7IFwibGlnaHRuZXNzXCI6IDI5IH0sIHsgXCJ3ZWlnaHRcIjogMC4yIH1dIH0sIHsgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsIFwic3R5bGVyc1wiOiBbeyBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiIH0sIHsgXCJsaWdodG5lc3NcIjogMTggfV0gfSwgeyBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIiwgXCJzdHlsZXJzXCI6IFt7IFwiY29sb3JcIjogXCIjZmZmZmZmXCIgfSwgeyBcImxpZ2h0bmVzc1wiOiAxNiB9XSB9LCB7IFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsIFwic3R5bGVyc1wiOiBbeyBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiIH0sIHsgXCJsaWdodG5lc3NcIjogMjEgfV0gfSwgeyBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsIFwic3R5bGVyc1wiOiBbeyBcImNvbG9yXCI6IFwiI2RlZGVkZVwiIH0sIHsgXCJsaWdodG5lc3NcIjogMjEgfV0gfSwgeyBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsIFwic3R5bGVyc1wiOiBbeyBcInZpc2liaWxpdHlcIjogXCJvblwiIH0sIHsgXCJjb2xvclwiOiBcIiNmZmZmZmZcIiB9LCB7IFwibGlnaHRuZXNzXCI6IDE2IH1dIH0sIHsgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIiwgXCJzdHlsZXJzXCI6IFt7IFwic2F0dXJhdGlvblwiOiAzNiB9LCB7IFwiY29sb3JcIjogXCIjMzMzMzMzXCIgfSwgeyBcImxpZ2h0bmVzc1wiOiA0MCB9XSB9LCB7IFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLCBcInN0eWxlcnNcIjogW3sgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCIgfV0gfSwgeyBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIiwgXCJzdHlsZXJzXCI6IFt7IFwiY29sb3JcIjogXCIjZjJmMmYyXCIgfSwgeyBcImxpZ2h0bmVzc1wiOiAxOSB9XSB9LCB7IFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLCBcInN0eWxlcnNcIjogW3sgXCJjb2xvclwiOiBcIiNmZWZlZmVcIiB9LCB7IFwibGlnaHRuZXNzXCI6IDIwIH1dIH0sIHsgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIiwgXCJzdHlsZXJzXCI6IFt7IFwiY29sb3JcIjogXCIjZmVmZWZlXCIgfSwgeyBcImxpZ2h0bmVzc1wiOiAxNyB9LCB7IFwid2VpZ2h0XCI6IDEuMiB9XSB9XSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgICAgbWFwLnNldCgnc3R5bGVzJywgW3sgXCJmZWF0dXJlVHlwZVwiOiBcImFsbFwiLCBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLCBcInN0eWxlcnNcIjogW3sgXCJzYXR1cmF0aW9uXCI6IDM2IH0sIHsgXCJjb2xvclwiOiBcIiMwMDAwMDBcIiB9LCB7IFwibGlnaHRuZXNzXCI6IDQwIH1dIH0sIHsgXCJmZWF0dXJlVHlwZVwiOiBcImFsbFwiLCBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsIFwic3R5bGVyc1wiOiBbeyBcInZpc2liaWxpdHlcIjogXCJvblwiIH0sIHsgXCJjb2xvclwiOiBcIiMwMDAwMDBcIiB9LCB7IFwibGlnaHRuZXNzXCI6IDE2IH1dIH0sIHsgXCJmZWF0dXJlVHlwZVwiOiBcImFsbFwiLCBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIiwgXCJzdHlsZXJzXCI6IFt7IFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiIH1dIH0sIHsgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsIFwic3R5bGVyc1wiOiBbeyBcImNvbG9yXCI6IFwiIzAwMDAwMFwiIH0sIHsgXCJsaWdodG5lc3NcIjogMjAgfV0gfSwgeyBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLCBcInN0eWxlcnNcIjogW3sgXCJjb2xvclwiOiBcIiMwMDAwMDBcIiB9LCB7IFwibGlnaHRuZXNzXCI6IDE3IH0sIHsgXCJ3ZWlnaHRcIjogMS4yIH1dIH0sIHsgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIiwgXCJzdHlsZXJzXCI6IFt7IFwiY29sb3JcIjogXCIjMDAwMDAwXCIgfSwgeyBcImxpZ2h0bmVzc1wiOiAyMCB9XSB9LCB7IFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsIFwic3R5bGVyc1wiOiBbeyBcImNvbG9yXCI6IFwiIzAwMDAwMFwiIH0sIHsgXCJsaWdodG5lc3NcIjogMjEgfV0gfSwgeyBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsIFwic3R5bGVyc1wiOiBbeyBcImNvbG9yXCI6IFwiIzAwMDAwMFwiIH0sIHsgXCJsaWdodG5lc3NcIjogMTcgfV0gfSwgeyBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIiwgXCJzdHlsZXJzXCI6IFt7IFwiY29sb3JcIjogXCIjMDAwMDAwXCIgfSwgeyBcImxpZ2h0bmVzc1wiOiAyOSB9LCB7IFwid2VpZ2h0XCI6IDAuMiB9XSB9LCB7IFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLCBcInN0eWxlcnNcIjogW3sgXCJjb2xvclwiOiBcIiMwMDAwMDBcIiB9LCB7IFwibGlnaHRuZXNzXCI6IDE4IH1dIH0sIHsgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsIFwic3R5bGVyc1wiOiBbeyBcImNvbG9yXCI6IFwiIzAwMDAwMFwiIH0sIHsgXCJsaWdodG5lc3NcIjogMTYgfV0gfSwgeyBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIiwgXCJzdHlsZXJzXCI6IFt7IFwiY29sb3JcIjogXCIjMDAwMDAwXCIgfSwgeyBcImxpZ2h0bmVzc1wiOiAxOSB9XSB9LCB7IFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIiwgXCJzdHlsZXJzXCI6IFt7IFwiY29sb3JcIjogXCIjMDAwMDAwXCIgfSwgeyBcImxpZ2h0bmVzc1wiOiAxNyB9XSB9XSlcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNldHRpbmcuc3R5bGUpKSB7XG4gICAgICAgICAgICBtYXAuc2V0KCdzdHlsZXMnLCBzZXR0aW5nLnN0eWxlKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9XG5cblxuXG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuICAvLyBDYXJvdXNlbFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG4gIHRoZXNhYXMuY2Fyb3VzZWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAkKCcuc3dpcGVyLWNvbnRhaW5lcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGF1dG9wbGF5OiAzMDAwLFxuICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA2NDBweFxuICAgICAgICAgIDQ4MDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIHN3aXBlciA9ICQodGhpcyk7XG5cbiAgICAgIGlmIChzd2lwZXIuZmluZCgnLnN3aXBlci1idXR0b24tbmV4dCcpLmxlbmd0aCkge1xuICAgICAgICBvcHRpb25zLm5leHRCdXR0b24gPSAnLnN3aXBlci1idXR0b24tbmV4dCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIuZmluZCgnLnN3aXBlci1idXR0b24tcHJldicpLmxlbmd0aCkge1xuICAgICAgICBvcHRpb25zLnByZXZCdXR0b24gPSAnLnN3aXBlci1idXR0b24tcHJldic7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIuZmluZCgnLnN3aXBlci1wYWdpbmF0aW9uJykubGVuZ3RoKSB7XG4gICAgICAgIG9wdGlvbnMucGFnaW5hdGlvbiA9ICcuc3dpcGVyLXBhZ2luYXRpb24nO1xuICAgICAgICBvcHRpb25zLnBhZ2luYXRpb25DbGlja2FibGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQob3B0aW9ucywgdGhlc2Fhcy5nZXREYXRhT3B0aW9ucyhzd2lwZXIpKTtcblxuICAgICAgbmV3IFN3aXBlcihzd2lwZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gIH1cblxuXG5cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG4gIC8vIFNtb290aCBzY3JvbGwgdG8gYSB0YXJnZXQgZWxlbWVudFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG4gIHRoZXNhYXMuc2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIHRvcGJhcl9oZWlnaHQgPSA2MDtcbiAgICB2YXIgaHRtbF9ib2R5ID0gJCgnaHRtbCwgYm9keScpO1xuXG4gICAgLy8gQmFjayB0byB0b3BcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNjcm9sbC10b3AnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBodG1sX2JvZHkuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA2MDApO1xuICAgICAgJCh0aGlzKS5ibHVyKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBTbW9vdGhzY3JvbGwgdG8gYW5jaG9yXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXNjcm9sbHRvXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpZCA9ICcjJyArICQodGhpcykuZGF0YSgnc2Nyb2xsdG8nKTtcbiAgICAgIGlmICgkKGlkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgICBpZiAoJCgnLnRvcGJhci50b3BiYXItc3RpY2t5JykubGVuZ3RoKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gdG9wYmFyX2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBodG1sX2JvZHkuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChpZCkub2Zmc2V0KCkudG9wIC0gb2Zmc2V0IH0sIDEwMDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gU21vb3Roc2Nyb2xsIHRvIGFuY2hvciBpbiBwYWdlIGxvYWRcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICBpZiAoaGFzaCAhPSAnJyAmJiAkKFwiI1wiICsgaGFzaCkubGVuZ3RoID4gMCkge1xuICAgICAgaHRtbF9ib2R5LmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoXCIjXCIgKyBoYXNoKS5vZmZzZXQoKS50b3AgLSB0b3BiYXJfaGVpZ2h0IH0sIDEwMDApO1xuICAgIH1cblxuICB9XG5cblxuXG5cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG4gIC8vIGpRdWVyeSBDb3VudFRvIGFuZCBDb3VudCBEb3duXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cbiAgdGhlc2Fhcy5jb3VudGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gQ291bnRUb1xuICAgIHZhciB3YXlwb2ludHMgPSAkKCdbZGF0YS1wcm92aWRlfj1cImNvdW50ZXJcIl06bm90KC5jb3VudGVkKScpLndheXBvaW50KHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmNvdW50VG8oKS5hZGRDbGFzcygnY291bnRlZCcpO1xuICAgICAgfSxcbiAgICAgIG9mZnNldDogJzEwMCUnXG4gICAgfSk7XG5cblxuICAgIC8vIENvdW50IERvd24gLSBPTERcbiAgICAvKlxuICAgICQoJ1tkYXRhLWNvdW50ZG93bl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZvcm1hdCA9ICclRCBkYXklIUQgJUg6JU06JVMnO1xuICAgICAgdmFyIGNvdW50ZG93biA9ICQodGhpcyk7XG4gICAgICBpZiAoIGNvdW50ZG93bi5oYXNEYXRhQXR0cignZm9ybWF0JykgKVxuICAgICAgICBmb3JtYXQgPSBjb3VudGRvd24uZGF0YSgnZm9ybWF0Jyk7XG5cbiAgICAgIGNvdW50ZG93bi5jb3VudGRvd24oIGNvdW50ZG93bi5kYXRhKCdjb3VudGRvd24nKSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY291bnRkb3duLmh0bWwoZXZlbnQuc3RyZnRpbWUoIGZvcm1hdCApKTtcbiAgICAgIH0gKVxuXG4gICAgfSk7XG4gICAgKi9cblxuICAgIC8vIENvdW50IERvd25cbiAgICAkKCdbZGF0YS1jb3VudGRvd25dJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gJyc7XG4gICAgICBmb3JtYXQgKz0gJzxkaXYgY2xhc3M9XCJyb3cgZ2FwLWl0ZW1zLTNcIj4nO1xuICAgICAgZm9ybWF0ICs9ICc8ZGl2IGNsYXNzPVwiY29sXCI+PGg1PiVEPC9oNT48c21hbGw+RGF5JSFEPC9zbWFsbD48L2Rpdj4nO1xuICAgICAgZm9ybWF0ICs9ICc8ZGl2IGNsYXNzPVwiY29sXCI+PGg1PiVIPC9oNT48c21hbGw+SG91ciUhSDwvc21hbGw+PC9kaXY+JztcbiAgICAgIGZvcm1hdCArPSAnPGRpdiBjbGFzcz1cImNvbFwiPjxoNT4lTTwvaDU+PHNtYWxsPk1pbnV0ZSUhTTwvc21hbGw+PC9kaXY+JztcbiAgICAgIGZvcm1hdCArPSAnPGRpdiBjbGFzcz1cImNvbFwiPjxoNT4lUzwvaDU+PHNtYWxsPlNlY29uZCUhUzwvc21hbGw+PC9kaXY+JztcbiAgICAgIGZvcm1hdCArPSAnPC9kaXY+JztcblxuICAgICAgaWYgKCQodGhpcykuaGFzRGF0YUF0dHIoJ2Zvcm1hdCcpKSB7XG4gICAgICAgIGZvcm1hdCA9ICQodGhpcykuZGF0YSgnZm9ybWF0Jyk7XG4gICAgICB9XG5cbiAgICAgICQodGhpcykuY291bnRkb3duKCQodGhpcykuZGF0YSgnY291bnRkb3duJyksIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAkKHRoaXMpLmh0bWwoZXZlbnQuc3RyZnRpbWUoZm9ybWF0KSk7XG4gICAgICB9KVxuXG4gICAgfSk7XG5cbiAgfVxuXG5cblxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cbiAgLy8gQW5pbWF0ZSBvbiBzY3JvbGxcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuICB0aGVzYWFzLmFvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBBT1MuaW5pdCh7XG4gICAgICBvZmZzZXQ6IDIyMCxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgZGlzYWJsZTogJ21vYmlsZScsXG4gICAgICAvL3N0YXJ0RXZlbnQ6ICdsb2FkJyxcbiAgICB9KTtcblxuICAgIC8vIFByZXZpZXcgZml4IHdoaWNoIHdhc24ndCB3b3JraW5nIHZlcnkgd2VsbFxuICAgIC8qXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICBBT1MucmVmcmVzaCgpO1xuICAgIH0pO1xuICAgICovXG5cbiAgICAvLyQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkgeyBBT1MucmVmcmVzaCgpOyB9KTtcbiAgICAvLyQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkgeyBzZXRUaW1lb3V0KEFPUy5yZWZyZXNoSGFyZCwgMTUwKTsgfSk7XG5cbiAgfVxuXG5cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG4gIC8vIFRvcGJhciBmdW5jdGlvbmFsaXR5XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cbiAgdGhlc2Fhcy50b3BiYXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgYm9keSA9ICQoJ2JvZHknKTtcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDEwKSB7XG4gICAgICAgIGJvZHkuYWRkQ2xhc3MoJ2JvZHktc2Nyb2xsZWQnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBib2R5LnJlbW92ZUNsYXNzKCdib2R5LXNjcm9sbGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIE9wZW4gbWVudSBvbiBjbGlja1xuICAgIC8vXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5uYXYtdG9nZ2xlLWNsaWNrIC5uYXYtbGluaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgbGluayA9ICQodGhpcyksXG4gICAgICAgIGl0ZW0gPSBsaW5rLmNsb3Nlc3QoJy5uYXYtaXRlbScpLFxuICAgICAgICBzaWJsaW5ncyA9IGl0ZW0uc2libGluZ3MoJy5uYXYtaXRlbScpO1xuXG4gICAgICBpZiAoJyMnID09IGxpbmsuYXR0cignaHJlZicpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgc2libGluZ3MucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgIHNpYmxpbmdzLmZpbmQoJy5uYXYtaXRlbS5zaG93JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgIGl0ZW0udG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9KTtcblxuXG4gICAgLy8gVG9wYmFyIHRvZ2dsZXJcbiAgICAvLyBcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnRvcGJhci10b2dnbGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy9ib2R5LnRvZ2dsZUNsYXNzKCd0b3BiYXItcmV2ZWFsJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cInRvcGJhci1iYWNrZHJvcFwiPjwvZGl2PicpO1xuICAgICAgYm9keS50b2dnbGVDbGFzcygndG9wYmFyLXJldmVhbCcpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcudG9wYmFyJykucHJlcGVuZCgnPGRpdiBjbGFzcz1cInRvcGJhci1iYWNrZHJvcFwiPjwvZGl2PicpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50b3BiYXItYmFja2Ryb3AnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBib2R5LnRvZ2dsZUNsYXNzKCd0b3BiYXItcmV2ZWFsJyk7XG4gICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBEcm9wZG93biBmb3Igc21hbGwgc2NyZWVuc1xuICAgIC8vXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50b3BiYXItcmV2ZWFsIC50b3BiYXItbmF2IC5uYXYtaXRlbSA+IC5uYXYtbGluaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpdGVtID0gJCh0aGlzKSxcbiAgICAgICAgc3VibWVudSA9IGl0ZW0ubmV4dCgnLm5hdi1zdWJtZW51JyksXG4gICAgICAgIHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnLm5hdi1zdWJtZW51Jyk7XG4gICAgICBpdGVtLmNsb3Nlc3QoJy50b3BiYXItbmF2JykuZmluZCgnLm5hdi1zdWJtZW51Jykubm90KHN1Ym1lbnUpLm5vdChwYXJlbnQpLnNsaWRlVXAoKTtcbiAgICAgIHN1Ym1lbnUuc2xpZGVUb2dnbGUoKTtcbiAgICB9KTtcblxuICAgIC8vIENsb3NlIG5hdiBpZiBhIHNjcm9sbHRvIGxpbmsgY2xpY2tlZFxuICAgIC8vXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50b3BiYXItcmV2ZWFsIC50b3BiYXItbmF2IC5uYXYtbGluaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCdzY3JvbGx0bycpKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2xhc3MoJ3RvcGJhci1yZXZlYWwnKTtcbiAgICAgICAgJCgnLnRvcGJhci1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuXG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuICAvLyBUeXBlZFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG4gIHRoZXNhYXMudHlwZWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAkKCdbZGF0YS10eXBlXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgIHZhciBzdHJpbmdzID0gZWwuZGF0YSgndHlwZScpLnNwbGl0KCcsJyk7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgc3RyaW5nczogc3RyaW5ncyxcbiAgICAgICAgdHlwZVNwZWVkOiA1MCxcbiAgICAgICAgYmFja0RlbGF5OiA4MDAsXG4gICAgICAgIGxvb3A6IHRydWVcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKG9wdGlvbnMsIHRoZXNhYXMuZ2V0RGF0YU9wdGlvbnMoZWwpKTtcblxuICAgICAgZWwudHlwZWQob3B0aW9ucyk7XG4gICAgfSk7XG5cbiAgfVxuXG5cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG4gIC8vIENvbnRhY3QgZm9ybSAtIFRoaXMgaXMgZGVwcmljYXRlZFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG4gIHRoZXNhYXMuY29udGFjdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjY29udGFjdC1zZW5kJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgbmFtZSA9ICQoXCIjY29udGFjdC1uYW1lXCIpLnZhbCgpO1xuICAgICAgdmFyIGVtYWlsID0gJChcIiNjb250YWN0LWVtYWlsXCIpLnZhbCgpO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAkKFwiI2NvbnRhY3QtbWVzc2FnZVwiKS52YWwoKTtcbiAgICAgIHZhciBkYXRhU3RyaW5nID0gJ25hbWU9JyArIG5hbWUgKyAnJmVtYWlsPScgKyBlbWFpbCArICcmbWVzc2FnZT0nICsgbWVzc2FnZTtcbiAgICAgIHZhciB2YWxpZEVtYWlsID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICB2YXIgZXJyb3IgPSAkKCcjY29udGFjdC1lcnJvcicpO1xuXG4gICAgICBpZiAoZW1haWwubGVuZ3RoIDwgMSkge1xuICAgICAgICBlcnJvci5odG1sKCdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzLicpLmZhZGVJbig1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsaWRFbWFpbC50ZXN0KGVtYWlsKSkge1xuICAgICAgICBlcnJvci5odG1sKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLicpLmZhZGVJbig1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwiYXNzZXRzL3BocC9zZW5kbWFpbF9kZXByaWNhdGVkLnBocFwiLFxuICAgICAgICBkYXRhOiBkYXRhU3RyaW5nLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZXJyb3IuZmFkZU91dCg0MDApO1xuICAgICAgICAgICQoJyNjb250YWN0LXN1Y2Nlc3MnKS5mYWRlSW4oMTAwMCk7XG4gICAgICAgICAgJChcIiNjb250YWN0LW5hbWUsICNjb250YWN0LWVtYWlsLCAjY29udGFjdC1tZXNzYWdlXCIpLnZhbCgnJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZXJyb3IuaHRtbCgnVGhlcmUgaXMgYSBwcm9ibGVtIGluIG91ciBlbWFpbCBzZXJ2aWNlLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpLmZhZGVJbig1MDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cblxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cbiAgLy8gTWFpbGVyIGZ1bmN0aW9uXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cbiAgdGhlc2Fhcy5tYWlsZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgdmFsaWRFbWFpbCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG4gICAgJCgnW2RhdGEtZm9ybT1cIm1haWxlclwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XG4gICAgICB2YXIgZW1haWwgPSBmb3JtLmZpbmQoJ1tuYW1lPVwiZW1haWxcIl0nKTtcbiAgICAgIHZhciBtZXNzYWdlID0gZm9ybS5maW5kKCdbbmFtZT1cIm1lc3NhZ2VcIl0nKTtcbiAgICAgIHZhciBlbWFpbF9mb3JtX2dyb3VwID0gZW1haWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKTtcbiAgICAgIHZhciBtZXNzYWdlX2Zvcm1fZ3JvdXAgPSBtZXNzYWdlLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJyk7XG5cbiAgICAgIGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBmb3JtLmNoaWxkcmVuKCcuYWxlcnQtZGFuZ2VyJykucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKGVtYWlsLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChlbWFpbC52YWwoKS5sZW5ndGggPCAxIHx8ICF2YWxpZEVtYWlsLnRlc3QoZW1haWwudmFsKCkpKSB7XG4gICAgICAgICAgICBlbWFpbF9mb3JtX2dyb3VwLmFkZENsYXNzKCdoYXMtZGFuZ2VyJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAobWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAobWVzc2FnZS52YWwoKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICBtZXNzYWdlX2Zvcm1fZ3JvdXAuYWRkQ2xhc3MoJ2hhcy1kYW5nZXInKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgIHVybDogZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZUFycmF5KCksXG4gICAgICAgIH0pXG4gICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICQucGFyc2VKU09OKGRhdGEpO1xuICAgICAgICAgICAgaWYgKCdzdWNjZXNzJyA9PSByZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgZm9ybS5maW5kKCcuYWxlcnQtc3VjY2VzcycpLmZhZGVJbigxMDAwKTtcbiAgICAgICAgICAgICAgZm9ybS5maW5kKCc6aW5wdXQnKS52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGZvcm0ucHJlcGVuZCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPicgKyByZXNwb25zZS5tZXNzYWdlICsgJzwvZGl2PicpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZWFzb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIGVtYWlsLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZW1haWxfZm9ybV9ncm91cC5yZW1vdmVDbGFzcygnaGFzLWRhbmdlcicpO1xuICAgICAgfSk7XG5cbiAgICAgIG1lc3NhZ2Uub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXNzYWdlX2Zvcm1fZ3JvdXAucmVtb3ZlQ2xhc3MoJ2hhcy1kYW5nZXInKTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgfVxuXG5cblxuXG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuICAvLyBDb25zdGVsbGF0aW9uXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cbiAgdGhlc2Fhcy5jb25zdGVsbGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC44KScsXG4gICAgICBkaXN0YW5jZSA9IDEyMDtcblxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDcwMCkge1xuICAgICAgZGlzdGFuY2UgPSAyNTtcbiAgICB9XG5cbiAgICAkKCcuY29uc3RlbGxhdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAoJ2RhcmsnID09ICQodGhpcykuZGF0YSgnY29sb3InKSkge1xuICAgICAgICBjb2xvciA9ICdyZ2JhKDAsIDAsIDAsIC41KSc7XG4gICAgICB9XG5cbiAgICAgICQodGhpcykuY29uc3RlbGxhdGlvbih7XG4gICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZSxcbiAgICAgICAgc3Rhcjoge1xuICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICB3aWR0aDogMVxuICAgICAgICB9LFxuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgIHdpZHRoOiAwLjJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG5cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG4gIC8vIFNodWZmbGUuanNcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuICB0aGVzYWFzLnNodWZmbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gd2luZG93WydzaHVmZmxlJ10gfHwgMCA9PT0gJCgnW2RhdGEtcHJvdmlkZT1cInNodWZmbGVcIl0nKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgU2h1ZmZsZSA9IHdpbmRvdy5zaHVmZmxlO1xuXG4gICAgU2h1ZmZsZS5vcHRpb25zLml0ZW1TZWxlY3RvciA9ICdbZGF0YS1zaHVmZmxlPVwiaXRlbVwiXSc7XG4gICAgU2h1ZmZsZS5vcHRpb25zLnNpemVyID0gJ1tkYXRhLXNodWZmbGU9XCJzaXplclwiXSc7XG4gICAgU2h1ZmZsZS5vcHRpb25zLmRlbGltZXRlciA9ICcsJztcbiAgICBTaHVmZmxlLm9wdGlvbnMuc3BlZWQgPSA1MDA7XG5cblxuICAgICQoJ1tkYXRhLXByb3ZpZGU9XCJzaHVmZmxlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciBsaXN0ID0gJCh0aGlzKS5maW5kKCdbZGF0YS1zaHVmZmxlPVwibGlzdFwiXScpO1xuICAgICAgdmFyIGZpbHRlciA9ICQodGhpcykuZmluZCgnW2RhdGEtc2h1ZmZsZT1cImZpbHRlclwiXScpO1xuICAgICAgdmFyIHNodWZmbGVJbnN0YW5jZSA9IG5ldyBTaHVmZmxlKGxpc3QpO1xuXG4gICAgICBpZiAoZmlsdGVyLmxlbmd0aCkge1xuXG4gICAgICAgICQoZmlsdGVyKS5maW5kKCdbZGF0YS1zaHVmZmxlPVwiYnV0dG9uXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYnRuID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IGJ0bi5oYXNDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB2YXIgYnRuR3JvdXAgPSBidG4uZGF0YSgnZ3JvdXAnKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdbZGF0YS1zaHVmZmxlPVwiZmlsdGVyXCJdJykuZmluZCgnW2RhdGEtc2h1ZmZsZT1cImJ1dHRvblwiXS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHZhciBmaWx0ZXJHcm91cDtcbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICBidG4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICBmaWx0ZXJHcm91cCA9IFNodWZmbGUuQUxMX0lURU1TO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgZmlsdGVyR3JvdXAgPSBidG5Hcm91cDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2h1ZmZsZUluc3RhbmNlLmZpbHRlcihmaWx0ZXJHcm91cCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9IC8vRW5kIGlmXG5cblxuICAgICAgJCh0aGlzKS5pbWFnZXNMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzaHVmZmxlSW5zdGFuY2UubGF5b3V0KClcbiAgICAgIH0pO1xuXG5cbiAgICB9KTtcblxuXG4gIH1cblxuXG5cblxuICAvLyBDb252ZXJ0IGRhdGEtYXR0cmlidXRlcyBvcHRpb25zIHRvIEphdmFzY3JpcHQgb2JqZWN0XG4gIC8vXG4gIHRoZXNhYXMuZ2V0RGF0YU9wdGlvbnMgPSBmdW5jdGlvbiAoZWwsIGNhc3RMaXN0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcblxuICAgICQuZWFjaCgkKGVsKS5kYXRhKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICAgIGtleSA9IHRoZXNhYXMuZGF0YVRvT3B0aW9uKGtleSk7XG5cbiAgICAgIC8vIEVzY2FwZSBkYXRhLXByb3ZpZGVcbiAgICAgIGlmIChrZXkgPT0gJ3Byb3ZpZGUnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhc3RMaXN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgdHlwZSA9IGNhc3RMaXN0W2tleV07XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnbnVtJzpcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3B0aW9uc1trZXldID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG5cbiAgLy8gQ29udmVydCBmb29CYXJCYXogdG8gZm9vLWJhci1iYXpcbiAgLy9cbiAgdGhlc2Fhcy5vcHRpb25Ub0RhdGEgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCItJDFcIikudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG5cbiAgLy8gQ29udmVydCBmb28tYmFyLWJheiB0byBmb29CYXJCYXpcbiAgLy9cbiAgdGhlc2Fhcy5kYXRhVG9PcHRpb24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uICh4KSB7IHJldHVybiB4WzFdLnRvVXBwZXJDYXNlKCk7IH0pO1xuICB9XG5cblxuXG4gIHdpbmRvdy50aGVzYWFzID0gdGhlc2Fhcztcbn0oalF1ZXJ5LCB3aW5kb3cpO1xuXG5cblxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgdGhlc2Fhcy5pbml0KCk7XG59KTtcblxuXG5cbi8vIENoZWNrIGlmIGFuIGVsZW1lbnQgaGFzIGEgc3BlY2lmaWMgZGF0YSBhdHRyaWJ1dGVcbi8vXG5qUXVlcnkuZm4uaGFzRGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJCh0aGlzKVswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpO1xufTtcblxuXG5cbi8vIEdldCBkYXRhIGF0dHJpYnV0ZS4gSWYgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlIGF0dHJpYnV0ZSwgcmV0dXJuIGRlZmF1bHQgdmFsdWVcbi8vXG5qUXVlcnkuZm4uZGF0YUF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVmKSB7XG4gIHJldHVybiAkKHRoaXMpWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkgfHwgZGVmO1xufTtcblxuXG5cbi8vIEluc3RhbmNlIHNlYXJjaFxuLy9cbi8vJC5leHByWyc6J10gLT4gJC5leHByLnBzZXVkb3NcbmpRdWVyeS5leHByWyc6J10uc2VhcmNoID0gZnVuY3Rpb24gKGEsIGksIG0pIHtcbiAgcmV0dXJuICQoYSkuaHRtbCgpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihtWzNdLnRvVXBwZXJDYXNlKCkpID49IDA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy90aGVzYWFzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4kKGZ1bmN0aW9uICgpIHtcblxuXG4gIC8qXG4gIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB8IENvbmZpZ3VyZSB5b3VyIHdlYnNpdGVcbiAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHxcbiAgfCBXZSBwcm92aWRlZCBzZXZlcmFsIGNvbmZpZ3VyYXRpb24gdmFyaWFibGVzIGZvciB5b3VyIGVhc2Ugb2YgZGV2ZWxvcG1lbnQuXG4gIHwgUmVhZCB0aGVpciBjb21wbGV0ZSBkZXNjcmlwdGlvbiBhbmQgbW9kaWZ5IHRoZW0gYmFzZWQgb24geW91ciBuZWVkLlxuICB8XG4gICovXG5cbiAgdGhlc2Fhcy5jb25maWcoe1xuXG4gICAgLypcbiAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB8IEdvb2dsZSBBUEkgS2V5XG4gICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgfFxuICAgIHwgSGVyZSB5b3UgbWF5IHNwZWNpZnkgeW91ciBHb29nbGUgQVBJIGtleSBpZiB5b3UgbmVlZCB0byB1c2UgR29vZ2xlIE1hcHNcbiAgICB8IGluIHlvdXIgYXBwbGljYXRpb25cbiAgICB8XG4gICAgfCBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZXQtYXBpLWtleVxuICAgIHxcbiAgICAqL1xuXG4gICAgZ29vZ2xlQXBpS2V5OiAnQUl6YVN5RFJCTEZPVFRoMk5GTTkzSHBVQTRackE5OXlLbkNBc3RvJyxcblxuICAgIC8qXG4gICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgfCBHb29nbGUgQW5hbHl0aWNzIFRyYWNraW5nXG4gICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgfFxuICAgIHwgSWYgeW91IHdhbnQgdG8gdXNlIEdvb2dsZSBBbmFseXRpY3MsIHlvdSBjYW4gc3BlY2lmeSB5b3VyIFRyYWNraW5nIElEIGluXG4gICAgfCB0aGlzIG9wdGlvbi4gWW91ciBrZXkgd291bGQgYmUgYSB2YWx1ZSBsaWtlOiBVQS0xMjM0NTY3OC05XG4gICAgfFxuICAgICovXG5cbiAgICBnb29nbGVBbmFseXRpY3NJZDogJycsXG5cbiAgICAvKlxuICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHwgU21vb3RoIFNjcm9sbFxuICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHxcbiAgICB8IElmIHRydWUsIHRoZSBicm93c2VyJ3Mgc2Nyb2xsYmFyIG1vdmVzIHNtb290aGx5IG9uIHNjcm9sbCBhbmQgZ2l2ZXMgeW91clxuICAgIHwgdmlzaXRvciBhIGJldHRlciBleHBlcmllbmNlIGZvciBzY3JvbGxpbmcuXG4gICAgfFxuICAgICovXG5cbiAgICBzbW9vdGhTY3JvbGw6IGZhbHNlXG5cbiAgfSk7XG5cblxuXG5cblxuICAvKlxuICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgfCBDdXN0b20gSmF2YXNjcmlwdCBjb2RlXG4gIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB8XG4gIHwgTm93IHRoYXQgeW91IGNvbmZpZ3VyZWQgeW91ciB3ZWJzaXRlLCB5b3UgY2FuIHdyaXRlIGFkZGl0aW9uYWwgSmF2YXNjcmlwdFxuICB8IGNvZGUgYmVsb3cgdGhpcyBjb21tZW50LiBZb3UgbWlnaHQgd2FudCB0byBhZGQgbW9yZSBwbHVnaW5zIGFuZCBpbml0aWFsaXplXG4gIHwgdGhlbSBpbiB0aGlzIGZpbGUuXG4gIHxcbiAgKi9cblxuXG5cblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL3NjcmlwdC5qcyIsIi8qIExpZ2h0IFlvdVR1YmUgRW1iZWRzIGJ5IEBsYWJub2wgKi9cbi8qIFdlYjogaHR0cDovL2xhYm5vbC5vcmcvP3A9Mjc5NDEgKi9cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXYsIG4sXG4gICAgICB2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInlvdXR1YmUtcGxheWVyXCIpO1xuICAgIGZvciAobiA9IDA7IG4gPCB2Lmxlbmd0aDsgbisrKSB7XG4gICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdltuXS5kYXRhc2V0LmlkKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBsYWJub2xUaHVtYih2W25dLmRhdGFzZXQuaWQpO1xuICAgICAgZGl2Lm9uY2xpY2sgPSBsYWJub2xJZnJhbWU7XG4gICAgICB2W25dLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9KTtcblxuZnVuY3Rpb24gbGFibm9sVGh1bWIoaWQpIHtcbiAgdmFyIHRodW1iID0gJzxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9JRC9ocWRlZmF1bHQuanBnXCI+JyxcbiAgICBwbGF5ID0gJzxkaXYgY2xhc3M9XCJwbGF5XCI+PC9kaXY+JztcbiAgcmV0dXJuIHRodW1iLnJlcGxhY2UoXCJJRFwiLCBpZCkgKyBwbGF5O1xufVxuXG5mdW5jdGlvbiBsYWJub2xJZnJhbWUoKSB7XG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICB2YXIgZW1iZWQgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0lEP2F1dG9wbGF5PTFcIjtcbiAgaWZyYW1lLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlbWJlZC5yZXBsYWNlKFwiSURcIiwgdGhpcy5kYXRhc2V0LmlkKSk7XG4gIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJmcmFtZWJvcmRlclwiLCBcIjBcIik7XG4gIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwgXCIxXCIpO1xuICB0aGlzLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlmcmFtZSwgdGhpcyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL3lvdXR1YmUuanMiXSwic291cmNlUm9vdCI6IiJ9