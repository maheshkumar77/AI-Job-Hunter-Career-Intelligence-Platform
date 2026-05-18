const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const job=require("./routes/job");
const cookieParser = require(
  "cookie-parser"
);
require("dotenv").config();

const userRoutes = require(
  "./routes/user.js"
);


const app = express();

// Middleware
app.use(cors());

app.use(express.json());

app.use(cookieParser());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/job", job)
// Test Route
app.get("/", (req, res) => {
  res.send(
    "AI Job Hunter Backend Running 🚀"
  );
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(
      "MongoDB Connected"
    );
  })
  .catch((err) => {
    console.log(err);
  });

// Port
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});

// Start Server
