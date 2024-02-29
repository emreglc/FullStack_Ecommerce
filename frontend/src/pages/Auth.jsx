import React, { useState } from 'react'
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(true);

    const handleFormToggle = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-200 p-8 rounded shadow-md w-96">
                {isSignup ? (
                    <SignupForm onToggleForm={handleFormToggle} />
                ) : (
                    <LoginForm onToggleForm={handleFormToggle} />
                )}
            </div>
        </div>
    );
}
