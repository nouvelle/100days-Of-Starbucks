const express = require("express");
const app = express();

const PORT = process.env.PORT || 2222;

app.get("/", (req, res) => {
  res.send("Hey :)");
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}!`)
});