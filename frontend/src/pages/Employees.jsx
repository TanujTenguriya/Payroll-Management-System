import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../api/axios";

export default function Employees() {

  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
    dateOfJoining: "",
    bankAccount: "",
    ifscCode: ""
  });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      await api.post("/employees", form);
      alert("Employee created");
      load();
      setForm({
        name: "",
        email: "",
        department: "",
        designation: "",
        dateOfJoining: "",
        bankAccount: "",
        ifscCode: ""
      });
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to add employee");
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
        Employees
      </h2>

      {/* Glass Add Employee Form */}
      <div
        className="
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          rounded-xl p-6 shadow-xl mb-10
          grid grid-cols-1 md:grid-cols-3 gap-4
          animate-fadeIn
        "
      >
        <input name="name" value={form.name} onChange={change} placeholder="Full Name"
          className="glass-input" />

        <input name="email" value={form.email} onChange={change} placeholder="User Email"
          className="glass-input" />

        <input name="department" value={form.department} onChange={change} placeholder="Department"
          className="glass-input" />

        <input name="designation" value={form.designation} onChange={change} placeholder="Designation"
          className="glass-input" />

        <input type="date" name="dateOfJoining" value={form.dateOfJoining} onChange={change}
          className="glass-input" />

        <input name="bankAccount" value={form.bankAccount} onChange={change} placeholder="Bank Account"
          className="glass-input" />

        <input name="ifscCode" value={form.ifscCode} onChange={change} placeholder="IFSC Code"
          className="glass-input" />

        <button
          onClick={submit}
          className="
            bg-gradient-to-r from-purple-500 to-indigo-600 text-white 
            py-3 rounded-xl font-semibold 
            hover:scale-105 hover:opacity-90 transition-all duration-300 
            shadow-lg shadow-purple-500/30 md:col-span-3
          "
        >
          Add Employee
        </button>
      </div>

      {/* Glass Table */}
      <div
        className="
          overflow-x-auto 
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          rounded-xl shadow-xl animate-fadeIn
        "
      >
        <table className="w-full text-white">
          <thead className="bg-white/10 border-b border-white/20">
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Department</th>
              <th className="table-header">Designation</th>
              <th className="table-header">Code</th>
            </tr>
          </thead>

          <tbody>
            {employees.map(emp => (
              <tr
                key={emp._id}
                className="
                  border-t border-white/10 
                  hover:bg-white/10 transition-all
                "
              >
                <td className="table-cell">{emp.name}</td>
                <td className="table-cell">{emp.department}</td>
                <td className="table-cell">{emp.designation}</td>
                <td className="table-cell">{emp.empCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
