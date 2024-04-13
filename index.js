const express = require("express");
const mongoose = require("mongoose");
const productRoute = require('./routes/product.route.js')
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// routes
app.use('/api/products', productRoute)


mongoose
  .connect(
    "mongodb+srv://backendnode:loctx123456@cluster0.1x8ouj7.mongodb.net/learnnode?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000/");
    });
  })
  .catch(() => {
    console.log("Connection faild!");
  });
