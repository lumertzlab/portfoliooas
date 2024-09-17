leftElement=0;
passo=10;
leftPosition=0;
widthRef=0;
nSlides=0;
isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);

$(document).ready(function(){

      nSlides=$("ul.ctn-layer1").find("li").length;
      console.log(nSlides);

      changeSize(nSlides,function(){
              $("ul.ctn-layer1").find("li").each( function(index, value) {
                  $(this).css("left",leftElement);
                  leftElement=leftElement+$(this).width();
                  widthRef=$(this).width();
              });
      });


      $(window).on('resize', function(e) {location.reload();});
      $(window).bind('orientationchange', function(event) {location.reload();});

      $(document).on('click touchstart','.ctn-instrucoes', function( event ) {
          $(this).remove();
      });

    $("section.ctn-content").on( 'scroll', function(){
          $('div.ctn-instrucoes').remove();
    });

});



function changeSize(numSlides,callback){
          altura=0; 
          largura=0;
          
           //--calcula o tamanho da área--//
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;

          largura = Math.ceil ((98*windowWidth)/100);
               if(largura>1254){
                    largura=1254;
               }
          //--FIM calcula o tamanho da área--//
          var percent=Math.ceil ((largura*100)/windowWidth);
          altura=Math.ceil ((9*largura)/16);

          //--insere o slide de instruções--//
          if(isMobile){
              $('div.ctn-instrucoes').css("background-image", "url(css/instrucoes_mobile.png)"); 
          }
          $(document).find("div.ctn-instrucoes").width(largura).height(altura);
          //--FIM insere o slide de instruções--//

            $('.ctn-content').width(largura).height(altura);
    

          
          $('.ctn-layer1, .ctn-nav, .ctn-layer1 li').width(largura).height(altura);

          callback();
          return;
}


