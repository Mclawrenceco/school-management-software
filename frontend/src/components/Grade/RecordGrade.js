import React, { useState } from 'react';
import api from '../../api';

const RecordGrade = () => {
  const [grade, setGrade] = useState({ studentId: '', subject: '', grade: '' });

  const handleChange = (e) => {
    setGrade({ ...grade, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/grades', grade);
      alert('Grade recorded successfully');
      setGrade({ studentId: '', subject: '', grade: '' });
    } catch (error) {
      alert('Failed to record grade');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Record Grade</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={grade.studentId}
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
            value={grade.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Grade</label>
          <input
            type="text"
            name="grade"
            value={grade.grade}
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

export default RecordGrade;
