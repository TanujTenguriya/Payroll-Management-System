import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  empCode: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  dateOfJoining: {
    type: Date,
    required: true
  },
  bankAccount: {
    type: String,
    required: true
  },
  ifscCode: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

export default mongoose.model("Employee", employeeSchema);
