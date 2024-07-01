import React, { useState, useEffect } from 'react';
import api from '../../api';

const ViewAttendance = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        const fetchAttendance = async () => {
            const res = await api.get('/attendance');
            setAttendance(res.data);
        };

        fetchAttendance();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Attendance Records</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Student</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((record) => (
                        <tr key={record.id}>
                            <td className="border p-2">{record.studentName}</td>
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
