const myLibrary = [];
const shelf = document.querySelector('.shelf');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
let book;

window.onload = ()=> {
    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
};

const addBook = document.querySelector('.add_book');
addBook.addEventListener('click', ()=> {
    // e.preventDefault();
    
    if (authorInput.value === "") authorInput.placeholder = "requred author";
    const author = authorInput.value;

    if (titleInput.value === "") titleInput.placeholder = "requred title";
    const title = titleInput.value;

    if (pagesInput.value === "") pagesInput.placeholder = "requred number";
    const pages = pagesInput.value;

    const read = readInput.value;

    if (myLibrary.length < 6 &&
        author !== '' &&
        title !== '' &&
        pages !== '') {

    addBookToLibrary(author, title, pages, read);
    
    putOnTheShelf(myLibrary, book);

    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
    authorInput.placeholder = "";
    titleInput.placeholder = "";
    pagesInput.placeholder = "";
    authorInput.focus();

}});


function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read; 
    this.toggle = function() {
       return this.read === 'read' ? this.read = 'not read': this.read = 'read';
    }
}

function addBookToLibrary(author, title, pages, read) {
    book = new Book(author, title, pages, read);
    myLibrary.push(book);
    return book; 
}

function random() {
    return Math.random() * 255;
}

function putOnTheShelf(myLibrary, book) {
    
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()}, 50%)`;

    const author = document.createElement('p');
    author.textContent = book.author;
    author.style.fontSize = '12px';
    newBook.appendChild(author);

    const title = document.createElement('p');
    title.textContent = book.title;
    newBook.appendChild(title);

    const pages = document.createElement('p');
    pages.textContent = `-${book.pages}-`;
    newBook.appendChild(pages);
    
    const removeBook = document.createElement('button');
    removeBook.textContent = 'remove';
    removeBook.style.backgroundColor = "rgb(233, 54, 54)"
    newBook.appendChild(removeBook);

    const changeStatus = document.createElement('button');
    changeStatus.textContent = `${book.read}`;
    changeStatus.textContent === 'read' ?
    changeStatus.style.backgroundColor = 'rgb(66, 170, 66)' :
    changeStatus.style.backgroundColor = 'rgb(226, 206, 54)';
    newBook.appendChild(changeStatus);

    shelf.appendChild(newBook);

    changeStatus.addEventListener('click', ()=> {
        changeStatus.textContent = book.toggle();
        changeStatus.textContent === 'read' ?
        changeStatus.style.backgroundColor = 'rgb(66, 170, 66)' :
        changeStatus.style.backgroundColor = 'rgb(226, 206, 54)';
    })
    

    removeBook.addEventListener('click', ()=> {
        shelf.removeChild(newBook);
        for (let i = 0; i < myLibrary.length; i++) {
           if (myLibrary[i] === book) myLibrary.splice(i, 1);
        }
        
    })
    
}



// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "already read");
// addBookToLibrary("LOTR", "J.R.R. Tolkien", "595 pages", "not read yet");
