import React, { useState } from 'react';
import api from '../../api';

const MarkAttendance = () => {
  const [attendance, setAttendance] = useState({ studentId: '', date: '', status: '' });

  const handleChange = (e) => {
    setAttendance({ ...attendance, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/attendance', attendance);
      alert('Attendance marked successfully');
      setAttendance({ studentId: '', date: '', status: '' });
    } catch (error) {
      alert('Failed to mark attendance');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Mark Attendance</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={attendance.studentId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={attendance.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            name="status"
            value={attendance.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default MarkAttendance;
