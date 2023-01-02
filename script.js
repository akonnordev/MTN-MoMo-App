"use strict";
const clickToOpen = document.querySelector(".doub");
const mobileMenu = document.querySelector(".mobile-nav");
const closeNav = document.querySelector(".close-nav");
const mainNav2 = document.querySelector(".main-nav2");
const footerNav = document.querySelector(".footer-nav");
const secretNumber = 1234;
const sendCode = document.querySelector(".sendcode");
let chances = 3;
let modalBg2 = document.querySelector(".modal-bg2");
let modalClose2 = document.querySelector(".close-modal2");

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
const image = document.querySelector(".image");
const posit = document.querySelector(".posit");

image.addEventListener("click", function () {
  modalBg.classList.remove("modal-activate");
  document.querySelector(".main-nav h1").textContent = "Home";
  document.querySelector(".main-nav").style.position = "fixed";
  image.src = "images/mtn momo.png";
});
posit.addEventListener("click", function () {
  document.querySelector(".main-nav").style.paddingtop = "245px";
  document.querySelector(".main-nav").style.position = "fixed";
  posit.zindex = 90;
  document.querySelector(".modal-box ").style.zindex = 98;
  mobileMenu.style.padding = "0 29px";
});

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("modal-activate");
  document.querySelector(".main-nav h1").textContent = "MoMo Pin";
  image.src = "images/arrowb.png";
  document.querySelector(".main-nav").style.position = "float";
  document.querySelector(".main-nav").style.zindex = 1;
  document.querySelector(".modal-box ").style.zindex = 98;
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("modal-activate");
  // document.querySelector(".main-nav").style.left = "0px";
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

sendCode.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    alert(`
    Enter your 4 digits PinCode`);
  } else if (guess === secretNumber) {
    modalBg.classList.remove("modal-activate");
    modalBg2.classList.add("modal-activate2");
    document.querySelector(".main-nav").style.position = "fixed";
    image.src = "images/mtn momo.png";
    document.querySelector(".main-nav h1").textContent = "MoMo";
    clickToOpen.style.display = "none";
    // alert("helloo good");
  } else if (guess !== secretNumber) {
    chances--;

    alert(`
    Wrong MoMo Pin
    Entered MoMo Pin is incorrect.
    Please note that MoMo Pin will
    be blocked if wrong MoMo Pin 
    is entered more than 3 times.
    You have ${chances} changes left`);

    if (chances === 0) {
      sendCode.disabled = true;
      clickToOpen.style.display = "none";
      document.querySelector(".restart").textContent =
        "Pin Blocked, Refresh page";
      document.querySelector(".restart").style.color = "red";
    }
  }
});
