import { useState } from "react";
import Layout from "../components/Layout";
import api from "../api/axios";

export default function Salary() {
  const [form, setForm] = useState({
    employee: "",
    basic: "",
    hra: "",
    da: "",
    otherAllowances: "",
    pfRate: "",
    taxRate: ""
  });

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      await api.post("/salary", form);
      alert("Salary Saved Successfully");
      setForm({
        employee: "",
        basic: "",
        hra: "",
        da: "",
        otherAllowances: "",
        pfRate: "",
        taxRate: ""
      });
    } catch (err) {
      alert(err?.response?.data?.message || "Error saving salary");
    }
  };

  return (
    <Layout>
      {/* Title */}
      <h2
        className="
          text-3xl font-extrabold mb-6 
          bg-gradient-to-r from-purple-300 to-blue-300 
          text-transparent bg-clip-text
        "
      >
        Salary Structure
      </h2>

      {/* Glassmorphic Form */}
      <div
        className="
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          shadow-xl rounded-xl p-8 max-w-lg 
          grid gap-5 animate-fadeIn
        "
      >
        <div>
          <label className="text-sm font-semibold text-white/80">Employee Email</label>
          <input
            type="email"
            name="employee"
            className="glass-input mt-1"
            placeholder="employee@gmail.com"
            value={form.employee}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-white/80">Basic Salary</label>
          <input
            type="number"
            name="basic"
            className="glass-input mt-1"
            placeholder="30000"
            value={form.basic}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-white/80">
            House Rent Allowance (HRA)
          </label>
          <input
            type="number"
            name="hra"
            className="glass-input mt-1"
            placeholder="8000"
            value={form.hra}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-white/80">
            Dearness Allowance (DA)
          </label>
          <input
            type="number"
            name="da"
            className="glass-input mt-1"
            placeholder="3000"
            value={form.da}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-white/80">Other Allowances</label>
          <input
            type="number"
            name="otherAllowances"
            className="glass-input mt-1"
            placeholder="2000"
            value={form.otherAllowances}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-white/80">PF Deduction (%)</label>
          <input
            type="number"
            name="pfRate"
            className="glass-input mt-1"
            placeholder="12"
            value={form.pfRate}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-white/80">Tax (%)</label>
          <input
            type="number"
            name="taxRate"
            className="glass-input mt-1"
            placeholder="5"
            value={form.taxRate}
            onChange={change}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={submit}
          className="
            w-full py-3 
            bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:scale-105 hover:opacity-90 
            text-white rounded-lg font-semibold 
            transition-all duration-300 
            shadow-lg shadow-blue-500/30
          "
        >
          Save Salary
        </button>
      </div>
    </Layout>
  );
}
