import React from 'react';
import { Link } from 'react-router-dom';



function HomePage() {
    return (
        
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 bg-opacity-25">
                <div className="max-w-md w-96 space-y-8 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
                    <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">Select Login</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <Link to="/agent_login" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full ml-4 mr-4 focus:outline-none focus:shadow-outline block text-center">
                            Agent Login
                        </Link>
                        <Link to="/user_login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 ml-4 mr-4 rounded-full focus:outline-none focus:shadow-outline block text-center">
                            User Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    
}

export default HomePage;
