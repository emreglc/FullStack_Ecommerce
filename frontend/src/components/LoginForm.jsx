/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const LoginForm = ({ onToggleForm, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={(e) => onSubmit(e, email, password)}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border rounded-md py-2 px-3"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full border rounded-md py-2 px-3"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md">
                    Login
                </button>
            </form>

            <hr className="my-8" />

            <p>
                Don't have an account?
                <span className="text-blue-500 cursor-pointer ml-2" onClick={onToggleForm}>
                    Sign Up here
                </span>
            </p>
        </div>
    );
};

export default LoginForm;