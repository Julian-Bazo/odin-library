const myLibrary = [];
// let bookID = self.crypto.randomUUID;
let bookID = 0;


function Book(title, author, pages) {
    if (!new.target) {
        throw Error("You must use the word 'new' when calling on the constructor!");
    }
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    bookID++;
    this.ID = bookID;
}

function addBooktoLibrary(title, author, pages) {
    return myLibrary.push(new Book(title, author, pages));
}

addBooktoLibrary("LoTR", "Tolkien", "297");
addBooktoLibrary("GoT", "Martin", "804");
addBooktoLibrary("GoT", "Martin", "804");
addBooktoLibrary("GoT", "Martin", "804");
addBooktoLibrary("GoT", "Martin", "804");
addBooktoLibrary("GoT", "Martin", "804");
addBooktoLibrary("GoT", "Martin", "804");

console.table(myLibrary);

const mainGrid = document.querySelector(".library-cards");

function initializeLibrary() {
const mappedLibrary = myLibrary.map((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    mainGrid.appendChild(bookCard);
    bookCard.innerText = `Title: ${book.title} \n Author: ${book.author} \n Pages: ${book.pages} \n ID: ${book.bookID}`;
})
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

submitButton.addEventListener("click", () => {
    event.preventDefault();
    if (bookTitle.value !== "" && authorName.value !== "" && pageCount.value !== "") {    
        addBooktoLibrary(bookTitle.value, authorName.value, pageCount.value);
        addButton.click();
        resetButton.click()
        console.log(authorName.value);
    }
    else {
        alert("Please include all details!")
    }
})



// TO
// Fix ID system
// Add new book to grid when submit button is pressed
    // Find a way to refresh the array without reprinting the whole thing
