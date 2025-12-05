import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-800 text-white">

      {/* Floating Animated Blobs */}
      <div className="absolute w-96 h-96 bg-purple-500 opacity-30 blur-[120px] top-10 left-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-blue-500 opacity-20 blur-[100px] bottom-10 right-10 animate-ping"></div>
      <div className="absolute w-72 h-72 bg-pink-500 opacity-20 blur-[100px] top-1/2 right-1/3 animate-bounce"></div>

      {/* MAIN LAYOUT WRAPPER */}
      <div className="relative z-10 flex min-h-screen">

        {/* Sidebar on the left */}
        <Sidebar />

        {/* Right Side Content (Navbar + Page Content) */}
        <div className="flex flex-col w-full">

          {/* Navbar stays visible */}
          <Navbar />

          {/* Animated Page Area */}
          <main className="p-6 flex-1 animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-md shadow-xl border border-white/20 rounded-xl p-6 min-h-[80vh] transition-all duration-300">
              {children}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
