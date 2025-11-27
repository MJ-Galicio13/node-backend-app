const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Your required details
const fullName = "Galicio Mark Jhon";
const section = "BSIT-SM 4102";
const quote = "godbless";

app.get("/", (req, res) => {
  res.send(`
    <div style="text-align:center; font-family: Arial; margin-top: 100px;">
      <h1>${fullName}</h1>
      <h2>${section}</h2>
      <p><em>"${quote}"</em></p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});