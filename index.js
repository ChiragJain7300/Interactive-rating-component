const submitBtn = document.getElementById("submitBtn");
const thankState = document.querySelector(".thankState");
const ratingBody = document.querySelector(".ratingBody");
const numArray = document.querySelectorAll(".circleBack");
const selectedRating = document.getElementById("selectedRating");
numArray.forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.toggle("selected");
    selectedRating.textContent = e.target.id;
  });
});
submitBtn.addEventListener("click", () => {
  thankState.classList.toggle("disappear");
  ratingBody.classList.toggle("disappear");
});
