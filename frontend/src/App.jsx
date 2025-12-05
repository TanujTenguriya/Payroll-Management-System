import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Salary from "./pages/Salary";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";
import Payslip from "./pages/Payslip";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/Register";
import MyAttendance from "./pages/MyAttendance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />

      <Route path="/employees" element={
        <PrivateRoute roles={["admin"]}>
          <Employees />
        </PrivateRoute>
      } />

      <Route path="/my-attendance" element={
        <PrivateRoute roles={["employee"]}>
          <MyAttendance />
        </PrivateRoute>
      } />

      <Route path="/salary" element={
        <PrivateRoute roles={["admin","accountant"]}>
          <Salary />
        </PrivateRoute>
      } />

      <Route path="/attendance" element={
        <PrivateRoute roles={["admin","accountant"]}>
          <Attendance />
        </PrivateRoute>
      } />

      <Route path="/payroll" element={
        <PrivateRoute roles={["admin","accountant"]}>
          <Payroll />
        </PrivateRoute>
      } />

      <Route path="/payslip" element={
        <PrivateRoute roles={["employee","admin","accountant"]}>
          <Payslip />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
