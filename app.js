const newBook = document.querySelector(".new-book");
const formContainer = document.querySelector(".form-container");
const dialogElem = document.getElementById("dialog");
const addBook = document.querySelector(".add-book");
const bookForm = document.querySelector("#book-form");
const bookContainer = document.querySelector(".book-container");

newBook.addEventListener("click", () => {
  dialogElem.showModal();
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});

const book = document.querySelector(".book");
const myLibrary = [];

function Book(title, author, pages, status, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = Math.floor(Math.random() * 1000000);
}

function capitalizeFirstLetter(string) {
  return string
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault;
  const formData = new FormData(e.target);
  const formDataObj = Object.fromEntries(formData);

  let title = capitalizeFirstLetter(formDataObj.title);
  let author = capitalizeFirstLetter(formDataObj.author);
  let pages = formDataObj.pages;
  let id = formDataObj.id;
  let status;

  if (formDataObj.status === "on") {
    status = true;
  } else {
    status = false;
  }

  addBookToLibrary(title, author, pages, status, id);
});

function addBookToLibrary(title, author, pages, status, id) {
  myLibrary.push(new Book(title, author, pages, status, id));
  displayBook();
}

function getRandomBeigeColor() {
  // Generate random R, G, B values in the beige range
  const r = Math.floor(210 + Math.random() * 46); // 210-255
  const g = Math.floor(180 + Math.random() * 51); // 180-230
  const b = Math.floor(140 + Math.random() * 81); // 140-220

  return `rgb(${r}, ${g}, ${b})`;
}

function displayBook() {
  bookContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const div = document.createElement("div");
    div.className = "book";
    div.style.backgroundColor = getRandomBeigeColor();
    div.innerHTML = ` 
      <p class="title">${book.title}</p>
      <p class="author">${book.author}</p>
      <img src="./assets/check.png" style="opacity:${book.status ? 1 : 0}" />
    `;

    const deleteBtn = document.createElement("div");
    deleteBtn.innerHTML = "delete";
    deleteBtn.className = "delete";
    deleteBtn.style.opacity = 0;

    deleteBtn.addEventListener("click", () => {
      deleteBook(book.id);
      div.remove(); // Remove the book's DOM element
    });

    div.appendChild(deleteBtn);
    bookContainer.appendChild(div);

    div.addEventListener("mouseover", function () {
      deleteBtn.style.opacity = 1;
    });
    div.addEventListener("mouseleave", function () {
      deleteBtn.style.opacity = 0;
    });
  });
}

function deleteBook(id) {
  // Find the index of the book with the matching id
  const bookIndex = myLibrary.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1); // Remove the book from myLibrary
  }
}

addBookToLibrary("When Breath Becomes Air", "Paul Kalanithi", 208, true);
addBookToLibrary("The Count of Monte Cristo", "Alexandre Dumas", 1276, true);
