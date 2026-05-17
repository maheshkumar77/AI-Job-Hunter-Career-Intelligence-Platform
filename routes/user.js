const express = require("express");

const {
  signup,
  login,
} = require("../Controler/userController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const router = express.Router();

// Routes
router.post("/signup", signup);

router.post("/login", login);

// Protected Route
router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      success: true,
      message: "Protected Route",
      user: req.user,
    });
  }
);

module.exports = router;