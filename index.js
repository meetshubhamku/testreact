const express = require("express");
const app = express();
const port = 5001;
const path = require("path");

app.use("/", express.static("test/build"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "test/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
