import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

export default app;



