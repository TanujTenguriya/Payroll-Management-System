import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true
  },
  month: {
    type: String,
    required: true   
  },
  workingDays: {
    type: Number,
    default: 30
  },
  presentDays: {
    type: Number,
    default: 0
  },
  overtimeHours: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

attendanceSchema.index({ employee: 1, month: 1 }, { unique: true });

export default mongoose.model("Attendance", attendanceSchema);
