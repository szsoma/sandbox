
//   Progress Bar1 animation ----------------------------------

$(document).ready(function() {
     $('.progress .progress-bar').css("width",
         function() {
             return $(this).attr("aria-valuenow") + "%";
         })
   });

//   Progress Bar2 animation ----------------------------------

var $current=$("#1st");

$(".up").click(function() {
  $current=$current.next();
  $current.addClass("completed");
});

$(".clear").click(function() {
  $(".others").removeClass("completed");
  $current=$("#1st");
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
