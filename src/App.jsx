// import React, { Children } from 'react';
//import GroupDetails from './components/grp_details.jsx'; // Import the GroupDetails component
// import RegistrationForm from './components/reg_grp.jsx'
// import MyComponent from './components/my_com.jsx'
// import NewUserForm from './components/my_com.jsx'
// import AgentRegistrationForm from './components/agent_creation.jsx'

// import ReactDOM from 'react-dom/client'


// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // const router = createBrowserRouter([
// //     {
// //       path:'/',
// //       element:<MyComponent/>,
// //      Children: [
// //     {
// //       path:'new_user',
// //       element:<NewUserForm/>
// //     }]
// // }
   
    
    



// function App() {
//    // Sample data for groups
//     const groups = [
//         {
//             groupName: 'Group 1',
//             startDate: '2022-01-01',
//             duration: 6,
//             monthlyRate: 1000,
//             agentRate: 200
//         },
//         {
//             groupName: 'Group 2',
//             startDate: '2022-02-01',
//             duration: 12,
//             monthlyRate: 1500,
//             agentRate: 250
//         },
//         {
//             groupName: 'Group 1',
//             startDate: '2022-01-01',
//             duration: 6,
//             monthlyRate: 1000,
//             agentRate: 200
//         },
//         {
//             groupName: 'Group 2',
//             startDate: '2022-02-01',
//             duration: 12,
//             monthlyRate: 1500,
//             agentRate: 250
//         }
//     ];

    // return (
    //     <div>
    //         {/* Render the GroupDetails component and pass the groups prop */}
    //         <GroupDetails groups={groups} />
    //     </div>
    // );


    
    // return(
    //     <div className="">
    //     <RouterProvider router={router}/>
        
    //   </div>
//     );
// }

// export default App;
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

// import HomePage from './components/home.jsx';
import Home from './components/m.jsx'
import NewUserForm from './components/my_com.jsx'; 
import AgentRegistrationForm from './components/agent_creation.jsx';
import LoginForm from './components/login.jsx';
import GroupDetails from './components/grp_details.jsx'
import groups from './api/grp_details.json'
import agents from './api/agents.json'
import RegistrationForm from './components/reg_grp.jsx'
import AuctionDetails from './components/Auction_details.jsx';
import PersonDetails from './components/person.jsx'
import persons from './api/person.json'


const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginForm/>
    },
    {
        path:'/register_user',
        element:<NewUserForm/>
    },
    {
        path:'/register_agent',
        element:<AgentRegistrationForm/>
    },
    {
        path:'/reg_grp',
        element:<RegistrationForm/>
    },
    {
        path:'/grp_details',
        element:<GroupDetails groups={groups}/>
    },
    {
        path:'/auc_details',
        element:<AuctionDetails agents={agents}/>
    },
    {
        path:'/usr_details',
        element:<PersonDetails persons={persons}/>
    },
    {
        path:'/bid_details',
        element:<AuctionDetails agents={agents}/>
    },
    
]
)
function App() {
    
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;



// import React from 'react';

// function App() {
//   return (
//     <div className="flex">
//       <div className="w-64bg-gradient-to-r from-blue-100 to-purple-100 bg-opacity-25 text-white h-screen fixed top-0 left-0">
//         <ul className="p-4">
//           <li className="py-2">Menu Item 1</li>
//           <li className="py-2">Menu Item 2</li>
//           <li className="py-2">Menu Item 3</li>
//           <li className="py-2">Menu Item 4</li>
//         </ul>
//       </div>
//       <div className="ml-64 w-full">
//         <div className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full z-10">
//           <h1 className="text-center">Your Website</h1>
//         </div>
//         <div className="ml-64 mt-16 p-4">
//           <h2>Main Content Area</h2>
//           <p>This is where your main content will go.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
