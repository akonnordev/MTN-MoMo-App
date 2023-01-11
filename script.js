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
const date = new Date().toUTCString();
console.log(date);
let mbody = document.querySelector(".mbody");

// function for side navigation bar
clickToOpen.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  mainNav2.classList.toggle("active2");
  document.querySelector(".main-nav h1").textContent = "Menu";
  document.querySelector(".main-nav").style.left = "100%";
  footerNav.style.left = "100%";
  mbody.style.display = "none";
});

closeNav.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
  mainNav2.classList.remove("active2");
  document.querySelector(".main-nav h1").textContent = "Home";
  document.querySelector(".main-nav").style.left = "0px";
  footerNav.style.left = "0px";
  mbody.style.display = "block";
});

let modalBtn = document.querySelector(".modal-btn");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".close-modal");
const image = document.querySelector(".image");
const posit = document.querySelector(".posit");
let modalBg3 = document.querySelector(".modal-bg3");
let modalBg4 = document.querySelector(".modal-bg4");
const Proceed = document.querySelector(".proceed");

image.addEventListener("click", function () {
  modalBg.classList.remove("modal-activate");
  modalBg3.classList.remove("modal-activate3");
  modalBg4.classList.remove("modal-activate4");
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

//function to open momo pin modal
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

//function to verify pin code
sendCode.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    alert(`
    Enter your 4 digits PinCode`);
  } else if (guess === secretNumber) {
    modalBg.classList.remove("modal-activate");
    modalBg2.classList.add("modal-activate2");
    document.querySelector(
      ".loginT"
    ).innerHTML = `Your last MoMo Login was on ${date}`;
    document.querySelector(".main-nav").style.position = "fixed";
    image.src = "images/mtn momo.png";
    document.querySelector(".main-nav h1").textContent = "MoMo";
    clickToOpen.style.display = "none";
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

function myFunction1() {
  modalBg3.classList.add("modal-activate3");

  document.querySelector(".main-nav").style.zindex = 1;
  document.querySelector(".modal-box3").style.zindex = 99;

  document.querySelector(".main-nav").style.position = "fixed";
  image.src = "images/arrowb.png";
  document.querySelector(".main-nav h1").textContent = "Transfer";
  clickToOpen.style.display = "none";
}

//function to perform transaction
function myFunction2() {
  modalBg4.classList.add("modal-activate4");
  document.querySelector(".main-nav").style.zindex = 1;
  document.querySelector(".main-nav").style.position = "fixed";
  image.src = "images/arrowb.png";
  document.querySelector(".main-nav h1").textContent = "Transfer (MoMo)";
  document.querySelector(".modal-box4").style.zindex = 99;
  clickToOpen.style.display = "none";
}
const array = [242685844, 279660288, 599582253, 246332198];
let momobalance = 100;

Proceed.addEventListener("click", function () {
  let momonumber = Number(document.querySelector(".momonumber").value);
  let momonumber1 = Number(document.querySelector(".momonumber1").value);
  let momonumber2 = document.querySelector(".momonumber2").value;
  let error1 = momonumber1 > momobalance;
  console.log(error1);

  console.log(momonumber);
  console.log(momonumber1);
  if (error1) {
    alert(`
    You do not have sufficient funds to perform this transaction`);
  } else if (array.includes(momonumber)) {
    modalBg3.classList.remove("modal-activate3");
    modalBg2.classList.remove("modal-activate2");
    modalBg.classList.remove("modal-activate");
    modalBg4.classList.remove("modal-activate4");
    image.src = "images/mtn momo.png";
    document.querySelector(".main-nav h1").textContent = "Home";
    clickToOpen.style.display = "block";
    mobileMenu.style.padding = "70px 0";

    if (momonumber === array.includes(momonumber)) {
    }
    let currenbalance = (momobalance -= momonumber1);
    alert(
      `${date}
      You have transferred GH¢${momonumber1} to 0${momonumber} with reference ${momonumber2}. Your current available balance is ${currenbalance}`
    );
  } else if (!array.includes(momonumber)) {
    alert("please enter a valid momo number");
  }
});
