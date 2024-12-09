const books = [
    { title: "Perbedaan I'rob"},
    { title: "To Kill a Mockingbird", author: "Harper Lee", description: "Sebuah novel klasik Amerika yang membahas isu-isu sosial dan rasial di Amerika Selatan." },
    { title: "1984", author: "George Orwell", description: "Novel distopia yang menggambarkan dunia totalitarian di mana kebebasan berpikir ditekan dan pengawasan pemerintah sangat ketat." },
    { title: "Pride and Prejudice", author: "Jane Austen", description: "Novel klasik tentang cinta dan masyarakat di Inggris abad ke-19, dengan karakter Elizabeth Bennet yang cerdas dan berani." }

    
];


function displayBooks(bookList) {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';

    bookList.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `<div class="book-title">${book.title}</div>
                             <div class="book-author">${book.author}</div>
                             <div class="book-description">${book.description}</div>`;
        booksDiv.appendChild(bookDiv);
    });
}


function searchBook() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) || 
        book.author.toLowerCase().includes(searchInput)
    );
    displayBooks(filteredBooks);
}

// Display all books on page load
displayBooks(books);
