$(document).ready(function () {
  $(".btn-prev").hide();

  $(".cycle-slideshow").on("cycle-after", function (event, opts) {
    var index = opts.currSlide;
    var totalslides = opts.slideCount;
    var slideatual = opts.slideNum;

    if (largura > 1) {
      if (slideatual > 1) {
        $(".btn-prev").show();
      }
      if (slideatual == 1) {
        $(".btn-prev").hide();
      }
      if (slideatual < totalslides) {
        $(".btn-next").show();
      }
      if (slideatual == totalslides) {
        $(".btn-next").hide();
      }
    }
  });

  $(window).on("resize", function (e) {
    location.reload();
  });
  $(window).bind("orientationchange", function (event) {
    location.reload();
  });
});

function changeSize(numSlides) {
  altura = 0;
  largura = 0;

  //--calcula o tamanho da área--//
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  largura = Math.ceil((98 * windowWidth) / 100);
  if (largura > 1254) {
    largura = 1254;
  }
  //--FIM calcula o tamanho da área--//

  var percent = Math.ceil((largura * 100) / windowWidth);

  altura = Math.ceil((9 * largura) / 16);

  if (largura <= 720) {
    $(".ctn-content").width(largura);
  } else {
    $(".ctn-content").width(largura).height(altura);
  }

  $(".ctn-layer1, .ctn-nav").width(largura).height(altura);
  return;
}

(function ($) {
  "use strict";

  $.fn.cycle.transitions.scrollVert = {
    before: function (opts, curr, next, fwd) {
      opts.API.stackSlides(opts, curr, next, fwd);
      var height = opts.container.css("overflow", "hidden").height();

      opts.animIn = { top: 0 };
      if (fwd == true) {
        opts.cssBefore = {
          top: false ? +height : height,
          left: 0,
          opacity: 1,
          display: "block",
          visibility: "visible",
        };
        opts.animOut = { top: false ? height : -height };
      } else {
        opts.cssBefore = {
          top: true ? -height : height,
          left: 0,
          opacity: 1,
          display: "block",
          visibility: "visible",
        };
        opts.animOut = { top: true ? height : +height };
      }
    },
  };
})(jQuery);
