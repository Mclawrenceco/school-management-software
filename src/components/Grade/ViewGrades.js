import React, { useState, useEffect } from 'react';
import api from '../../api';

const ViewGrades = () => {
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        const fetchGrades = async () => {
            const res = await api.get('/grades');
            setGrades(res.data);
        };

        fetchGrades();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Grade Records</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Student</th>
                        <th className="border p-2">Subject</th>
                        <th className="border p-2">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((record) => (
                        <tr key={record.id}>
                            <td className="border p-2">{record.studentName}</td>
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
