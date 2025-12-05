import { useState } from "react";
import Layout from "../components/Layout";
import api from "../api/axios";

export default function Payroll() {
  const [month, setMonth] = useState("");
  const [payrolls, setPayrolls] = useState([]);

  const generate = async () => {
    if (!month) return alert("Select a month");

    try {
      const res = await api.post(`/payroll/generate/${month}`);
      setPayrolls(res.data.result || []);
      alert(`Payroll generated for ${res.data.count} employee(s)`);
    } catch (err) {
      alert(err?.response?.data?.message || "Payroll generation failed");
    }
  };

  return (
    <Layout>
      <h2 className="text-xl font-bold mb-4">Generate Payroll</h2>

      <div className="bg-white p-6 shadow rounded max-w-lg mb-6">
        <input
          type="month"
          className="border p-2 w-full rounded mb-3"
          value={month}
          onChange={e => setMonth(e.target.value)}
        />

        <button
          onClick={generate}
          className="bg-green-600 hover:bg-green-700 text-white p-2 w-full rounded"
        >
          Generate Payroll
        </button>
      </div>

      {payrolls.length > 0 && (
        <div className="bg-white p-6 shadow rounded max-w-3xl">
          <h3 className="font-semibold mb-3">Generated Payroll</h3>

          <table className="w-full">
            <thead className="bg-slate-200">
              <tr>
                <th className="p-2 text-left">Employee</th>
                <th>Month</th>
                <th>Gross</th>
                <th>Deductions</th>
                <th>Net Salary</th>
              </tr>
            </thead>
            <tbody>
              {payrolls.map(p => (
                <tr key={p._id} className="border-t">
                  <td className="p-2">{p.employee?.name || "N/A"}</td>
                  <td>{p.month}</td>
                  <td>₹{p.grossSalary}</td>
                  <td>₹{p.deductions}</td>
                  <td className="font-semibold text-green-600">₹{p.netSalary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </Layout>
  );
}
