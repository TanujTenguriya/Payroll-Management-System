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
      <h2 className="text-xl font-bold mb-5">Salary Structure</h2>

      <div className="bg-white p-6 shadow rounded max-w-md grid gap-4">

        <label className="text-sm font-semibold">Employee Email</label>
        <input
          type="email"
          name="employee"
          className="border p-2 rounded w-full"
          placeholder="employee@gmail.com"
          value={form.employee}
          onChange={change}
        />

        <div>
          <label className="text-sm font-semibold">Basic Salary</label>
          <input
            type="number"
            name="basic"
            className="border p-2 rounded w-full"
            placeholder="30000"
            value={form.basic}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">House Rent Allowance (HRA)</label>
          <input
            type="number"
            name="hra"
            className="border p-2 rounded w-full"
            placeholder="8000"
            value={form.hra}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Dearness Allowance (DA)</label>
          <input
            type="number"
            name="da"
            className="border p-2 rounded w-full"
            placeholder="3000"
            value={form.da}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Other Allowances</label>
          <input
            type="number"
            name="otherAllowances"
            className="border p-2 rounded w-full"
            placeholder="2000"
            value={form.otherAllowances}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">PF Deduction (%)</label>
          <input
            type="number"
            name="pfRate"
            className="border p-2 rounded w-full"
            placeholder="12"
            value={form.pfRate}
            onChange={change}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Tax (%)</label>
          <input
            type="number"
            name="taxRate"
            className="border p-2 rounded w-full"
            placeholder="5"
            value={form.taxRate}
            onChange={change}
          />
        </div>

        <button
          onClick={submit}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Save Salary
        </button>
      </div>
    </Layout>
  );
}
