import React, { useState, useEffect } from 'react';
import api from '../../api';

const ViewGrades = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const res = await api.get('/grades');
        setGrades(res.data);
      } catch (error) {
        alert('Failed to fetch grades');
      }
    };

    fetchGrades();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Grades</h1>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr>
            <th className="border p-2">Student ID</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(record => (
            <tr key={record._id}>
              <td className="border p-2">{record.studentId}</td>
              <td className="border p-2">{record.subject}</td>
              <td className="border p-2">{record.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewGrades;
