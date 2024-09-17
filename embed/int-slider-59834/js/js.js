$(document).ready(function () {
  $(".ctn-layer1").cycle({
    fx: "scrollHorz",
    timeout: 0,
    speed: 900,
    nowrap: 1,
    after: onAfter,
    next: ".btn-next",
    prev: ".btn-prev",
  });

  function onAfter(curr, next, opts) {
    var index = opts.currSlide;
    $(".btn-prev")[index == 0 ? "hide" : "show"]();
    $(".btn-next")[index == opts.slideCount - 1 ? "hide" : "show"]();
  }

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

  console.log(largura);
  if (largura <= 720) {
    $(".ctn-content").width(largura);
  } else {
    $(".ctn-content").width(largura).height(altura);
  }

  $(".ctn-layer1, .ctn-nav, .ctn-layer1 li").width(largura).height(altura);
  return;
}
