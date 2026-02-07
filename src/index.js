const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "OK", service: "Retail API" });
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 }
  ]);
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Retail API running on port ${PORT}`);
  });
}
