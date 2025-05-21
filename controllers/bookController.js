const books = require('../models/books');

// Async callback
const getAllBooks = (req, res) => {
  setTimeout(() => {
    res.status(200).json(books);
  }, 500);
};

// Promises
const getBookByISBN = (req, res) => {
  new Promise((resolve) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    resolve(book);
  }).then(book => {
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  });
};

// Async/Await
const getBooksByAuthor = async (req, res) => {
  const results = books.filter(book =>
    book.author.toLowerCase().includes(req.params.author.toLowerCase())
  );
  res.status(200).json(results);
};

const getBooksByTitle = async (req, res) => {
  const results = books.filter(book =>
    book.title.toLowerCase().includes(req.params.title.toLowerCase())
  );
  res.status(200).json(results);
};

const getBookReviews = (req, res) => {
  const book = books.find(book => book.isbn === req.params.isbn);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book.reviews || []);
};

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReviews
};
