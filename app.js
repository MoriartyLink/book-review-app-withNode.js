const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

app.use(express.json());

// API route base paths
app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
app.use("/reviews", reviewRoutes);  // ✅ Register Review routes

// Optional error handler
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

module.exports = app;
