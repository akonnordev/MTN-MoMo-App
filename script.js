"use strict";
const clickToOpen = document.querySelector(".doub");
const mobileMenu = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close-nav");

clickToOpen.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

closeNav.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});
