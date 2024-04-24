// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';


function RegistrationForm() {
    const [duration, setDuration] = useState(1);
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [monthlyInvestment, setMonthlyInvestment] = useState('');
    const [minBid, setMinBid] = useState('');
    const [maxBid, setMaxBid] = useState('');
    const [agentCommission, setAgentCommission] = useState('');

    const handleDurationChange = (e) => {
        const count = parseInt(e.target.value);
        setDuration(count);
    };
    const [selectedItems, setSelectedItems] = useState([]);
    
    const items = ["John", "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Isabella"];

    useEffect(() => {
        console.log(selectedItems);
    }, [selectedItems]);

    const handleChange = (e) => {
        setSelectedItems(Array.from(e.target.selectedOptions, option => option.value));
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        const formData = {
            name,
            startDate,
            monthlyInvestment,
            minBid,
            maxBid,
            agentCommission,
            duration,
            selectedItems,
        };
        console.log(formData);
    };

    return (


        <div className="grid grid-cols-3">
            <div className="col-span-2 bg-gray-100 min-h-screen flex justify-center items-center overflow-hidden">
                <div className="bg-white p-8 rounded shadow-md w-auto m-4 overflow-y-auto h-[35rem] w-full">
                <h2 className="text-2xl mb-4">Group Registration Form</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border border-gray-300 rounded px-4 py-2 w-full"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="startDate" className="block mb-2 text-sm">Start Date:</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="border border-gray-300 rounded px-4 py-2 w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="monthlyInvestment" className="block mb-2 text-sm">Monthly Investment:</label>
                            <input
                                type="number"
                                id="monthlyInvestment"
                                name="monthlyInvestment"
                                min="0"
                                step="0.01"
                                value={monthlyInvestment}
                                onChange={(e) => setMonthlyInvestment(e.target.value)}
                                className="border border-gray-300 rounded px-4 py-2 w-full"
                                placeholder="Enter monthly investment amount"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="minBid" className="block mb-2 text-sm">Minimum Bid:</label>
                            <input
                                type="number"
                                id="minBid"
                                name="minBid"
                                min="0"
                                step="0.01"
                                value={minBid}
                                onChange={(e) => setMinBid(e.target.value)}
                                className="border border-gray-300 rounded px-4 py-2 w-full"
                                placeholder="Enter minimum bid amount"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="maxBid" className="block mb-2 text-sm">Maximum Bid:</label>
                            <input
                                type="number"
                                id="maxBid"
                                name="maxBid"
                                min="0"
                                step="0.01"
                                value={maxBid}
                                onChange={(e) => setMaxBid(e.target.value)}
                                className="border border-gray-300 rounded px-4 py-2 w-full"
                                placeholder="Enter maximum bid amount"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="agentCommission" className="block mb-2 text-sm">Agent Commission (%):</label>
                            <input
                                type="number"
                                id="agentCommission"
                                name="agentCommission"
                                min="0"
                                step="0.01"
                                value={agentCommission}
                                onChange={(e) => setAgentCommission(e.target.value)}
                                className="border border-gray-300 rounded px-4 py-2 w-full"
                                placeholder="Enter agent commission percentage"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="duration" className="block mb-2 text-sm">Duration (Number of Users):</label>
                            <input
                                type="number"
                                id="duration"
                                name="duration"
                                min="1"
                                value={duration}
                                onChange={handleDurationChange}
                                className="border border-gray-300 rounded px-4 py-2 w-full"
                                placeholder="Enter duration"
                            />
                        </div>

                        <div className="col-span-2">
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
                        </div>               
                     </form>
                </div>
            </div>
            <div className="bg-gray-100 flex items-center justify-center flex-col pb-30">
      
            <h2 className="text-2xl mb-2">Select member</h2>
               <select
                   id="selectedItems"
                   name="selectedItems"
                multiple
                 value={selectedItems}
                 onChange={handleChange}
                 size={15}
                className="w-40 border border-gray-300 rounded px-4 py-2 mb-4 overflow-y-auto flex justify-center items-center"
            >
             {items.map((item, index) => (
                   <option key={index} value={item}>{item}</option>
               ))}
            </select>
    
        </div>
    </div> 
        
    );
}

export default RegistrationForm;
