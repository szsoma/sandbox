
//   Progress Bar1 animation ----------------------------------

$(document).ready(function(){
  var current = 1;

  widget = $(".step");
  btnnext = $(".next");
  btnback = $(".back");
  btnsubmit = $(".submit");

  // Init buttons and UI
  widget.not(':eq(0)').hide();
  hideButtons(current);
  setProgress(current);

  // Next button click action
  btnnext.click(function(){
    if(current < widget.length){
      widget.show();
      widget.not(':eq('+(current++)+')').hide();
      setProgress(current);
    }
    hideButtons(current);
  })

  // Back button click action
  btnback.click(function(){
    if(current > 1){
      current = current - 2;
      btnnext.trigger('click');
    }
    hideButtons(current);
  })
});

// Change progress bar action
setProgress = function(currstep){
  var percent = parseFloat(100 / widget.length) * currstep;
  percent = percent.toFixed();
  $(".progress-bar").css("width",percent+"%").html(percent+"%");
}

// Hide buttons according to the current step
hideButtons = function(current){
  var limit = parseInt(widget.length);

  $(".action").hide();

  if(current < limit) btnnext.show();
  if(current > 1) btnback.show();
  if (current == limit) { btnnext.hide(); btnsubmit.show(); }
}

//   Progress Bar2 animation ----------------------------------

var $current=$("#bejelentkezes");

$(".up").click(function() {
  $current=$current.next();
  $current.addClass("completed");
});

$(".clear").click(function() {
  $(".others").removeClass("completed");
  $current=$("#bejelentkezes");
});


//   Progress Bar3 animation ----------------------------------

var btns = document.querySelectorAll(".buttons button");
var cat = document.getElementsByClassName("progress")[0];

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", manageProgressClasses);
}

function manageProgressClasses(){
  if (this.getAttribute("data-add")) {
    cat.classList.add(this.getAttribute("data-add"));
  }
  if (this.getAttribute("data-remove")) {
    cat.classList.remove(this.getAttribute("data-remove"));
  }
}
