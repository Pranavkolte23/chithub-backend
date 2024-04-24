import React from 'react';

const AuctionDetails = ({ agents }) => {
  return (
    <div className="container mx-auto mt-10 px-4 flex justify-center bg-slate-200">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-3/4 lg:w-2/3">
        <h2 className="text-center text-2xl font-semibold py-4 bg-gray-800 text-white">Auction Details</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Auction</th>
                <th className="py-3 px-6 text-left">Start Time</th>
                <th className="py-3 px-6 text-left">End Time</th>
                <th className="py-3 px-6 text-left">Winning Bids</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {agents.map(agent => (
                <tr key={agent.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{agent.name}</td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">{agent.startTime}</td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">{agent.endTime}</td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">${agent.winningBids}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetails;
