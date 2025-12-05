import Employee from "../models/employee.model.js";
import Payroll from "../models/payroll.model.js";
import Attendance from "../models/attendance.model.js";
import Salary from "../models/salaryStructure.model.js";

/* GENERATE PAYROLL FOR ALL EMPLOYEES */
export const generatePayroll = async (req, res) => {
  const { month } = req.params;

  const employees = await Employee.find();

  let generated = [];

  for (const emp of employees) {
    const salary = await Salary.findOne({ employee: emp._id });
    const attendance = await Attendance.findOne({ employee: emp._id, month });

    if (!salary || !attendance) continue;

    const gross = salary.basic + salary.hra + salary.da + salary.otherAllowances;
    const pf = (salary.pfRate / 100) * salary.basic;
    const tax = (salary.taxRate / 100) * gross;

    const netSalary = gross - pf - tax;

    const payroll = await Payroll.findOneAndUpdate(
      { employee: emp._id, month },
      {
        employee: emp._id,
        month,
        grossSalary: gross,
        totalDeductions: pf + tax,  
        netSalary
      },
      { upsert: true, new: true }
    );

    generated.push(payroll);
  }

  res.json({
    message: "Payroll generated",
    count: generated.length,
    result: generated
  });
};

export const getPayslip = async (req, res) => {
  const { month } = req.params;

  const emp = await Employee.findOne({ user: req.user._id });
  if (!emp) return res.status(404).json({ message: "Employee not found" });

  console.log("Searching for - Employee ID:", emp._id.toString(), "Month:", month);

  const payroll = await Payroll.findOne({
    employee: emp._id,
    month: month.trim() // Remove any whitespace
  }).populate("employee");

  console.log("Query result:", payroll);

  if (!payroll) {
    // Debug
    const allPayrolls = await Payroll.find({ employee: emp._id });
    console.log("All payrolls for employee:", allPayrolls);
    
    return res.status(404).json({ 
      message: "Payslip not found",
      searchedMonth: month,
      employeePayrolls: allPayrolls.map(p => p.month)
    });
  }

  res.json(payroll);
};