const newBook = document.querySelector(".new-book");
const formContainer = document.querySelector(".form-container");
const dialogElem = document.getElementById("dialog");
const addBook = document.querySelector(".add-book");
const bookForm = document.querySelector("#book-form");

newBook.addEventListener("click", () => {
  dialogElem.showModal();
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});

const book = document.querySelector(".book");
const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = Math.floor(Math.random() * 1000000);
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault;
  const formData = new FormData(e.target);
  const formDataObj = Object.fromEntries(formData);

  let title = formDataObj.title;
  let author = formDataObj.author;
  let pages = formDataObj.pages;
  let status;

  if (formDataObj.status === "on") {
    status = "read";
  } else {
    status = "notRead";
  }

  addBookToLibrary(title, author, pages, status);
});

function addBookToLibrary(title, author, pages, status) {
  myLibrary.push(new Book(title, author, pages, status));
  console.log(myLibrary);
}
