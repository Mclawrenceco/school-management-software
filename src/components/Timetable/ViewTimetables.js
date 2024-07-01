import React, { useState, useEffect } from 'react';
import api from '../../api';

const ViewTimetables = () => {
    const [timetables, setTimetables] = useState([]);

    useEffect(() => {
        const fetchTimetables = async () => {
            const res = await api.get('/timetables');
            setTimetables(res.data);
        };

        fetchTimetables();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Timetables</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Day</th>
                        <th className="border p-2">Subject</th>
                        <th className="border p-2">Start Time</th>
                        <th className="border p-2">End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {timetables.map((record) => (
                        <tr key={record.id}>
                            <td className="border p-2">{record.day}</td>
                            <td className="border p-2">{record.subject}</td>
                            <td className="border p-2">{record.startTime}</td>
                            <td className="border p-2">{record.endTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTimetables;
