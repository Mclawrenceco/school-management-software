import React, { useState } from 'react';
import api from '../../api';

const UploadResource = () => {
    const [resource, setResource] = useState({
        title: '',
        description: '',
        file: null,
    });

    const handleChange = (e) => {
        setResource({
            ...resource,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setResource({
            ...resource,
            file: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', resource.title);
        formData.append('description', resource.description);
        formData.append('file', resource.file);

        try {
            await api.post('/resources', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Resource uploaded successfully');
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Upload Resource</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={resource.title}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={resource.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">File</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
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

export default UploadResource;
