# 📚 Book Review App (Backend) – Node.js & Express.js

This project is part of my hands-on learning journey in **Node.js** and **Express.js** for backend development. The application is designed to simulate a real-world backend system for an online bookstore, focused on handling **book listings, user authentication, and user-contributed reviews** using RESTful APIs.

---

## 🚀 Project Objective

To build a fully functional **RESTful backend server** that supports:
- Book discovery (by ISBN, Author, Title)
- User registration and login
- Secure JWT-authenticated review creation, editing, and deletion
- Real-world coding practices with middleware, modular routes, and data persistence

---

## 🛠️ Tech Stack

| Layer         | Technology         |
|---------------|--------------------|
| Runtime       | Node.js (v18+)     |
| Framework     | Express.js         |
| Auth          | JWT, Express Sessions |
| Data Handling | File-based JSON (books.json) |
| Testing Tool  | Postman            |
| Dev Tools     | Nodemon, dotenv    |

---

## 📁 Project Structure

book-review-app/
├── controllers/ # Business logic for auth, books, and reviews
├── middleware/ # JWT Auth, error handlers
├── models/ # Book & User models
├── routes/ # Express routes per module
├── utils/ # Database utility functions
├── data/
│ └── books.json # Preloaded book data
├── app.js # App configuration and middlewares
├── server.js # Server bootstrap
├── .env # Secrets and configs
├── package.json
└── README.md # Project overview



---

## 🔐 Features & Capabilities

### 📚 Book Operations
- `GET /books`: Retrieve all books
- `GET /books/isbn/:isbn`: Get book by ISBN
- `GET /books/author/:author`: Get books by author
- `GET /books/title/:title`: Get books by title
- `GET /books/review/:isbn`: Get reviews for a book

### 👤 User Auth
- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login and receive JWT

### 📝 Book Reviews (Authenticated)
- `PUT /reviews/:isbn`: Add or modify a review (JWT protected)
- `DELETE /reviews/:isbn`: Delete own review (JWT protected)

---

## 🔄 Async Method Implementations (Task 10–13)

| Task   | Endpoint                        | Approach         |
|--------|----------------------------------|------------------|
| Task 10| `GET /books`                    | Async/Callback   |
| Task 11| `GET /books/isbn/:isbn`         | Promise          |
| Task 12| `GET /books/author/:author`     | Async/Await      |
| Task 13| `GET /books/title/:title`       | Async/Await      |

---

## 🧪 Testing

Use [Postman](https://www.postman.com/) or any REST client to interact with the API. Sample requests:

### Register

POST /auth/register
Content-Type: application/json
{
  "username": "moriarty",
  "password": "123456"
}

### Login
POST /auth/login
{
  "username": "moriarty",
  "password": "123456"
}


### Add/Modify Review

PUT /reviews/9780132350884
Authorization: Bearer <JWT>
{
  "review": "Excellent book on clean code!"
}

### Delete Review

DELETE /reviews/9780132350884
Authorization: Bearer <JWT>


📌 License

This project is part of my learning journey and is released under the MIT License.
🙌 Acknowledgments

    Project inspired by the final assignment from the Node.js Backend Development course.

    Skeleton code provided by course instructors.

