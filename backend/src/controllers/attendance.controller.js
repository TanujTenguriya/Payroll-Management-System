import Attendance from "../models/attendance.model.js";

/* Mark attendance */
export const markAttendance = async (req, res) => {
  const record = await Attendance.findOneAndUpdate(
    { employee: req.body.employee, month: req.body.month },
    req.body,
    { new: true, upsert: true }
  );

  res.status(201).json(record);
};

/* Get attendance */
export const getAttendance = async (req, res) => {
  const records = await Attendance.find(req.params);
  res.json(records);
};
