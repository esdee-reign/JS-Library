let myLibrary = [];

    function Book(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.code = Math.floor((Math.random() * 100) + 1);
        this.status = status;
    }
    
    function resetAndDisplay(){
        const cards = document.querySelector('#cards');
        cards.innerHTML = "";
        myLibrary.forEach((book) => {
            cards.innerHTML += `
            <div class = "card">
                <h3>Title: ${book.title}</h3>
                <h4>Author: ${book.author}</h4>
                <h4>Pages: ${book.pages}</h4>
                <h4>Code: ${book.code}</h4>
                <h4>Status: ${book.status}</h4>
                <button class="card-btn" style="background-color: #f14e4e" onclick="deleteBook(${book.code})">Delete</button>
                <button class="card-btn" style="background-color: #0da574" onclick="toggleRead(${book.code})">Change Status</button>
            </div>`;
        });
    }

    function addBookToLibrary(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const title = formdata.get("title");
    const author = formdata.get("author");
    const pages = formdata.get("pages");
    const status = formdata.get("status");
    myLibrary.push(new Book(title, author, pages, status));
    e.target.reset();
    hideForm();
    resetAndDisplay();
    }

    function toggleRead(code) {
        const mybook = myLibrary.filter((book) => book.code == code)[0];
        if (mybook.status == "Not Read") mybook.status = "Read";
        else mybook.status = "Not Read";
        console.log(`toggled read for: ${code}`);
        resetAndDisplay();
      }

    function deleteBook(code) {
        myLibrary = myLibrary.filter((book) => book.code != code);
        resetAndDisplay();
        alert("The book will be deleted");
    }

    function showForm() {
        document.querySelector("#show-form").style.display = "none";
        document.querySelector("#main-form").style.display = "block";
        document.querySelector("#container").style.height = "300px";
        document.querySelector("#container").style.width = "30%";
    }
    function hideForm() {
        document.querySelector("#show-form").style.display = "block";
        document.querySelector("#main-form").style.display = "none";
        document.querySelector("#container").style.height = "120px";
        document.querySelector("#container").style.width = "20%";
    }
    
    document.querySelector("#main-form").addEventListener("submit", addBookToLibrary);
    resetAndDisplay();