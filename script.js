class Book {
  constructor (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages + " " + "pages";
    this.read = read;
  }

  toggle (element) {
    if (this.read === 'Not Read') {
      this.read = "Read"
        element.style.color = 'green'
    } else {
      this.read = "Not Read"
      element.style.color = 'red'
    }
  
    element.textContent = this.read
  }

  createCard () {
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
    this.read === "Read" ? (bookRead.style.color = 'green') : (bookRead.style.color = 'red')
    bookRead.classList.add("read");
    card.appendChild(bookRead);
  
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";
    card.appendChild(removeButton);
  
    bookRead.addEventListener("click", () => {
      this.toggle(bookRead);
    });
  
    removeButton.addEventListener("click", () => {
      const index = myLibrary.indexOf(this);
      if (index > -1) {
        myLibrary.splice(index, 1);
        displayLibrary();
      }
    });
  
    display.appendChild(card);
  }
}

const display = document.querySelector("#display");
const form = document.querySelector("#bookForm");

const myLibrary = [];

const macbeth = new Book("Macbeth", "William Shakespeare", 100, "Read");
myLibrary.push(macbeth);

function addBookToLibrary() {
  const readInput = document.querySelector("#read");

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = readInput.checked ? "Read" : "Not Read";

  const allInputs = document.querySelectorAll("input");

  if (title !== "" && author !== "" && pages !== "") {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayLibrary();
  }

  allInputs.forEach((input) => {
    input.value = "";
  });

  readInput.checked = false;
}

function displayLibrary() {
  display.innerHTML = "";
  myLibrary.forEach((book) => {
    book.createCard();
  });
}

displayLibrary();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    addBookToLibrary();
  }
});