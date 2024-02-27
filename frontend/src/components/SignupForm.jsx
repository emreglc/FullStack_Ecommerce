import React, { useState } from 'react';

const SignupForm = ({ onToggleForm, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={(e) => onSubmit(e, email, password)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border rounded-md py-2 px-3"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="surname" className="block text-gray-700 text-sm font-bold mb-2">
                        Surname
                    </label>
                    <input
                        type="text"
                        id="surname"
                        className="w-full border rounded-md py-2 px-3"
                        placeholder="Enter your surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    Sign Up
                </button>
            </form>

            <hr className="my-8" />

            <p>
                Already have an account?
                <span className="text-blue-500 cursor-pointer ml-2" onClick={onToggleForm}>
                    Login here
                </span>
            </p>
        </div>
    );
};

export default SignupForm;