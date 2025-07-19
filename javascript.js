const myLibrary = [];
let bookID = 0;


class Book {    
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    bookID++;
    this.ID = bookID;
    }

    addBooktoLibrary() {
        return myLibrary.push(new Book(this.title, this.author, this.pages));
    }
}

const Book1 = new Book("The Lord of the Rings", "Tolkien", "1300");
Book1.addBooktoLibrary();

const Book2 = new Book("A Game of Thrones", "Martin", "804");
Book2.addBooktoLibrary();
const Book3 = new Book("A Clash of Kings", "Martin", "954");
Book3.addBooktoLibrary();
const Book4 = new Book("A Storm of Swords", "Martin", "1003");
Book4.addBooktoLibrary();
const Book5 = new Book("A Feast for Crows", "Martin", "786");
Book5.addBooktoLibrary();
const Book6 = new Book("A Dance with Dragons", "Martin", "990");
Book6.addBooktoLibrary();
const Book7 = new Book("The Winds of Winter", "Martin", "1405");
Book7.addBooktoLibrary();

console.table(myLibrary);

const mainGrid = document.querySelector(".library-cards");

function initializeLibrary() {
const mappedLibrary = myLibrary.map((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    mainGrid.appendChild(bookCard);
    bookCard.innerText = `Title: ${book.title} \n Author: ${book.author} \n Pages: ${book.pages} \n ID: ${book.ID} \n`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove"
    deleteButton.classList.add("delete-button")
    bookCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        mainGrid.removeChild(bookCard);
    })
    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    bookCard.appendChild(readButton);
    readButton.textContent = "Mark Read";
    readButton.addEventListener("click", () => {
        if (readButton.textContent === "Mark Read") {
            readButton.textContent = "Mark Unread";
            bookCard.classList.add("read");
        }
        else {
            readButton.textContent = "Mark Read";
            bookCard.classList.remove("read");
        }

    })
})
}

function updateLibrary(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    mainGrid.appendChild(bookCard);
    bookCard.innerText = `Title: ${book.title} \n Author: ${book.author} \n Pages: ${book.pages} \n ID: ${book.ID} \n`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove"
    deleteButton.classList.add("delete-button")
    bookCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        mainGrid.removeChild(bookCard);
    })
    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    bookCard.appendChild(readButton);
    readButton.textContent = "Mark Read";
    readButton.addEventListener("click", () => {
        if (readButton.textContent === "Mark Read") {
            readButton.textContent = "Mark Unread";
            bookCard.classList.add("read");
        }
        else {
            readButton.textContent = "Mark Read";
            bookCard.classList.remove("read");
        }

    })
    if (valueChecker === "yes") {
        bookCard.classList.add("read")
        readButton.textContent = "Mark Unread";
    }
}

initializeLibrary();

const addButton = document.querySelector(".add-button");
const formDiv = document.querySelector(".form-div");

let formHider = false;

addButton.addEventListener("click", () => {
    if (formHider === false) {
    formDiv.style.display = "block";
    formHider = true;
    }
    else {
        formDiv.style.display = "none";
        formHider = false;
    }
    resetButton.click();
})

// DOM Initialization for Get Info

// Form Buttons
const submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");

// Form Information
const bookTitle = document.querySelector("#book-title");
const authorName = document.querySelector("#author-name");
const pageCount = document.querySelector("#page-count");
const readStatus = document.querySelector(".read-status");

readStatus.addEventListener("mouseout", () => {
    valueChecker = readStatus.value;
    console.log(valueChecker);
})

let currentBookIndex = 0;

submitButton.addEventListener("click", () => {
    event.preventDefault();
    if (bookTitle.value !== "" && authorName.value !== "" && pageCount.value !== "" && readStatus.value !== "") {    
        const newBook = new Book(bookTitle.value, authorName.value, pageCount.value);
        newBook.addBooktoLibrary();
        currentBookIndex = myLibrary.length - 1;
        addButton.click();
        resetButton.click()
        updateLibrary(myLibrary[currentBookIndex]);
        console.log(myLibrary.lastIndexOf);
    }
    else {
        alert("Please include all details!")
    }
})


// TO DO
// Change add book form display to a modal
// Play around with object prototype in regards to read status