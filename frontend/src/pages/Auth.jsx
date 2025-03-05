import React, { useState } from 'react'
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleFormToggle = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex justify-center items-center mt-12">
            <div className="bg-gray-200 p-8 rounded shadow-md w-96">
                {isLogin ? (
                    <LoginForm onToggleForm={handleFormToggle} />
                ) : (
                    <SignupForm onToggleForm={handleFormToggle} />
                )}
            </div>
        </div>
    );
}
