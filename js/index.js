//$(".tabItem").on("click", function(){
  //  $(this).removeClass("active").addClass("inactive");
//});

$(document).ready(function(){
  $("button").click(function(){
    $(".card").animate({
      width: 'toggle'
    });
  });
});

$(".tabItem").on("click", function(){
    $(this).toggleClass("active");
    if ($(this).hasClass("inactive")){
        $(this).removeClass("inactive").addClass("active");
    }
    else {
        $(this).addClass("inactive").removeClass("active");
    }
});
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};