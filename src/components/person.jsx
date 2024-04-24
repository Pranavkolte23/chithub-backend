import React from 'react';
import PropTypes from 'prop-types';

const PersonDetails = ({ persons }) => {
  return (
    <div className="container mx-auto mt-5 flex justify-center bg-slate-200">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-4"> {/* Adjusted width and added horizontal padding */}
        <h2 className="text-center text-2xl font-bold">Person Details</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-auto sm:w-full border-collapse border border-gray-800 mt-4">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Username</th>
              </tr>
            </thead>
            <tbody>
              {persons.length > 0 ? (
                persons.map((person, index) => (
                  <tr key={index} className="bg-gray-100">
                    <td className="border px-4 py-2">{person.name}</td>
                    <td className="border px-4 py-2">{person.phoneNo}</td>
                    <td className="border px-4 py-2">{person.username}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border px-4 py-2 text-center" colSpan="3">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

PersonDetails.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phoneNo: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  ).isRequired
};

export default PersonDetails;
