import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const role = localStorage.getItem("role");

  // Reusable card classes
  const cardStyle =
    "bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-lg " +
    "transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br " +
    "hover:from-purple-500/60 hover:to-blue-500/60 hover:border-transparent " +
    "hover:text-white cursor-pointer";

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Admin: Manage Employees */}
        {role === "admin" && (
          <Link to="/employees" className={cardStyle}>
            <h2 className="text-xl font-semibold">Employees</h2>
            <p className="text-gray-200">Manage employee records</p>
          </Link>
        )}

        {/* Admin + Accountant */}
        {(role === "admin" || role === "accountant") && (
          <>
            <Link to="/salary" className={cardStyle}>
              <h2 className="text-xl font-semibold">Salary</h2>
              <p className="text-gray-200">Configure salary structure</p>
            </Link>

            <Link to="/attendance" className={cardStyle}>
              <h2 className="text-xl font-semibold">Attendance</h2>
              <p className="text-gray-200">Track employee attendance</p>
            </Link>

            <Link to="/payroll" className={cardStyle}>
              <h2 className="text-xl font-semibold">Payroll</h2>
              <p className="text-gray-200">Generate monthly payroll</p>
            </Link>
          </>
        )}

        {/* Employee Only */}
        {role === "employee" && (
          <Link to="/my-attendance" className={cardStyle}>
            <h2 className="text-xl font-semibold">My Attendance</h2>
            <p className="text-gray-200">View your attendance history</p>
          </Link>
        )}

        {/* All Users */}
        <Link to="/payslip" className={cardStyle}>
          <h2 className="text-xl font-semibold">Payslip</h2>
          <p className="text-gray-200">View salary slip</p>
        </Link>

      </div>
    </Layout>
  );
}
