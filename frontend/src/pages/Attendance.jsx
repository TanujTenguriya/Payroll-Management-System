import { useState } from "react";
import Layout from "../components/Layout";
import api from "../api/axios";

export default function Attendance() {
  const [form, setForm] = useState({
    employee: "",
    month: "",
    workingDays: "",
    presentDays: ""
  });

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      await api.post("/attendance", form);
      alert("✅ Attendance saved successfully");
      setForm({
        employee: "",
        month: "",
        workingDays: "",
        presentDays: ""
      });
    } catch (err) {
      alert(err?.response?.data?.message || "❌ Failed to save attendance");
    }
  };

  return (
    <Layout>
      <h2
        className="
          text-3xl font-extrabold mb-6 
          bg-gradient-to-r from-purple-300 to-blue-300 
          text-transparent bg-clip-text
        "
      >
        Attendance
      </h2>

      <div
        className="
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          shadow-xl rounded-2xl 
          p-8 max-w-md 
          grid gap-5 
          animate-fadeIn
        "
      >
        {/* Employee Email */}
        <div>
          <label className="font-semibold text-white/90">Employee Email</label>
          <input
            type="email"
            name="employee"
            placeholder="employee@gmail.com"
            className="
              w-full p-3 rounded-lg bg-white/20 text-white 
              border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-purple-400 
              transition-all
            "
            value={form.employee}
            onChange={change}
          />
        </div>

        {/* Month */}
        <div>
          <label className="font-semibold text-white/90">Month</label>
          <input
            type="month"
            name="month"
            className="
              w-full p-3 rounded-lg bg-white/20 text-white 
              border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-purple-400 
              transition-all
            "
            value={form.month}
            onChange={change}
          />
        </div>

        {/* Working Days */}
        <div>
          <label className="font-semibold text-white/90">Working Days</label>
          <input
            type="number"
            name="workingDays"
            placeholder="30"
            className="
              w-full p-3 rounded-lg bg-white/20 text-white 
              border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-purple-400 
              transition-all
            "
            value={form.workingDays}
            onChange={change}
          />
        </div>

        {/* Present Days */}
        <div>
          <label className="font-semibold text-white/90">Present Days</label>
          <input
            type="number"
            name="presentDays"
            placeholder="26"
            className="
              w-full p-3 rounded-lg bg-white/20 text-white 
              border border-white/30 
              focus:outline-none focus:ring-2 focus:ring-purple-400 
              transition-all
            "
            value={form.presentDays}
            onChange={change}
          />
        </div>

        {/* Save Button */}
        <button
          onClick={submit}
          className="
            bg-gradient-to-r from-purple-500 to-indigo-600 
            text-white font-semibold py-3 rounded-lg 
            hover:opacity-90 hover:scale-105 
            transition-all duration-300 
            shadow-lg shadow-purple-500/30
          "
        >
          Save Attendance
        </button>
      </div>
    </Layout>
  );
}
