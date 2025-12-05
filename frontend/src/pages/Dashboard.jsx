import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {role === "admin" && (
          <Link to="/employees" className="card">
            <h2 className="title">Employees</h2>
            <p>Manage employee records</p>
          </Link>
        )}

        {(role === "admin" || role === "accountant") && (
          <>
            <Link to="/salary" className="card">
              <h2 className="title">Salary</h2>
              <p>Configure salary structure</p>
            </Link>

            <Link to="/attendance" className="card">
              <h2 className="title">Attendance</h2>
              <p>Track employee attendance</p>
            </Link>

            <Link to="/payroll" className="card">
              <h2 className="title">Payroll</h2>
              <p>Generate monthly payroll</p>
            </Link>
          </>
        )}

        {role === "employee" && (
          <Link to="/my-attendance" className="card">
            <h2 className="title">My Attendance</h2>
            <p>View your attendance history</p>
          </Link>
        )}
        
        <Link to="/payslip" className="card">
          <h2 className="title">Payslip</h2>
          <p>View salary slip</p>
        </Link>

      </div>
    </Layout>
  );
}
