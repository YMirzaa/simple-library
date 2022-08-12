let myLibrary = [];

const addBookButton = document.querySelector("input[id=add-book]");
const goBackButton = document.querySelector("input[id='go-back-button']");
const bottom = document.querySelector(".bottom");
const form = document.querySelector("form");
const sbmtBtn = document.querySelector("input#submit-button");


addBookButton.addEventListener('click', showHideForm);
goBackButton.addEventListener('click', showHideForm);
sbmtBtn.addEventListener('click', createCard);

function createCard(){
    
    let book = new Book(
        form.elements["title"].value,
        form.elements["author"].value,
        form.elements["pages"].value,
        form.elements["readFlag"].value
    );

    const cardClone = document.querySelector(".card").cloneNode(true);
    
    cardClone.querySelector(".title p").textContent = book.title;
    cardClone.querySelector(".author p").textContent = book.author;
    cardClone.querySelector(".pages p").textContent = book.pages;
    cardClone.querySelector(".readFlag p").textContent = book.readFlg;
    
    form.reset();
    showHideForm();
    myLibrary.push(book);

    bottom.appendChild(cardClone);

}

function showHideForm(){
    form.classList.toggle("hide");
    addBookButton.classList.toggle("hide");
    bottom.classList.toggle("hide");


}

function Book(title, author, pages, readFlg){
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readFlg = readFlg;
    this.info = ()=>{
        return `${this.title} by ${this.author}, ${this.pages} pages, 
        ${readFlg}.`
    }

}

function display(){

    for(let book in myLibrary){
        book.info();
    }

}