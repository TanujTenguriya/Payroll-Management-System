import mongoose from "mongoose";

const salaryStructureSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
    unique: true
  },
  basic: {
    type: Number,
    required: true
  },
  hra: {
    type: Number,
    default: 0
  },
  da: {
    type: Number,
    default: 0
  },
  otherAllowances: {
    type: Number,
    default: 0
  },
  pfRate: {
    type: Number,
    default: 12
  },
  taxRate: {
    type: Number,
    default: 5
  }
}, { timestamps: true });

export default mongoose.model("SalaryStructure", salaryStructureSchema);
