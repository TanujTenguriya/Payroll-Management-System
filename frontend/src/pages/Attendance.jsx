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
      <h2 className="text-xl font-bold mb-4">Attendance</h2>

      <div className="bg-white p-6 shadow rounded max-w-md grid gap-4">

        <div>
          <label className="font-semibold">Employee Email</label>
          <input
            type="email"
            name="employee"
            placeholder="employee@gmail.com"
            className="border p-2 rounded w-full"
            value={form.employee}
            onChange={change}
          />
        </div>

        <div>
          <label className="font-semibold">Month</label>
          <input
            type="month"
            name="month"
            className="border p-2 rounded w-full"
            value={form.month}
            onChange={change}
          />
        </div>

        <div>
          <label className="font-semibold">Working Days</label>
          <input
            type="number"
            name="workingDays"
            placeholder="30"
            className="border p-2 rounded w-full"
            value={form.workingDays}
            onChange={change}
          />
        </div>

        <div>
          <label className="font-semibold">Present Days</label>
          <input
            type="number"
            name="presentDays"
            placeholder="26"
            className="border p-2 rounded w-full"
            value={form.presentDays}
            onChange={change}
          />
        </div>

        <button
          onClick={submit}
          className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
        >
          Save Attendance
        </button>

      </div>
    </Layout>
  );
}
