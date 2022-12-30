"use strict";
const clickToOpen = document.querySelector(".doub");
const mobileMenu = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close-nav");

clickToOpen.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  document.querySelector(".main-nav h1").textContent = "Menu";
});

closeNav.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
  document.querySelector(".main-nav h1").textContent = "Home";
});
