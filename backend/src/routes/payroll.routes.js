import express from "express";
import {
  generatePayroll,
  getPayslip
} from "../controllers/payroll.controller.js";

import { protect, adminOrAccountant } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Generate payroll for a whole month
router.post("/generate/:month", protect, adminOrAccountant, generatePayroll);
router.get("/my/:month", protect, getPayslip);

export default router;
