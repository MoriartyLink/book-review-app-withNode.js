const fs = require('fs');
const path = require('path');
const booksFilePath = path.join(__dirname, '../data/books.json');

// Load books data
function loadBooks() {
    const data = fs.readFileSync(booksFilePath);
    return JSON.parse(data);
}

// Save books data
function saveBooks(books) {
    fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
}

// Add or Modify Review
const addOrModifyReview = (req, res) => {
    const { isbn } = req.params;
    const { review } = req.body;
    const username = req.user.username;

    if (!review) {
        return res.status(400).json({ message: "Review is required." });
    }

    let books = loadBooks();
    const book = books.find(b => b.isbn === isbn);

    if (!book) {
        return res.status(404).json({ message: "Book not found." });
    }

    if (!book.reviews) book.reviews = {};
    book.reviews[username] = review;

    saveBooks(books);

    res.status(200).json({ message: "Review added/updated successfully.", reviews: book.reviews });
};

// Delete Review
const deleteReview = (req, res) => {
    const { isbn } = req.params;
    const username = req.user.username;

    let books = loadBooks();
    const book = books.find(b => b.isbn === isbn);

    if (!book || !book.reviews || !book.reviews[username]) {
        return res.status(404).json({ message: "Review not found." });
    }

    delete book.reviews[username];
    saveBooks(books);

    res.status(200).json({ message: "Review deleted successfully.", reviews: book.reviews });
};

module.exports = {
    addOrModifyReview,
    deleteReview
};
