import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const dropdownRef = useRef();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div
      className="
        w-full sticky top-0 z-50 
        bg-white/10 backdrop-blur-xl 
        border-b border-white/20 
        px-8 py-4 flex justify-between items-center 
        shadow-lg
      "
    >
      {/* Brand */}
      <Link
        to="/"
        className="
          text-2xl font-extrabold tracking-wide
          bg-gradient-to-r from-purple-300 to-blue-300 
          text-transparent bg-clip-text
          hover:opacity-80 transition-all
        "
      >
        Payroll System
      </Link>

      {/* Right Side: Authenticated User */}
      {token ? (
        <div className="relative" ref={dropdownRef}>
          {/* Avatar Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              flex items-center gap-2 
              bg-white/10 border border-white/20 
              px-3 py-2 rounded-xl 
              hover:bg-white/20 
              transition-all duration-300
            "
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold">
              {userName?.[0]?.toUpperCase() || "U"}
            </div>
            <span className="font-semibold text-white">{userName}</span>
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div
              className="
                absolute right-0 mt-3 
                w-48 bg-white/10 backdrop-blur-xl 
                border border-white/20 
                rounded-xl shadow-xl p-2 
                animate-fadeIn
              "
            >
              {/* Profile Option */}
              <Link
                to="/profile"
                className="
                  flex items-center gap-2 
                  px-3 py-2 rounded-lg 
                  hover:bg-white/10 transition
                "
              >
                <User size={18} /> Profile
              </Link>

              {/* Payslip */}
              <Link
                to="/payslip"
                className="
                  flex items-center gap-2 
                  px-3 py-2 rounded-lg 
                  hover:bg-white/10 transition
                "
              >
                <User size={18} /> Payslip
              </Link>

              {/* Logout */}
              <button
                onClick={logout}
                className="
                  flex items-center gap-2 
                  w-full text-left 
                  px-3 py-2 rounded-lg 
                  hover:bg-red-500/30 
                  transition text-red-300
                "
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        /* If no token → Show Login/Register Buttons */
        <div className="flex gap-4">
          <Link
            to="/login"
            className="
              bg-indigo-600 px-4 py-2 rounded-lg font-semibold
              hover:bg-indigo-700 hover:scale-105 transition-all
            "
          >
            Login
          </Link>
          <Link
            to="/register"
            className="
              border border-white/30 px-4 py-2 rounded-lg font-semibold
              hover:bg-white/10 hover:scale-105 transition-all
            "
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
