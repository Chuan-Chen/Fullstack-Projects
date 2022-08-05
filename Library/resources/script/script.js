let myLibrary = [];
let removeMode = false;
let modifyMode = false;
const content = document.querySelector(".content");

function Book(title, author, pages, read, bookElement){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.book = bookElement;
    this.bookDescriptions = bookElement;
}

function addBookToLibrary(title, author, pages, read, book){
    myLibrary.push(new Book(title, author, pages, read, book));
}

function createBook(e){
    const book = document.createElement("div");
    const bookDescriptions = [];
    for(let i = 0; i < 4; i++){
        const temp = document.createElement("div");
        book.appendChild(temp);
        bookDescriptions.push(temp);
    }
    book.classList.add("book");
    book.addEventListener("click", function(e){
        if(removeMode){
            book.remove();
            myLibrary.pop();
        }
    });
    addBookToLibrary("", "", 0, "", book, bookDescriptions);
    content.append(book);
}



const addBtn = document.querySelector(".add").addEventListener("click", createBook);
const removeBtn = document.querySelector(".remove").addEventListener("click", function(e){
    removeMode = !removeMode;
    if(removeMode && !modifyMode){
        this.classList.add("mode");
    }else{
        this.classList.remove("mode");
    }
});
const modifyBtn = document.querySelector(".modify").addEventListener("click", function(e){
    modifyMode = !modifyMode;
    if(!removeMode && modifyMode){
        this.classList.add("mode");
    }else{
        this.classList.remove("mode");
    }
});

window.document.addEventListener("keydown", (e) => {
    if(e.keyCode == 32){ 
        myLibrary[myLibrary.length-1].book.remove();
        myLibrary.pop();
    }
    
});