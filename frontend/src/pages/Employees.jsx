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
      <h2 className="text-xl font-bold mb-4">Employees</h2>

      <div className="bg-white p-6 shadow rounded mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">

        <input name="name" value={form.name} onChange={change} placeholder="Full Name" className="border p-2 rounded" />
        <input name="email" value={form.email} onChange={change} placeholder="User Email" className="border p-2 rounded" />
        <input name="department" value={form.department} onChange={change} placeholder="Department" className="border p-2 rounded" />
        <input name="designation" value={form.designation} onChange={change} placeholder="Designation" className="border p-2 rounded" />
        <input type="date" name="dateOfJoining" value={form.dateOfJoining} onChange={change} className="border p-2 rounded" />
        <input name="bankAccount" value={form.bankAccount} onChange={change} placeholder="Bank Account" className="border p-2 rounded" />
        <input name="ifscCode" value={form.ifscCode} onChange={change} placeholder="IFSC Code" className="border p-2 rounded" />

        <button
          onClick={submit}
          className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 md:col-span-3"
        >
          Add Employee
        </button>

      </div>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-slate-200">
          <tr>
            <th className="p-2">Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp._id} className="border-t hover:bg-gray-100">
              <td className="p-2">{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>{emp.empCode}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </Layout>
  );
}
