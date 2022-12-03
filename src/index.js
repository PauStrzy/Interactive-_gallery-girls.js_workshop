/* girls.js - Interaktywna Galeria
 */

let currentNumber = 1;
let interval;
document.querySelector("#pin" + currentNumber).classList.add("selected");
// function showSlide5() {
//   document.querySelector(".show").classList.remove("show");
//   document.querySelector("#slide5").classList.add("show");
//   currentNumber = 5;
// }

function playOnOff() {
  document.querySelector(".play").classList.toggle("on");
  clearInterval(interval);
  if (document.querySelector(".play").classList.contains("on")) {
    interval = setInterval(showNextSlide, 2000);
  }
}

function selectPin(newNumber) {
  document.querySelector(".selected").classList.remove("selected");
  document.querySelector("#pin" + newNumber).classList.add("selected");
}

function showSlide(newNumber) {
  document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide" + newNumber).classList.add("show");
  selectPin(newNumber);
  currentNumber = newNumber;
}
// function showSlide1() {
//   showSlide(1);
// }
// function showSlide2() {
//   showSlide(2);
// }
// function showSlide3() {
//   showSlide(3);
// }
// function showSlide4() {
//   showSlide(4);
// }
// function showSlide5() {
//   showSlide(5);
// }

function showNextSlide() {
  let newNumber = currentNumber + 1;
  if (newNumber > 5) newNumber = 1;
  showSlide(newNumber);
}
function showPreviousSlide() {
  let newNumber = currentNumber - 1;
  if (newNumber === 0) newNumber = 5;
  showSlide(newNumber);
}
for (let pinNumber = 1; pinNumber <= 5; pinNumber++) {
  document
    .querySelector("#pin" + pinNumber)
    // .addEventListener("click", () => showSlide(pinNumber));
    .addEventListener("click", function () {
      showSlide(pinNumber);
    });
}

document.querySelector("#next").addEventListener("click", showNextSlide);
document.querySelector("#prev").addEventListener("click", showPreviousSlide);
document.querySelector(".play").addEventListener("click", playOnOff);

// document.querySelector("#pin1").addEventListener("click", showSlide1);
// document.querySelector("#pin2").addEventListener("click", showSlide2);
// document.querySelector("#pin3").addEventListener("click", showSlide3);
// document.querySelector("#pin4").addEventListener("click", showSlide4);
// document.querySelector("#pin5").addEventListener("click", showSlide5);

// document.querySelector("#pin1").addEventListener("click", () => showSlide(1));
// document.querySelector("#pin2").addEventListener("click", () => showSlide(2));
// document.querySelector("#pin3").addEventListener("click", () => showSlide(3));
// document.querySelector("#pin4").addEventListener("click", () => showSlide(4));
// document.querySelector("#pin5").addEventListener("click", () => showSlide(5));
