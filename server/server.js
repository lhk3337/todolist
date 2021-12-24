const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.port || 5000;

const mongoDBURI = process.env.MONGGOURI;

mongoose.connect(mongoDBURI, { useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfuly");
});

const todoRouter = require("./Todo");

app.use("/todo", todoRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
