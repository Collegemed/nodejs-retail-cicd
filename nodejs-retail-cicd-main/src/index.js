const express = require("express");
const path = require("path");

const app = express();

/* =====================
   MIDDLEWARE
===================== */
app.use(express.json());

/* =====================
   STATIC FRONTEND ROUTE
   Serves HTML/CSS/JS
===================== */
app.use(express.static(path.join(__dirname, "../frontend")));

/* =====================
   API ROUTES
===================== */

/* Health Check Route */
/* Root Health Route (for tests) */
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

/* Products Route */
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
   SERVER START
===================== */
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Retail API running on port ${PORT}`);
  });
}

module.exports = app;
