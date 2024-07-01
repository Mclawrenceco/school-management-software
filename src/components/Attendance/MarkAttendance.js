import React, { useState, useEffect } from 'react';
import api from '../../api';

const MarkAttendance = () => {
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await api.get('/students');
            setStudents(res.data);
        };

        fetchStudents();
    }, []);

    const handleAttendanceChange = (studentId, status) => {
        setAttendance({
            ...attendance,
            [studentId]: status,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/attendance', { attendance });
            alert('Attendance marked successfully');
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Mark Attendance</h1>
            <form onSubmit={handleSubmit}>
                {students.map((student) => (
                    <div key={student.id} className="mb-2">
                        <span>{student.name}</span>
                        <select
                            value={attendance[student.id] || ''}
                            onChange={(e) => handleAttendanceChange(student.id, e.target.value)}
                            className="ml-4 p-1 border rounded"
                        >
                            <option value="">Select Status</option>
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                        </select>
                    </div>
                ))}
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MarkAttendance;
