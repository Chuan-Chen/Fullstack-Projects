let myLibrary = [];
let removeMode = false;
let modifyMode = false;

let modalToggle = true;
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
  /**    if(removeMode){
        book.remove();
        myLibrary.pop();
    }else if(modifyMode){
        let thisbook = myLibrary[this.dataset.index];
        bookInfo.title.value = thisbook.title;
        bookInfo.author.value = thisbook.author;
        bookInfo.pages.value = thisbook.pages;
        if(thisbook.read == "has read"){
            bookInfo.read.checked = true;
        }
        updateModal();
    } */
    console.log(this);

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



const addBtn = document.querySelector(".add").addEventListener("click", updateModal);

const removeBtn = document.querySelector(".remove").addEventListener("click", function(e){
    if(!modifyMode){
        removeMode = !removeMode;
    }
    if(removeMode && !modifyMode){
        this.classList.add("mode");
    }else{
        this.classList.remove("mode");
    }
});
const modifyBtn = document.querySelector(".modify").addEventListener("click", function(e){
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


const submit = document.querySelector(".submit").addEventListener("click", function(e){
    
    let read = bookInfo.read.checked;
    if(read){
        read = "has read";
    }else{
        read = "not read";
    }
    createBook(bookInfo.title.value, bookInfo.author.value, bookInfo.pages.value, read);
    updateModal();
});
