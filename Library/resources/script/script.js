let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}


const addBtn = document.querySelector(".add").addEventListener("click", function(e){
    addBookToLibrary("harry", "potter", 1000, "not read");
});
const removeBtn = document.querySelector(".remove").addEventListener("click", function(e){

});
const modifyBtn = document.querySelector(".modify").addEventListener("click", function(e){

});