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

let modalBtn = document.querySelector(".modal-btn");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".close-modal");

modalBtn.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);
  modalBg.classList.add("modal-activate");
  document.querySelector(".main-nav").style.left = "100%";
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("modal-activate");
  document.querySelector(".main-nav").style.left = "0px";
});
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "number" ? "password" : "number";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
