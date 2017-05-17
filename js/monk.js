//   Incredible Monk animation with Greensock  ---------------------------------

$(document).ready(function() {
//  Setup variables
var test1 =    $(".test1"),
    test2 =   $(".test2"),
    fej1 =    $(".fej1"),
    fej2 =    $(".fej2"),
    $btnPlay = $("#btnPlay"),
    $btnSlowMo = $("#btnSlowMo"),
    $btnReverse = $("#btnReverse");

//  Creating the Timeline
var tl = new TimelineMax();

//  Stage Clear
tl.set(test2, {autoAlpha: 0})
  .set(fej2, {autoAlpha: 0});

//  Head anim
tl.to(fej1,0.001,{autoAlpha: 0}, "+=1")
  .to(fej2,0.001,{autoAlpha: 1})
  .to(test1,0.001,{autoAlpha: 0}, "+=1")
  .to(test2,0.001,{autoAlpha: 1})
  .to(test2,0.001,{autoAlpha: 0}, "+=0.2")
  .to(test1,0.001,{autoAlpha: 1})
  .to(test1,0.001,{autoAlpha: 0}, "+=0.2")
  .to(test2,0.001,{autoAlpha: 1})
  .to(test2,0.001,{autoAlpha: 0}, "+=0.2")
  .to(test1,0.001,{autoAlpha: 1})
  .to(test1,0.001,{autoAlpha: 0}, "+=0.2")
  .to(test2,0.001,{autoAlpha: 1})
  .to(test2,0.001,{autoAlpha: 0}, "+=0.2")
  .to(test1,0.001,{autoAlpha: 1})
  .to(test1,0.001,{autoAlpha: 0}, "+=0.2")
  .to(test2,0.001,{autoAlpha: 1});


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
