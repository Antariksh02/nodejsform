import express from "express";
import dotenv from 'dotenv'
import { dbConnection } from "./db/db.config.js";
import router from "./Routers/clientRouter.js";
import cors from 'cors'
const app = express()
app.use(cors())
dotenv.config({path:'../.env'})
app.use(express.json())
app.use(router)

dbConnection()

export default app