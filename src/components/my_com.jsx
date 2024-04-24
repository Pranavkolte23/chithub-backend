import { useState } from 'react';
import axios from 'axios';
//require('dotenv').config();

function NewUserForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        // Perform form validation
        const newErrors = {};
        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }
        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);

        // If there are no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
            // Add code here to handle form submission, such as making an API call
        }


        const response = await axios.post(`${BASE_URL}/todos`, formData);

        if (response.ok) {
            history.push('/');
        } else {
            console.error('Failed to register');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center bg-slate-200">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-2xl mb-4 text-center">New User Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                        />
                        {errors.username && <p className="text-red-500 mt-1">{errors.username}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                        />
                        {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                        />
                        {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword}</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default NewUserForm;
