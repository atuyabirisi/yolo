const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const upload = multer();

const productRoute = require("./routes/api/productRoute");

// Connecting to the Database
// let mongodb_url = "mongodb://localhost/";
// let dbName = "yolomy";

// define a url to connect to the database
const MONGODB_URI = "mongodb://database:27017/yolomy";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

// Check Connection
db.once("open", () => {
  console.log("Database connected successfully");
});

// Check for DB Errors
db.on("error", (error) => {
  console.log(error);
});

// Initializing express
const app = express();

// Body parser middleware
app.use(express.json());

//
app.use(upload.array());

// Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Use Route
app.use("/api/products", productRoute);

// Define the PORT
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
