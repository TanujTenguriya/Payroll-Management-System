import Payroll from "../models/payroll.model.js";
import Employee from "../models/employee.model.js";
import SalaryStructure from "../models/salaryStructure.model.js";
import Attendance from "../models/attendance.model.js";

/* Generate payroll */
export const generatePayroll = async (req, res) => {
  const { month } = req.params;
  const employees = await Employee.find();
  let result = [];

  for (const emp of employees) {
    const salary = await SalaryStructure.findOne({ employee: emp._id });
    if (!salary) continue;

    const attendance = await Attendance.findOne({ employee: emp._id, month });
    const workingDays = attendance?.workingDays || 30;
    const present = attendance?.presentDays || workingDays;

    const BASIC = (salary.basic * present) / workingDays;
    const gross = BASIC + salary.hra + salary.da + salary.otherAllowances;

    const pf = (salary.pfRate / 100) * BASIC;
    const tax = (salary.taxRate / 100) * gross;
    const deductions = pf + tax;

    const net = gross - deductions;

    const payroll = await Payroll.findOneAndUpdate(
      { employee: emp._id, month },
      { grossSalary: gross, totalDeductions: deductions, netSalary: net },
      { new: true, upsert: true }
    );

    result.push(payroll);
  }

  res.json({ message: "Payroll generated", result });
};

/* Get payslip */
export const getPayslip = async (req, res) => {
  const { id, month } = req.params;
  const payroll = await Payroll.findOne({ employee: id, month }).populate("employee");
  res.json(payroll);
};
