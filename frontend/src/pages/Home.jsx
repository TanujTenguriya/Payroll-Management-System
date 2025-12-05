import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-800 text-white">

      {/* Floating Animated Blobs */}
      <div className="absolute w-[28rem] h-[28rem] bg-purple-500/30 blur-[150px] top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[24rem] h-[24rem] bg-blue-500/20 blur-[130px] bottom-10 right-10 animate-ping"></div>
      <div className="absolute w-[20rem] h-[20rem] bg-pink-500/25 blur-[120px] top-1/2 right-1/4 animate-bounce"></div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center mt-20 px-4 animate-fadeIn">
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-blue-300 text-transparent bg-clip-text animate-gradient">
            Payroll Management System
          </h2>

          <p className="max-w-2xl text-gray-300 mb-10 text-lg animate-slideUp delay-200">
            A complete solution to automate salary processing, manage employee data, track attendance,
            and generate payslips effortlessly.
          </p>

          {/* Buttons (Learn More removed) */}
          <div className="flex gap-4 animate-slideUp delay-300">
            <Link
              to="/dashboard"
              className="
                bg-gradient-to-r from-indigo-600 to-indigo-700 
                px-8 py-3 rounded-xl font-semibold 
                hover:scale-105 transition-all duration-300 
                shadow-lg shadow-indigo-600/40
              "
            >
              Go to Dashboard
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-10 px-10 pb-20">
          
          {/* Feature Card 1 */}
          <div className="
            bg-white/10 backdrop-blur-lg 
            p-8 rounded-2xl shadow-xl 
            border border-white/20 
            hover:scale-105 hover:shadow-2xl 
            hover:bg-white/20 hover:border-purple-300 
            transition-all duration-300 animate-fadeIn
          ">
            <h3 className="font-bold text-2xl mb-3">Employees</h3>
            <p className="text-gray-200">
              Manage employee profiles, departments, and HR-related data.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="
            bg-white/10 backdrop-blur-lg 
            p-8 rounded-2xl shadow-xl 
            border border-white/20 
            hover:scale-105 hover:shadow-2xl 
            hover:bg-white/20 hover:border-green-300 
            transition-all duration-300 animate-fadeIn delay-200
          ">
            <h3 className="font-bold text-2xl mb-3">Payroll</h3>
            <p className="text-gray-200">
              Generate accurate monthly payroll in a single click.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="
            bg-white/10 backdrop-blur-lg 
            p-8 rounded-2xl shadow-xl 
            border border-white/20 
            hover:scale-105 hover:shadow-2xl 
            hover:bg-white/20 hover:border-pink-300 
            transition-all duration-300 animate-fadeIn delay-300
          ">
            <h3 className="font-bold text-2xl mb-3">Security</h3>
            <p className="text-gray-200">
              Role-based secure authentication & protected data operations.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 py-6 border-t border-white/20 animate-fadeIn delay-500">
          © 2025 Payroll Management System | Designed with ❤️
        </footer>
      </div>
    </div>
  );
}
