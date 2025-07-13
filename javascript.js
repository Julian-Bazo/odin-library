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
    bookCard.innerText = `Title: ${book.title} \n Author: ${book.author} \n Pages: ${book.pages}`;

})