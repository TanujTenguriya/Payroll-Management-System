import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-slate-900 px-8 py-4 text-white shadow">
      
      <Link to="/" className="text-xl font-bold">
        Payroll System
      </Link>

      {!token ? (
        <div className="flex gap-4">
          <Link 
            to="/login" 
            className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black"
          >
            Register
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <span className="font-semibold">👤 {userName}</span>
          <button 
            onClick={logout}
            className="flex items-center gap-2 bg-red-600 px-3 py-2 rounded hover:bg-red-700"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}

    </div>
  );
}
