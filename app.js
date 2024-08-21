const newBook = document.querySelector(".new-book");
const formContainer = document.querySelector(".form-container");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  dialog.close();
});

const books = document.querySelector(".books");
const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
