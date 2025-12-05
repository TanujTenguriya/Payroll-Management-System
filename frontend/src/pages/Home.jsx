import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 text-white">

      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center mt-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Payroll Management System
        </h2>
        <p className="max-w-xl text-gray-300 mb-8">
          Automate salary calculation, manage employee records, track attendance,
          and generate payslips with ease.
        </p>

        <div className="flex gap-4">
          <Link
            to="/dashboard"
            className="bg-indigo-600 px-6 py-3 rounded font-semibold hover:bg-indigo-700"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">
        <div className="bg-white/10 p-6 rounded shadow">
          <h3 className="font-bold text-lg mb-2">Employees</h3>
          <p className="text-gray-300">Centralized employee management.</p>
        </div>
        <div className="bg-white/10 p-6 rounded shadow">
          <h3 className="font-bold text-lg mb-2">Payroll</h3>
          <p className="text-gray-300">Instant monthly payroll generation.</p>
        </div>
        <div className="bg-white/10 p-6 rounded shadow">
          <h3 className="font-bold text-lg mb-2">Security</h3>
          <p className="text-gray-300">Role-based secured system.</p>
        </div>
      </div>

      <div className="text-center text-gray-400 py-4 border-t border-gray-700">
        © 2025 Payroll Management System
      </div>
    </div>
  );
}
