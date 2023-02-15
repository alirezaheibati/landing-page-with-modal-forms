const overlay = document.getElementById("overlay");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const pageForms = document.querySelectorAll(".form");
const signUpCntainer = document.getElementById("signup-container");
const logInCntainer = document.getElementById("login-container");
const closeBtns = document.querySelectorAll(".close-btn");

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.parentElement.style.display = "none";
    overlay.style.display = "none";
  });
});
pageForms.forEach((form) => {
  form.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

loginBtn.addEventListener("click", () => {
  logInCntainer.style.display = "initial";
  overlay.style.display = "initial";
});
signupBtn.addEventListener("click", () => {
  signUpCntainer.style.display = "initial";
  overlay.style.display = "initial";
});
overlay.addEventListener("click", () => {
  signUpCntainer.style.display = "none";
  logInCntainer.style.display = "none";
  overlay.style.display = "none";
});
