//   Incredible OM animation with Greensock  ---------------------------------

$(document).ready(function() {
//  Setup variables
var baseScr =  $(".base-scr"),
    page =      $(".page"),
    black =     $(".black"),
    cursor=     $(".cursor"),
    popup =     $(".popup"),
      popupBase =   $("#popup-base"),
      button =      $("#btn-base"),
      emailAdd =    $("#somaemail"),
      name =        $("#soma"),
    $btnPlay = $("#btnPlay"),
    $btnSlowMo = $("#btnSlowMo"),
    $btnReverse = $("#btnReverse");

//  Creating the Timeline
var tl = new TimelineMax();

//  Stage Clear
tl.set(popup, {autoAlpha: 0});
tl.set(black, {autoAlpha: 0});
tl.set(emailAdd, {autoAlpha: 0});
tl.set(name, {autoAlpha: 0});

//  Animating cursor
tl.to(cursor, 1, {x: -200, y: -20, ease:Power4.easeOut});
tl.to(cursor,1,{x: -30, y: -50, ease:Power4.easeOut});
tl.to(cursor,1,{x: -285, y: -152, ease:Power4.easeOut});

//  Pop Up!
tl.to(black,0.01,{autoAlpha: 1});
tl.add("popUp");
tl.to(popup,0.01,{autoAlpha: 1}, "popUp");
tl.to(cursor,1.5,{x: 0, y: 0}, "+=1");


//   Buttons
  $btnPlay.click(
    function(){
      tl.timeScale(1).seek(0);
    }
  );

  $btnSlowMo.click(
    function(){
      tl.timeScale(0.2).seek(0.5);
    }
  );

  $btnReverse.click(
    function(){
      tl.timeScale(1).seek("end").reverse();
    }
  );


});
