import React, { useState, useEffect } from 'react';
import api from '../../api';

const RecordGrade = () => {
    const [students, setStudents] = useState([]);
    const [grades, setGrades] = useState({});

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await api.get('/students');
            setStudents(res.data);
        };

        fetchStudents();
    }, []);

    const handleGradeChange = (studentId, grade) => {
        setGrades({
            ...grades,
            [studentId]: grade,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/grades', { grades });
            alert('Grades recorded successfully');
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Record Grades</h1>
            <form onSubmit={handleSubmit}>
                {students.map((student) => (
                    <div key={student.id} className="mb-2">
                        <span>{student.name}</span>
                        <input
                            type="text"
                            value={grades[student.id] || ''}
                            onChange={(e) => handleGradeChange(student.id, e.target.value)}
                            className="ml-4 p-1 border rounded"
                        />
                    </div>
                ))}
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RecordGrade;
