import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../api/axios";

export default function MyAttendance() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get("/attendance/my");
        setRecords(res.data);
      } catch (err) {
        alert("Failed to load attendance");
      }
    }
    load();
  }, []);

  return (
    <Layout>
      <h2 className="text-xl font-bold mb-4">My Attendance</h2>

      {records.length === 0 ? (
        <p className="text-gray-500">No attendance records found.</p>
      ) : (
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Month</th>
              <th>Working Days</th>
              <th>Present</th>
              <th>Absent</th>
            </tr>
          </thead>
          <tbody>
            {records.map(a => (
              <tr key={a._id} className="border-t text-center">
                <td className="p-2">{a.month}</td>
                <td>{a.workingDays}</td>
                <td>{a.presentDays}</td>
                <td>{a.workingDays - a.presentDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
}
