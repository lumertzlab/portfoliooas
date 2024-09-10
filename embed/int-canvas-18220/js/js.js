
$(document).ready(function(){



});
$(window).on('resize', function(e) {changeSize();});
$(window).bind('orientationchange', function(event) {changeSize();});

function changeSize(numSlides){
          altura=0; 
          largura=0;
          
           //--calcula o tamanho da área--//
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;

          largura = Math.ceil ((98*windowWidth)/100);
               if(largura>1279){
                    largura=1279;
               }
          //--FIM calcula o tamanho da área--//
          var percent=Math.ceil ((largura*100)/windowWidth);
          altura=Math.ceil ((9*largura)/16);
            
            
          $('.ctn-content').width(largura).height(altura);        
          $('.ctn-layer1, .ctn-layer1 li').width(largura).height(altura);


          resizeImages(0,function(){
                $('.ctn-layer1').cycle({ 
                      fx: 'scrollHorz', 
                      timeout: 0,
                      speed: 0,
                      startingSlide: 0,
                      after: getCurrentSlide
                      
                });
          });

          

          return;
}

function toslide(num){
  num=num-1;
  $('.ctn-layer1').cycle(num); 
   playAudio(num);
  return;
}

function resizeImages(posicao,callback){
      //--recalcula a largura--//
           $( "img" ).each(function() {

                    var heightElement=$( this ).get(0).naturalHeight;
                    var widthElement=$( this ).get(0).naturalWidth;

                    var larguractn=$('.ctn-content').width();
                    var retornopercentual=(larguractn*100)/1280;

                    widthElement=Math.floor((retornopercentual*widthElement)/100);
                    heightElement=Math.floor((retornopercentual*heightElement)/100);

                    $(this).css("height",heightElement+"px");
                    $(this).css("width",widthElement+"px");
                    
              
          });
      //--FIM recalcula a largura--//
    
    $('iframe.iframepdf').width(largura).height(altura);

    //--video--//
     $('iframe.iframevideo').width(largura).height(altura);
     $('iframe.iframevideo').each(function() {
        if($(this).hasClass("half")){
          var larguravideo=($('.ctn-content').width()/2.3)-40;
          var alturavideo=(9*larguravideo)/16;

          $(this).width(larguravideo);
          $(this).height(alturavideo);

          //--posiciona o centro--//
          var posicaotop = ($('.ctn-content').height()-alturavideo)/2;
          $(this).css("top",posicaotop+"px");

        }

     });
     $('iframe.iframevideo').show();
     //--FIM video--//

    callback();
    return;
}

  function getCurrentSlide(curr, next, opts) {
        var index = opts.currSlide;
        var Element = $('.ctn-layer1').children("li").get(index); 
        var ElementId = $(Element).find('img').attr('id');
        var widthref=$('.ctn-layer1').width();
        if(widthref>1279){
          widthref=1279;
        }
        console.log(widthref);
        mapitens(ElementId,widthref);
  }


//--autoplay no áudio--//
function playAudio(num){
 $(document).find( "audio" ).each(function() {
    $(this)[0].pause();
 });

 var Element = $('.ctn-layer1').children("li").get(num); 
 $(Element).find( "audio" ).each(function() {
   var infoAutoPlay=$(this).attr("data-play");
   var playerID=$(this).attr("id");

   if($("#"+playerID).is(':visible')){
       if(infoAutoPlay=="auto"){
          console.log(playerID);
          $("#"+playerID)[0].play();
       }
   }else{
      $("#"+playerID)[0].pause();
   }
 });
}
playAudio(0);
//--FIM autoplay no áudio--//