import Employee from "../models/employee.model.js";
import User from "../models/User.model.js";

export const createEmployee = async (req, res) => {
  try {
    const { email, name, department, designation, dateOfJoining, bankAccount, ifscCode } = req.body;

    // find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not registered" });

    // prevent duplicate employee creation
    const exists = await Employee.findOne({ user: user._id });
    if (exists) return res.status(400).json({ message: "Employee already exists" });

    const emp = new Employee({
      user: user._id,
      name,
      department,
      designation,
      dateOfJoining,
      bankAccount,
      ifscCode
    });

    await emp.save();

    res.status(201).json(emp);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* GET ALL EMPLOYEES (ADMIN VIEW) */
export const getEmployees = async (req, res) => {
  const employees = await Employee.find().populate("user", "email");
  res.json(employees);
};

/* GET LOGGED-IN USER EMPLOYEE PROFILE */
export const getMyEmployee = async (req, res) => {
  const employee = await Employee.findOne({ user: req.user._id });

  if (!employee) return res.json(null);

  res.json(employee);
};
