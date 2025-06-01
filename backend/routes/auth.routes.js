import express from "express";
import {login, logout, signup} from "../controllers/auth.controller.js";

const router = express.Router();

//Authentication routes; when creating a large project you'll have lots of different
//routes for different things

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

export default router;