import React, { useState, useEffect } from 'react';
import api from '../../api';

const ViewTimetables = () => {
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    const fetchTimetables = async () => {
      try {
        const res = await api.get('/timetable');
        setTimetables(res.data);
      } catch (error) {
        alert('Failed to fetch timetables');
      }
    };

    fetchTimetables();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Timetables</h1>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr>
            <th className="border p-2">Class</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {timetables.map(record => (
            <tr key={record._id}>
              <td className="border p-2">{record.class}</td>
              <td className="border p-2">{record.subject}</td>
              <td className="border p-2">{record.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTimetables;
