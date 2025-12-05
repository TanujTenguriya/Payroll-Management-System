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
      {/* Title */}
      <h2
        className="
          text-3xl font-extrabold mb-6 
          bg-gradient-to-r from-purple-300 to-blue-300 
          text-transparent bg-clip-text
        "
      >
        Generate Payroll
      </h2>

      {/* Payroll Input Card */}
      <div
        className="
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          shadow-xl rounded-xl 
          p-6 max-w-lg mb-10 
          animate-fadeIn
        "
      >
        <input
          type="month"
          className="
            glass-input mb-4
          "
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />

        <button
          onClick={generate}
          className="
            w-full py-3 
            bg-gradient-to-r from-green-500 to-green-600 
            hover:opacity-90 hover:scale-105 
            text-white font-semibold rounded-lg 
            shadow-lg shadow-green-500/30
            transition-all duration-300
          "
        >
          Generate Payroll
        </button>
      </div>

      {/* Payroll Table */}
      {payrolls.length > 0 && (
        <div
          className="
            bg-white/10 backdrop-blur-xl 
            border border-white/20 
            shadow-xl rounded-xl 
            p-6 max-w-4xl 
            animate-fadeIn
          "
        >
          <h3 className="text-xl font-bold text-purple-200 mb-4">
            Generated Payroll
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead className="bg-white/10 border-b border-white/20">
                <tr>
                  <th className="table-header">Employee</th>
                  <th className="table-header">Month</th>
                  <th className="table-header">Gross</th>
                  <th className="table-header">Deductions</th>
                  <th className="table-header">Net Salary</th>
                </tr>
              </thead>

              <tbody>
                {payrolls.map((p) => (
                  <tr
                    key={p._id}
                    className="
                      border-t border-white/10 
                      hover:bg-white/10 
                      transition-all text-center
                    "
                  >
                    <td className="table-cell">{p.employee?.name || "N/A"}</td>
                    <td className="table-cell">{p.month}</td>
                    <td className="table-cell">₹{p.grossSalary}</td>
                    <td className="table-cell">₹{p.deductions}</td>
                    <td className="table-cell font-semibold text-green-300">
                      ₹{p.netSalary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
}
