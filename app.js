const newBook = document.querySelector(".new-book");
const formContainer = document.querySelector(".form-container");

newBook.addEventListener("click", () => {
  formContainer.classList.add("fadeIn");
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  formContainer.classList.remove("fadeIn");
});
