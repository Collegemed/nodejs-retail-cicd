const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

/* =====================
   API ROUTES FIRST
===================== */

app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Retail API"
  });
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 800, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 500, category: "Electronics" },
    { id: 3, name: "Headphones", price: 150, category: "Accessories" },
    { id: 4, name: "Smart Watch", price: 220, category: "Wearables" },
    { id: 5, name: "Keyboard", price: 90, category: "Accessories" }
  ]);
});

/* =====================
   STATIC FRONTEND LAST
===================== */

app.use(express.static(path.join(__dirname, "../frontend")));

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Retail API running on port ${PORT}`);
  });
}

module.exports = app;