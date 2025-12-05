import { Link, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Receipt,
  Wallet,
  FileBadge,
} from "lucide-react";

export default function Sidebar() {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const location = useLocation();

  const menuItem =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer " +
    "hover:bg-white/10 hover:scale-[1.03]";

  const activeItem = "bg-white/20 shadow-lg shadow-black/20";

  return (
    <div className="h-screen w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 text-white p-6 flex flex-col gap-4">

      <h2 className="text-xl font-bold mb-6 tracking-wide bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
        Dashboard Menu
      </h2>

      {/* Dashboard */}
      <Link
        to="/"
        className={`${menuItem} ${
          location.pathname === "/" ? activeItem : ""
        }`}
      >
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </Link>

      {/* Admin Only */}
      {user.role === "admin" && (
        <Link
          to="/employees"
          className={`${menuItem} ${
            location.pathname === "/employees" ? activeItem : ""
          }`}
        >
          <Users size={20} />
          <span>Employees</span>
        </Link>
      )}

      {/* Admin + Accountant */}
      {(user.role === "admin" || user.role === "accountant") && (
        <>
          <Link
            to="/salary"
            className={`${menuItem} ${
              location.pathname === "/salary" ? activeItem : ""
            }`}
          >
            <Wallet size={20} />
            <span>Salary</span>
          </Link>

          <Link
            to="/attendance"
            className={`${menuItem} ${
              location.pathname === "/attendance" ? activeItem : ""
            }`}
          >
            <CalendarCheck size={20} />
            <span>Attendance</span>
          </Link>

          <Link
            to="/payroll"
            className={`${menuItem} ${
              location.pathname === "/payroll" ? activeItem : ""
            }`}
          >
            <Receipt size={20} />
            <span>Payroll</span>
          </Link>
        </>
      )}

      {/* All Users */}
      <Link
        to="/payslip"
        className={`${menuItem} ${
          location.pathname === "/payslip" ? activeItem : ""
        }`}
      >
        <FileBadge size={20} />
        <span>Payslip</span>
      </Link>
    </div>
  );
}
