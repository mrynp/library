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
  const div = document.createElement("div");
  div.className = "book";
  div.style.backgroundColor = getRandomBeigeColor();
  // bookContainer.innerHTML = "";
  for (const [index, book] of myLibrary.entries()) {
    const { title, author, pages, read } = book;
    div.innerHTML = ` <p class="title">${title}</p>
                                    <p class="author">${author}</p
                                    `;
  }
  bookContainer.appendChild(div);
}

addBookToLibrary(
  "Harry Potter and the Sorcerer's Stone.",
  "JK Rowling",
  "2323"
);
addBookToLibrary(
  "Harry Potter and the Chamber of Secrets",
  "JK Rowling",
  "2323"
);
addBookToLibrary("Harry Potter and the Goblet of Fire.", "JK Rowling", "2323");
addBookToLibrary(
  "Harry Potter and the Order of the Phoenix.",
  "JK Rowling",
  "2323"
);
addBookToLibrary(
  "Harry Potter and the Half-Blood Prince.",
  "JK Rowling",
  "2323"
);
addBookToLibrary("Harry Potter and the Deathly Hallows.", "JK Rowling", "2323");
