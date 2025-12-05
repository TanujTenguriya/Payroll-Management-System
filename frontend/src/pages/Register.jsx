import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("employee");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { name, email, password, role });
      alert("User registered successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-800">

      {/* Floating Blobs */}
      <div className="absolute w-[30rem] h-[30rem] bg-purple-500/30 blur-[150px] top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[28rem] h-[28rem] bg-blue-500/20 blur-[120px] bottom-10 right-10 animate-bounce"></div>

      {/* REGISTER CARD */}
      <form
        onSubmit={handleRegister}
        className="
          relative z-10 w-96 
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          p-10 rounded-2xl shadow-2xl 
          animate-fadeIn
        "
      >
        {/* Title */}
        <h2
          className="
            text-3xl font-extrabold text-center mb-8 
            bg-gradient-to-r from-purple-300 to-blue-300 
            text-transparent bg-clip-text
          "
        >
          Register User
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="glass-input mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="glass-input mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Role */}
        <select
          className="
            glass-input mb-4 
            bg-white/20 text-white rounded-lg
          "
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option className="text-black" value="admin">Admin</option>
          <option className="text-black" value="accountant">Accountant</option>
          <option className="text-black" value="employee">Employee</option>
        </select>

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="glass-input mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Register Button */}
        <button
          className="
            w-full py-3 
            bg-gradient-to-r from-purple-500 to-indigo-600 
            hover:scale-105 hover:opacity-90 
            text-white rounded-lg font-semibold 
            transition-all duration-300 shadow-lg shadow-purple-500/30
          "
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-sm text-center text-white/80 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-300 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
