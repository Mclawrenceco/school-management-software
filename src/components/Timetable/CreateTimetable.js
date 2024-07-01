import React, { useState } from 'react';
import api from '../../api';

const CreateTimetable = () => {
    const [timetable, setTimetable] = useState({
        day: '',
        subject: '',
        startTime: '',
        endTime: '',
    });

    const handleChange = (e) => {
        setTimetable({
            ...timetable,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/timetables', timetable);
            alert('Timetable created successfully');
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Create Timetable</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Day</label>
                    <input
                        type="text"
                        name="day"
                        value={timetable.day}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
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
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Start Time</label>
                    <input
                        type="time"
                        name="startTime"
                        value={timetable.startTime}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">End Time</label>
                    <input
                        type="time"
                        name="endTime"
                        value={timetable.endTime}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateTimetable;
