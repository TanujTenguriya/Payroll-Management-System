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
      <h2
        className="
          text-3xl font-extrabold mb-6 
          bg-gradient-to-r from-purple-300 to-blue-300 
          text-transparent bg-clip-text
        "
      >
        My Attendance
      </h2>

      {/* No Records */}
      {records.length === 0 ? (
        <p
          className="
            text-white/80 text-lg 
            bg-white/10 backdrop-blur-lg p-6 rounded-xl 
            border border-white/20 shadow-xl
            animate-fadeIn
          "
        >
          No attendance records found.
        </p>
      ) : (
        <div
          className="
            overflow-x-auto 
            bg-white/10 backdrop-blur-xl 
            border border-white/20 rounded-xl 
            shadow-xl animate-fadeIn
          "
        >
          <table className="w-full text-white">
            <thead className="bg-white/10 border-b border-white/20">
              <tr>
                <th className="table-header">Month</th>
                <th className="table-header">Working Days</th>
                <th className="table-header">Present</th>
                <th className="table-header">Absent</th>
              </tr>
            </thead>

            <tbody>
              {records.map((a) => (
                <tr
                  key={a._id}
                  className="
                    border-t border-white/10 
                    hover:bg-white/10 
                    transition-all text-center
                  "
                >
                  <td className="table-cell">{a.month}</td>
                  <td className="table-cell">{a.workingDays}</td>
                  <td className="table-cell">{a.presentDays}</td>
                  <td className="table-cell">{a.workingDays - a.presentDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}
