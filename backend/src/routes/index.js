import express from "express";

import authRoutes from "./auth.routes.js";
import employeeRoutes from "./employee.routes.js";
import salaryRoutes from "./salary.routes.js";
import attendanceRoutes from "./attendance.routes.js";
import payrollRoutes from "./payroll.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/employees", employeeRoutes);
router.use("/salary", salaryRoutes);
router.use("/attendance", attendanceRoutes);
router.use("/payroll", payrollRoutes);

export default router;
