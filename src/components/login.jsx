import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
    // Get the history object using useHistory hook
    const navigate = useNavigate()
    console.log(window.location.href);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setIsButtonDisabled(e.target.value === '' || password === '');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsButtonDisabled(username === '' || e.target.value === '');
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Username:', username);
        console.log('Password:', password);

        const ab= {
            username,
            password
        };

        
        console.log(ab)

        const response = await axios.get(`http://localhost:8080/api/auth/signin`);

        if (response.ok) {
            console.log(response);
            navigate('/');
        } else {
            console.error('Failed to login');
        }

    };

    const handleSubmitAgent = async(e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Username:', username);
        console.log('Password:', password);

        const ab= {
            username,
            password
        };

        
        console.log(ab)

        const response = await axios.get(`http://localhost:8080/api/auth/signin`);

        if (response.ok) {
            console.log(response);
            navigate('/grp_details');
        } else {
            console.error('Failed to register');
        }

    };

    const handleRegisterUser = () => {
        // Navigate to the user registration page
       
        navigate('/register_user')
    };

    const handleRegisterAgent = () => {
        // Navigate to the agent registration page
        navigate('/register_agent')
    };

    return (
        <div className="min-h-screen  flex justify-center items-center bg-slate-400">
            <div className="bg-white p-8 rounded shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <h2 className="text-2xl mb-4 text-center">Login</h2>
                <form>
                    <div className="mb-4 shadow-lg">
                        <label htmlFor="username" className="block mb-2 ">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="border border-gray-300 rounded px-4 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border border-gray-300 rounded px-4 py-2 w-full"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
  <button className="text-sm text-gray-600 bg-transparent border border-gray-600 px-4 py-2 rounded hover:bg-gray-600 hover:text-white" onClick={handleSubmit}>Member login</button>
  <button className="text-sm text-gray-600 bg-transparent border border-gray-600 px-4 py-2 rounded hover:bg-gray-600 hover:text-white" onClick={handleSubmitAgent}>Agent Login</button>
</div>

                </form>
                <div className="mt-4 flex justify-between">
                    <button className="text-sm text-gray-600 hover:underline" onClick={handleRegisterUser}>Register Member</button>
                    <button className="text-sm text-gray-600 hover:underline" onClick={handleRegisterAgent}>Register Agent</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
