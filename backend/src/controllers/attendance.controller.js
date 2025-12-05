import Attendance from "../models/attendance.model.js";
import Employee from "../models/employee.model.js";
import User from "../models/User.model.js";

export const markAttendance = async (req, res) => {
  try {
    const { employee, month, workingDays, presentDays } = req.body;

    let emp = null;

    // IF EMAIL
    if (employee.includes("@")) {
      const user = await User.findOne({ email: employee });
      if (!user) return res.status(404).json({ message: "User not found" });

      emp = await Employee.findOne({ user: user._id });

    // IF EMP CODE
    } else if (employee.length < 24) {
      emp = await Employee.findOne({ empCode: employee });

    // IF OBJECT ID
    } else {
      emp = await Employee.findById(employee);
    }

    if (!emp) return res.status(404).json({ message: "Employee not found" });

    const attendance = await Attendance.findOneAndUpdate(
      { employee: emp._id, month },
      { employee: emp._id, month, workingDays, presentDays },
      { upsert: true, new: true }
    );

    res.json(attendance);

  } catch (err) {
    console.error("ATTENDANCE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const { empId } = req.params;
    let emp = null;

    // EMAIL
    if (empId.includes("@")) {
      const user = await User.findOne({ email: empId });
      emp = user && await Employee.findOne({ user: user._id });

    // EMPCODE
    } else if (empId.length < 24) {
      emp = await Employee.findOne({ empCode: empId });

    // OBJECT ID
    } else {
      emp = await Employee.findById(empId);
    }

    if (!emp) return res.status(404).json({ message: "Employee not found" });

    const attendance = await Attendance.find({ employee: emp._id }).sort({ month: -1 });
    res.json(attendance);

  } catch (err) {
    console.error("FETCH ATTENDANCE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

export const getMyAttendance = async (req, res) => {
  try {
    const emp = await Employee.findOne({ user: req.user._id });
    if (!emp) return res.status(404).json({ message: "Employee not found" });

    const records = await Attendance.find({ employee: emp._id }).sort({ month: -1 });
    res.json(records);

  } catch (err) {
    console.error("MY ATTENDANCE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};
