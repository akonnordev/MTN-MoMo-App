"use strict";
const clickToOpen = document.querySelector(".doub");
const mobileMenu = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close-nav");
const mainNav2 = document.querySelector(".main-nav2");
const footerNav = document.querySelector(".footer-nav");

clickToOpen.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  mainNav2.classList.toggle("active2");
  document.querySelector(".main-nav h1").textContent = "Menu";
  document.querySelector(".main-nav").style.left = "100%";
  footerNav.style.left = "100%";
});

closeNav.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
  mainNav2.classList.remove("active2");
  document.querySelector(".main-nav h1").textContent = "Home";
  document.querySelector(".main-nav").style.left = "0px";
  footerNav.style.left = "0px";
});
