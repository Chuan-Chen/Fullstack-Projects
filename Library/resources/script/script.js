let myLibrary = [];
let removeMode = false;
let modifyMode = false;

let modalToggle = true;

let lastClicked = -1;
const modal = document.querySelector("#modal");
const content = document.querySelector(".content");
const bookInfo = document.querySelector("#book-info");


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

function updateModal(){
    if(modalToggle){
        modal.classList.remove("modal");
        modalToggle = !modalToggle;
    }else{
        modal.classList.add("modal");
        modalToggle = !modalToggle;
    }
}


function clickedBook(){
    lastClicked = this.dataset.index;
    if(removeMode && !modifyMode){
        this.remove();
        myLibrary.splice(this.dataset.index, 1);
    }else if(modifyMode && !removeMode){
        let thisbook = myLibrary[this.dataset.index]
        bookInfo.title.value = thisbook.title;
        bookInfo.author.value = thisbook.author;
        bookInfo.pages.value = thisbook.pages;
        if(thisbook.read === "has read"){
            bookInfo.read.checked = true;
        }
        updateModal();
    }
    console.log();

}


function createBook(title, author, pages, read){
    const book = document.createElement("div");
    const bookDescriptions = [];
    for(let i = 0; i < arguments.length; i++){
        const temp = document.createElement("div");
        temp.textContent = arguments[i];
        book.appendChild(temp);
        bookDescriptions.push(temp);
    }
    book.classList.add("book");
    book.dataset.index = myLibrary.length;
    book.addEventListener("click", clickedBook);
    addBookToLibrary(title, author, pages, read, book, bookDescriptions);
    content.append(book);
}


function resetModal(){
    bookInfo.title.value = "";
    bookInfo.pages.value = "";
    bookInfo.author.value = "";
    bookInfo.read.checked = false;
}

function updateBook(index){
    let book = myLibrary[index];
    let bookDiv = book.book;
    bookDiv.getElementsByTagName('div')[0].textContent = book.title;
    bookDiv.getElementsByTagName('div')[1].textContent = book.author;
    bookDiv.getElementsByTagName('div')[2].textContent = book.pages;
    bookDiv.getElementsByTagName('div')[3].textContent = book.read;
}
    


const addBtn = document.querySelector(".add").addEventListener("click", function(e){
    if(modifyMode) return;
    resetModal();
    submit.classList.remove("display");
    modalModfiy.classList.add("display");
    updateModal();
});

const removeBtn = document.querySelector(".remove").addEventListener("click", function(e){
    removeMode = !removeMode;
    if(removeMode && !modifyMode){
        this.classList.add("mode");
    }else{
        this.classList.remove("mode");
    }
});
const modifyBtn = document.querySelector(".modify").addEventListener("click", function(e){

    submit.classList.add("display");
    modalModfiy.classList.remove("display");

    if(!removeMode){
        modifyMode = !modifyMode;
    }
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
const submit = document.querySelector(".submit");
submit.addEventListener("click", function(e){
    let read = bookInfo.read.checked;
    if(read){
        read = "has read";
    }else{
        read = "not read";
    }
    createBook(bookInfo.title.value, bookInfo.author.value, bookInfo.pages.value, read);
    resetModal();
    updateModal();
});

const modalModfiy = document.querySelector(".modify-modal")
modalModfiy.addEventListener("click", function(e){
    console.log();
    let book = myLibrary[lastClicked];
    book.title = bookInfo.title.value;
    book.author = bookInfo.author.value;
    book.pages = bookInfo.pages.value;
    if(bookInfo.read.checked === true){
        book.read = "has read";
    }else{
        book.read = "not read";
    }
    updateBook(lastClicked);
    updateModal();
});