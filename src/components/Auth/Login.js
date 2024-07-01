import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import { authState } from '../../store';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setAuth = useSetRecoilState(authState);
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password });
            setAuth({
                isAuthenticated: true,
                user: res.data.user,
                token: res.data.token,
            });
            history.push('/student-dashboard'); // Or redirect based on user role
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
