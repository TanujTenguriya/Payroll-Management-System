import express from "express";
import { createEmployee, getEmployees, getMyEmployee } from "../controllers/employee.controller.js";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();

/* ADMIN */
router.post("/", protect, adminOnly, createEmployee);
router.get("/", protect, adminOnly, getEmployees);

/* USER */
router.get("/me", protect, getMyEmployee);

export default router;
