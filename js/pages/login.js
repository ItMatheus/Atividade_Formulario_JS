const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
