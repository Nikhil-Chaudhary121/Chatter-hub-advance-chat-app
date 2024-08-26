import express from "express";
import {
  userLogin,
  userLogout,
  userSignup,
} from "../controllers/auth.controller.js";

const router = express.Router();

// GET login page

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/logout", userLogout);

export default router;
