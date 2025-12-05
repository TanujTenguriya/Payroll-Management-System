import express from "express";
import { markAttendance, getAttendance, getMyAttendance } from "../controllers/attendance.controller.js";
import { protect, adminOrAccountant } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Create or update attendance
router.post("/", protect, adminOrAccountant, markAttendance);

router.get("/my", protect, getMyAttendance)

export default router;
