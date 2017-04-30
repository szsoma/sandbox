//    Gsap tomato timeline   -----------------------------------

//    Setup variables
$(document).ready(function() {
	var zold = $("#zold"),
	    fekete = $("#fekete"),
	    letters = $("#ihtText path"),
	    $btnPlay = $("#btnPlay"),
	    $btnSlowMo = $("#btnSlowMo"),
	    $btnReverse = $("#btnReverse"),
	    tl;  /* TimeLine */

//   Creating timeline
  tl = new TimelineMax();

//   Animating
  tl.set([zold], {yPercent: -310, rotation: 240, transformOrigin:"center center"});
  tl.set([fekete], {yPercent: -310});
  tl.set([letters], {yPercent: -310});

  tl.to([zold,fekete], 0.3, {yPercent: 0, ease:Bounce.easeOut}, 0.5)
    .to(zold, 0.5, {rotation: 0})
    .to(letters, 0.3, {yPercent: 0, ease:Power4.easeOut})
    .staggerFrom(letters, 0.03, {autoAlpha: 0}, 0.08)
    .add("end");

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
