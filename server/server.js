const express = require("express");
const cors = require("cors");

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo Server open");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
