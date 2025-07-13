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

const mappedLibrary = myLibrary.map((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    mainGrid.appendChild(bookCard);
    bookCard.innerText = `Title: ${book.title} \n Author: ${book.author} \n Pages: ${book.pages} \n ID: ${book.bookID}`;
})

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
})

// TO
// Fix ID system
// Disable default behavior on submit button
// Add new book to grid when submit button is pressed
// Clear form with a "false click" on reset button when submitted
// Set form display to none on submit as well