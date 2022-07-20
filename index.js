"use strict";
const resizeOps = () => {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
};

let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");
const winnerHome = document.querySelector(".home-team");
const winnerGuest = document.querySelector(".guest-team");

let homeScore = 0;
let guestScore = 0;

function homePlusOne() {
  homeScore += 1;
  homeEl.textContent = homeScore;
  let audio = new Audio("sound/team_one.mp3");
  audio.play();
  winningNow();
}

function homePlusTwo() {
  homeScore += 2;
  homeEl.textContent = homeScore;
  let audio = new Audio("sound/team_one.mp3");
  audio.play();
  winningNow();
}

function homePlusThree() {
  homeScore += 3;
  homeEl.textContent = homeScore;
  let audio = new Audio("sound/team_one.mp3");
  audio.play();
  winningNow();
}

function resetAll() {
  homeScore = 0;
  guestScore = 0;
  homeEl.textContent = homeScore;
  guestEl.textContent = guestScore;
  winnerHome.classList.remove("winning");
  winnerGuest.classList.remove("winning");
  winnerHome.classList.remove("tie");
  winnerGuest.classList.remove("tie");
  let audio = new Audio("sound/reset.mp3");
  audio.play();
}

function guestPlusOne() {
  guestScore += 1;
  guestEl.textContent = guestScore;
  let audio2 = new Audio("sound/team_2.mp3");
  audio2.play();
  winningNow();
}

function guestPlusTwo() {
  guestScore += 2;
  guestEl.textContent = guestScore;
  let audio2 = new Audio("sound/team_2.mp3");
  audio2.play();
  winningNow();
}

function guestPlusThree() {
  guestScore += 3;
  guestEl.textContent = guestScore;
  let audio2 = new Audio("sound/team_2.mp3");
  audio2.play();
  winningNow();
}

function winningNow() {
  if (homeScore > guestScore) {
    winnerHome.classList.add("winning");
    winnerHome.classList.remove("tie");
    winnerGuest.classList.remove("winning");
    winnerGuest.classList.remove("tie");
  } else if (homeScore < guestScore) {
    winnerHome.classList.remove("winning");
    winnerHome.classList.remove("tie");

    winnerGuest.classList.add("winning");
    winnerGuest.classList.remove("tie");
  } else if (homeScore === guestScore) {
    winnerHome.classList.add("tie");
    winnerGuest.classList.add("tie");
  } else {
    winnerHome.classList.remove("winning, tie");
    winnerGuest.classList.remove("winning, tie");
  }
}
