"use strict";

const searchBtn = document.querySelector(".search-btn");
const wrapper = document.querySelector(".wrapper");
const searchBar = document.querySelector("input");

searchBtn.addEventListener("click", function () {
  searchBar.classList.toggle("input-show");
  searchBar.classList.toggle("input-hide");
});
