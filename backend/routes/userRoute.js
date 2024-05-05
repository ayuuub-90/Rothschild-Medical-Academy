import express from "express";
const router = express.Router();
import { authenticate } from "../middlewares//auth_middleware.js";
import {
  // changePassword,
  createUser,
  getUserById,
  loginUser,
  logoutUser,
  updateUser,
} from "../controllers/userController.js";

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").post(authenticate, logoutUser);
router
  .route("/profile")
  .get(authenticate, getUserById)
  .put(authenticate, updateUser);
// router.route("/profile/password-change").put(authenticate, changePassword);

export default router;
