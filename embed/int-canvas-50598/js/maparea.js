$(document).ready(function(){
  $("maplista").hide();




});

function mapitens(id,widthref){
  $(document).find("canvas.maparea").remove();
  //--busca os mapas--//
      var itemID=id;
      console.log(itemID);
      var baseWidth=widthref;
      console.log(baseWidth);
      //--busca os itens para configurar o mapa--//
      $("#"+itemID).parent().find("maparea").each( function(index, value) {
          var datashape=$(this).attr("data-shape");
          var datacoords=$(this).attr("data-coords");
          var dataaction=$(this).attr("onclick");
          var datafillstyle=$(this).attr("data-fillstyle");
          var datastatic=$(this).attr("data-static");
          //--defaults--//
          if(!datafillstyle){
             datafillstyle="rgba(255, 255, 255, .8)";
          }

              if(datashape=="circle"){
                  //--retornar as coordenadas--//            
                  var resCoords = datacoords.split(",");
                      var xCoord=resCoords[0];
                      var yCoord=resCoords[1];
                      var raioCoord=resCoords[2];


                  //--calcula o percentual--//
                    var perct=(baseWidth*100)/1280;
                    var desvio=((baseWidth*9)/1280);
                  //--FIM calcula o percentual--//


                  var xNew=((perct*xCoord)/100)-desvio;
                  var yNew=((perct*yCoord)/100)-desvio;
                  var rNew=((perct*raioCoord)/100);


                  //--cria o canvas--//
                  var canvasWidth=rNew*2;
                  var canvasHeight=rNew*2;
                  var canvasLeft=xNew-rNew;
                  var canvasTop=yNew-rNew;

                  var idCanvas="canvas_"+itemID+"_"+Math.floor(Math.random() * 65536);
                  var htmlcanvas='<canvas id="'+idCanvas+'" class="maparea" width="'+canvasWidth+'" height="'+canvasHeight+'" data-static="'+datastatic+'" style="position:absolute; left:'+canvasLeft+'px; top:'+canvasTop+'px; z-index:999;"></canvas>';
                  $(document).find("#"+itemID).parent().append(htmlcanvas);
                  //--FIM cria o canvas--//  

                  //--css hover--//
                  if(datastatic=="true"){
                      $("#"+idCanvas).css("opacity", "0");
                      $("#"+idCanvas).mouseover(function(){
                          $(this).css("cursor", "pointer");
                          $(this).css("opacity", "1");
                      });  
                      $("#"+idCanvas).mouseout(function(){
                          $(this).css("opacity", "0");
                      }); 
                  }else{
                    $("#"+idCanvas).mouseover(function(){
                          $(this).css("cursor", "pointer");
                          $(this).css("opacity", ".8");
                      }); 

                  } 
                   //--FIM css hover--//

                  var c = document.getElementById(idCanvas);
                  var ctx = c.getContext("2d");
                      ctx.beginPath();
                      ctx.arc(rNew,rNew,rNew,0,2*Math.PI, false);
                      ctx.fillStyle = datafillstyle;
                      ctx.webkitImageSmoothingEnabled=true;
                      ctx.fill();


                  $(c).click(function() {eval(dataaction);});
              }

              if(datashape=="rect"){

                  //--retornar as coordenadas--//            
                  var resCoords = datacoords.split(",");
                      var xCoord=resCoords[0];
                      var yCoord=resCoords[1];
                      var wCoord=resCoords[2];
                      var hCoord=resCoords[3];
                  //--calcula o percentual--//
                    var perct=(baseWidth*100)/1280;
                    var desvio=((baseWidth*9)/1280);
                  //--FIM calcula o percentual--//


                  var xNew=(perct*xCoord)/100-desvio;
                  var yNew=(perct*yCoord)/100-desvio;
                  var wNew=(perct*wCoord)/100;
                  var hNew=(perct*hCoord)/100;                 

                  //--cria o canvas--//
                  var canvasWidth=wNew;
                  var canvasHeight=hNew;
                  var canvasLeft=xNew;
                  var canvasTop=yNew;

                  var idCanvas="canvas_"+itemID+"_"+Math.floor(Math.random() * 65536);
                  var htmlcanvas='<canvas id="'+idCanvas+'" class="maparea" width="'+canvasWidth+'" height="'+canvasHeight+'" data-static="'+datastatic+'" style="position:absolute; left:'+canvasLeft+'px; top:'+canvasTop+'px; z-index:999;"></canvas>';
                  $(document).find("#"+itemID).parent().append(htmlcanvas);
                  //--FIM cria o canvas--//  

                  //--css hover--//
                  if(datastatic=="true"){
                      $("#"+idCanvas).css("opacity", "0");
                      $("#"+idCanvas).mouseover(function(){
                          $(this).css("cursor", "pointer");
                          $(this).css("opacity", "1");
                      });  
                      $("#"+idCanvas).mouseout(function(){
                          $(this).css("opacity", "0");
                      }); 
                  }else{
                    $("#"+idCanvas).mouseover(function(){
                          $(this).css("cursor", "pointer");
                          $(this).css("opacity", ".8");
                      }); 

                  } 
                   //--FIM css hover--//

                  var c = document.getElementById(idCanvas);
                  var ctx = c.getContext("2d");
                      ctx.beginPath();
                      ctx.fillStyle = datafillstyle;
                      ctx.fillRect(0,0,canvasWidth,canvasHeight);
                      ctx.fill();

                  $(c).click(function() {eval(dataaction);});
              }
              if(datashape=="poly"){
                  //--retornar as coordenadas--//            
                  var resCoords = datacoords.split(",");
                       var xCoord=resCoords[0];
                      var yCoord=resCoords[1];
                      var wCoord=resCoords[2];
                      var hCoord=resCoords[3];
                  //--calcula o percentual--//
                    var perct=(baseWidth*100)/1280;
                    var desvio=((baseWidth*9)/1280);
                  //--FIM calcula o percentual--//
                  xNew=(perct*xCoord)/100-desvio;
                  yNew=(perct*yCoord)/100-desvio;
                  var wNew=Math.round((perct*wCoord)/100);
                  var hNew=Math.round((perct*hCoord)/100);

                  //--cria o canvas--//
                  var canvasWidth=wNew;
                  var canvasHeight=hNew;
                  var canvasLeft=xNew;
                  var canvasTop=yNew;

                  var idCanvas="canvas_"+itemID+"_"+Math.floor(Math.random() * 65536);
                  var htmlcanvas='<canvas id="'+idCanvas+'" class="maparea" width="'+canvasWidth+'" height="'+canvasHeight+'" data-static="'+datastatic+'" style="position:absolute; left:'+canvasLeft+'px; top:'+canvasTop+'px; z-index:999;"></canvas>';
                  $(document).find("#"+itemID).parent().append(htmlcanvas);
                  //--FIM cria o canvas--//  

                  //--css hover--//
                  if(datastatic=="true"){
                      $("#"+idCanvas).css("opacity", "0");
                      $("#"+idCanvas).mouseover(function(){
                          $(this).css("cursor", "pointer");
                          $(this).css("opacity", "1");
                      });  
                      $("#"+idCanvas).mouseout(function(){
                          $(this).css("opacity", "0");
                      }); 
                  }else{
                    $("#"+idCanvas).mouseover(function(){
                          $(this).css("cursor", "pointer");
                          $(this).css("opacity", ".8");
                      }); 

                  } 
                   //--FIM css hover--//

                   //--calcula os vértices--//
                   var listavertices=$(this).attr("data-vertices").split(",");
                   var points = new Array();

                   var controle=0;
                   for (i = 0; i < listavertices.length; i++) { 
                      var pointXNew=Math.round(((perct*listavertices[controle])/100)-xNew);
                      console.log("X: "+pointXNew+" | "+xNew);

                      var pointYNew=Math.round(((perct*listavertices[controle+1])/100)-yNew);
                      console.log("Y: "+pointYNew+" | "+yNew);

                      points.push(pointXNew);
                      points.push(pointYNew);
                      controle=i+2;
                      i=i+1;
                   }
                  //--FIM calcula os vértices--//



                  var c = document.getElementById(idCanvas);
                  var ctx = c.getContext("2d");
                      ctx.beginPath();
                      ctx.fillStyle = datafillstyle;
                     
                      //--faz o desenho--//
                      var controle=0;
                       ctx.moveTo(points[controle],points[controle+1]);
                      for (i = 0; i < points.length; i++) { 
                        ctx.lineTo(points[controle],points[controle+1]);
                        controle=i+2;
                        i=i+1;

                      }
                      //--FIM faz o desenho--//
                      
                      ctx.fill();

                  $(c).click(function() {eval(dataaction);});

              }

      });
      //--FIM busca os itens para configurar o mapa--//
  //--FIM busca os mapas--//
      $(document).find("canvas").each( function(index, value) {
            var datastatic = $(this).attr("data-static");
            var canvasid =  $(this).attr("id");
                  if(datastatic=="false"){
                     $(this).addClass("canvas-animation");
                  }
      });

  return;
}