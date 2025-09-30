const express = require("express");

const app = express();
const port = 3000;

// GET API endpoint returning the required single line
app.get("/api", (req, res) => {
  res.send("Server running at http://localhost:3000/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
