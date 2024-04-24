import React from 'react';
import PropTypes from 'prop-types';

const Transactions = ({ transactions }) => {
  return (
    <div className="container mx-auto mt-5 flex justify-center bg-slate-200">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-4"> {/* Adjusted width and added horizontal padding */}
        <h2 className="text-center text-2xl font-bold">Transaction Details</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-auto sm:w-full border-collapse border border-gray-800 mt-4">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Group Name</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Sender</th>
                <th className="px-4 py-2">Receiver</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <tr key={index} className="bg-gray-100">
                    <td className="border px-4 py-2">{transaction.groupName}</td>
                    <td className="border px-4 py-2">{transaction.amount}</td>
                    <td className="border px-4 py-2">{transaction.sender}</td>
                    <td className="border px-4 py-2">{transaction.receiver}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border px-4 py-2 text-center" colSpan="4">No transactions available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      receiver: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Transactions;
