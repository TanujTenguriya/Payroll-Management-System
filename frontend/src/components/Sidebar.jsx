import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Sidebar() {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);

  return (
    <div className="h-screen w-60 bg-slate-900 text-white p-5 flex flex-col gap-4">
      <h3 className="text-lg font-semibold mb-4">Menu</h3>

      <Link to="/" className="hover:bg-slate-700 p-2 rounded">Dashboard</Link>

      {user.role === "admin" && (
        <Link to="/employees" className="hover:bg-slate-700 p-2 rounded">Employees</Link>
      )}

      {(user.role === "admin" || user.role === "accountant") && (
        <>
          <Link to="/salary" className="hover:bg-slate-700 p-2 rounded">Salary</Link>
          <Link to="/attendance" className="hover:bg-slate-700 p-2 rounded">Attendance</Link>
          <Link to="/payroll" className="hover:bg-slate-700 p-2 rounded">Payroll</Link>
        </>
      )}

      <Link to="/payslip" className="hover:bg-slate-700 p-2 rounded">Payslip</Link>
    </div>
  );
}
