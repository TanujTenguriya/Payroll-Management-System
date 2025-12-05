import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("userName", res.data.name);
      navigate("/");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-800">

      {/* Background Animated Blobs */}
      <div className="absolute w-[30rem] h-[30rem] bg-purple-500/30 blur-[150px] top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[28rem] h-[28rem] bg-blue-500/20 blur-[120px] bottom-10 right-10 animate-bounce"></div>

      {/* LOGIN CARD */}
      <form
        onSubmit={handleLogin}
        className="
          relative z-10 
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          shadow-2xl rounded-2xl 
          p-10 w-80 
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
          Payroll Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="
            w-full p-3 rounded-lg mb-4 
            bg-white/20 text-white 
            border border-white/30 
            focus:outline-none focus:ring-2 focus:ring-purple-400
            transition-all
          "
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="
            w-full p-3 rounded-lg mb-6 
            bg-white/20 text-white 
            border border-white/30 
            focus:outline-none focus:ring-2 focus:ring-purple-400
            transition-all
          "
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Login Button */}
        <button
          className="
            w-full bg-gradient-to-r from-purple-500 to-indigo-600 
            hover:opacity-90 hover:scale-105 
            text-white py-2 rounded-lg font-semibold
            transition-all duration-300 
            shadow-lg shadow-purple-500/30
          "
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-sm text-center text-white/80 mt-4">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-300 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
