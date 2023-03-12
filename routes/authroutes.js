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

router.post("/register", createUser);
router.post("/login", loginUserController);
router.get("/allUsers", getAllUsers);
router.get("/logout", logout);
router.get("/refresh",handleRefreshTokens)
router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/:id", deleteUser);
router.put("/updateUser", authMiddleware, updateUser);
router.put("/blockUser/:id", authMiddleware, isAdmin, blockUser);
router.put("/unBlockUser/:id", authMiddleware, isAdmin, unBlockUser);


module.exports = router;
