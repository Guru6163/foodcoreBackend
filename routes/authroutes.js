const express = require("express");
const {
  createUser,
  loginUserController,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshTokens,
  logout,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // Update with your client-side domain
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

router.post("/register", createUser);
router.post("/login", loginUserController);
router.get("/allUsers", getAllUsers);
router.get("/logout", logout);
router.get("/refresh", handleRefreshTokens);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/:id", deleteUser);
router.put("/updateUser", authMiddleware, updateUser);
router.put("/blockUser/:id", authMiddleware, isAdmin, blockUser);
router.put("/unBlockUser/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
