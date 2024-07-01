import React, { useState } from 'react';
import api from '../../api';

const CreateTimetable = () => {
  const [timetable, setTimetable] = useState({ class: '', subject: '', time: '' });

  const handleChange = (e) => {
    setTimetable({ ...timetable, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/timetable', timetable);
      alert('Timetable created successfully');
      setTimetable({ class: '', subject: '', time: '' });
    } catch (error) {
      alert('Failed to create timetable');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Create Timetable</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Class</label>
          <input
            type="text"
            name="class"
            value={timetable.class}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={timetable.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={timetable.time}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default CreateTimetable;
