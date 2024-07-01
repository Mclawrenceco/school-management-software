import React, { useState, useEffect } from 'react';
import api from '../../api';

const ViewResources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            const res = await api.get('/resources');
            setResources(res.data);
        };

        fetchResources();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Resources</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">File</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map((resource) => (
                        <tr key={resource.id}>
                            <td className="border p-2">{resource.title}</td>
                            <td className="border p-2">{resource.description}</td>
                            <td className="border p-2">
                                <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                    View File
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewResources;
