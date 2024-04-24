import React from 'react';
import { Navigate } from 'react-router-dom';

const GroupDetails = ({ groups }) => {
  const handleLogout = () => {
    // Handle logout functionality here
    Navigate('/')
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl font-bold">Your Logo</div>
          {/* Logout Button */}
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </nav>
      
      {/* Main content */}
      <div className="container mx-auto mt-5 flex justify-center">
        <div className="w-full">
          <h2 className="text-center text-2xl font-bold">Group Details</h2>
          <table className="table-auto w-full border-collapse border border-gray-800 mt-4">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Group Name</th>
                <th className="px-4 py-2">Numbers</th>
                <th className="px-4 py-2">Chit Value</th>
                <th className="px-4 py-2">Number of Months</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groups.length > 0 ? (
                groups.map((group, index) => (
                  <tr key={index} className="bg-gray-100">
                    <td className="border px-4 py-2">{group.groupName}</td>
                    <td className="border px-4 py-2">{group.numbers}</td>
                    <td className="border px-4 py-2">{group.chitValue}</td>
                    <td className="border px-4 py-2">{group.numberOfMonths}</td>
                    <td className="border px-4 py-2">{group.startDate}</td>
                    <td className="border px-4 py-2">
                      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">View</button>
                      <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border px-4 py-2 text-center" colSpan="6">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="text-center mt-3">
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Add Group</button>
            <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Refresh</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
