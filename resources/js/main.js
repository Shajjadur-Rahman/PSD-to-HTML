$(document).ready(function() {
  $(".js__sevices_section").waypoint(function(direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
  AOS.init();
  var mixer = mixitup(".‍container");
});

function openNav() {
  var myNav = document.getElementById("myNav");
  myNav.style.width = "100%";
}
function closeNav() {
  var myNav = document.getElementById("myNav");
  myNav.style.width = "0%";
}
