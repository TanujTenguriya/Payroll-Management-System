import User from "../models/User.model.js";
import Salary from "../models/salaryStructure.model.js";
import Employee from "../models/employee.model.js";

    // SET OR UPDATE SALARY
export const setSalary = async (req, res) => {
  try {
    const { employee, basic, hra, da, otherAllowances, pfRate, taxRate } = req.body;

    // USER LOOKUP FIRST
    const user = await User.findOne({ email: employee });
    if (!user) {
      return res.status(404).json({ message: "User email not found" });
    }

    // EMPLOYEE LOOKUP NEXT
    const emp = await Employee.findOne({ user: user._id });
    if (!emp) {
      return res.status(404).json({ message: "Employee not created for this email" });
    }

    const salary = await Salary.findOneAndUpdate(
      { employee: emp._id },
      {
        employee: emp._id,
        basic,
        hra,
        da,
        otherAllowances,
        pfRate,
        taxRate
      },
      { upsert: true, new: true }
    );

    res.json(salary);

  } catch (err) {
    console.error("SALARY ERROR:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSalary = async (req, res) => {
  const { empId } = req.params;

  let emp;

  if (empId.length < 24) {
    emp = await Employee.findOne({ empCode: empId });
  } else {
    emp = await Employee.findById(empId);
  }

  if (!emp) return res.status(404).json({ message: "Employee not found" });

  const salary = await Salary.findOne({ employee: emp._id }).populate("employee");

  if (!salary) return res.status(404).json({ message: "Salary not set" });

  res.json(salary);
};
