//   Incredible OM animation with Greensock  ---------------------------------

$(document).ready(function() {
//  Setup variables
var baseScr =  $(".base-scr"),
    page =     $(".page"),
    black =    $(".black"),
    cursor =   $(".cursor"),
    thx =      $(".thx"),
    popup =    $(".popup"),
      popupBase =   $("#popup-base"),
      button =      $("#btn-base"),
      button2 =     $("#btn-base2"),
      emailAdd =    $("#somaemail path"),
      name =        $("#soma path"),
    $btnPlay = $("#btnPlay"),
    $btnSlowMo = $("#btnSlowMo"),
    $btnReverse = $("#btnReverse");

var master = new TimelineMax();

function imac() {
  //  Creating the Timeline
  var tl = new TimelineMax();

  //  Stage Clear
  tl.set(popup, {yPercent: -150})
    .set(black, {autoAlpha: 0})
    .set(thx, {yPercent: -150});

  //  Animating cursor
  tl.to(cursor, 1, {x: -200, y: -20, ease:Power4.easeOut}, "1.5");
  tl.to(cursor,1,{x: -30, y: -50, ease:Power4.easeOut});
  tl.to(cursor,1,{x: -285, y: -152, ease:Power4.easeOut});

  //  Pop Up!
  tl.to(black,0.01,{autoAlpha: 1})
    .add("popUp")
    .to(popup,0.3,{yPercent:0, ease:Bounce.easeOut});
  //tl.to(cursor,1.5,{x: 0, y: 0}, "+=1");

  //  Name and email
  tl.to(cursor, 1, {x: -180, y: -35}, "+=1")
    .staggerFrom(name, 0.03, {autoAlpha: 0}, 0.08)
    .to(cursor, 1, {x: -90}, "+=0.4")
    .staggerFrom(emailAdd, 0.03, {autoAlpha: 0}, 0.08)
    .to(cursor, 0.7, {y: -5});

  //  Popup Hover Button
  tl.to(button, 0.15, {y: 3, ease:Power4.easeO})
    .to(button, 0.2, {y: 0, ease:Power4.easeOut});

  //  Thank you popup
  tl.to(popup, 0.3, {yPercent: -150}, "+=0.3")
    .to(thx, 0.3, {yPercent: 0, ease:Bounce.easeOut}, "+=0.3");

  //  Thank you popup
  tl.to(button2, 0.15, {y: 3, ease:Power4.easeO}, "+=1.2")
    .to(button2, 0.2, {y: 0, ease:Power4.easeOut})
    .to(thx, 0.3, {yPercent: -150}, "+=0.5")
    .to(black, 0.01, {autoAlpha: 0}), "+=0.04";
}

master.add(imac());

tl.add('end');

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
