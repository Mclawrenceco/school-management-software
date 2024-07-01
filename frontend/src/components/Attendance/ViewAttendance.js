import React, { useState, useEffect } from 'react';
import api from '../../api';

const ViewAttendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await api.get('/attendance');
        setAttendanceRecords(res.data);
      } catch (error) {
        alert('Failed to fetch attendance records');
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance Records</h1>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr>
            <th className="border p-2">Student ID</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map(record => (
            <tr key={record._id}>
              <td className="border p-2">{record.studentId}</td>
              <td className="border p-2">{record.date}</td>
              <td className="border p-2">{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAttendance;
