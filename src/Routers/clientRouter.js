import express from "express";
import { addRegisterData } from "../Api/registerRoute.js";
import { addLoginData } from "../Api/loginRoute.js";
const router = express.Router()

router.post("/practice3/login",addLoginData)
router.post("/practice3/register",addRegisterData)

export default router