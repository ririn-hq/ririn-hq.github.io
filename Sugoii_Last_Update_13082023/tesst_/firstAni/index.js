// script.js
document.addEventListener("DOMContentLoaded", function() {
  var openingEffect = document.querySelector(".opening-effect");
  openingEffect.addEventListener("animationend", function() {
    openingEffect.style.display = "none";
  });
});
