function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const display = document.querySelector("#display");
const addButton = document.querySelector(".add-button");

Book.prototype.toggle = function () {
  this.read = !this.read;
};

Book.prototype.createCard = function () {
  const card = document.createElement("div");
  card.classList.add("card");

  const bookTitle = document.createElement("h1");
  bookTitle.textContent = this.title;
  card.appendChild(bookTitle);

  const bookAuthor = document.createElement("h2");
  bookAuthor.textContent = this.author;
  card.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.textContent = this.pages;
  card.appendChild(bookPages);

  const bookRead = document.createElement("p");
  bookRead.textContent = this.read;
  card.appendChild(bookRead);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  card.appendChild(removeButton);

  bookRead.addEventListener("click", () => {
    this.toggle();
    displayLibrary();
  });

  removeButton.addEventListener("click", () => {
    const index = myLibrary.indexOf(this);
    if (index > -1) {
      myLibrary.splice(index, 1);
      displayLibrary();
    }
  });

  display.appendChild(card);
};

const myLibrary = [];

const macbeth = new Book("Macbeth", "William Shakespeare", 100, true);
myLibrary.push(macbeth);

function addBookToLibrary() {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const readInput = document.querySelector("#read");

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.value === 'on' ? 'Read' : 'Not Read' ;


  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayLibrary();

  const allInputs = document.querySelectorAll('input')
  allInputs.forEach((input) => {
    input.value = ''
  })
}

function displayLibrary() {
  display.innerHTML = "";
  myLibrary.forEach((book) => {
    book.createCard();
  });
}

displayLibrary();

addButton.addEventListener("click", (e) => {
  addBookToLibrary();
  e.preventDefault();
});
