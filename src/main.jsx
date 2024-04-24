import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import App from './App'
import './index.css'
import Layout from './Layout'
import GroupDetails from './components/grp_details'
import Data from "./api/grp_details.json";
import PData from "./api/person.json"
import MemberDetails from './components/person'
import LoginForm from './components/login'
import AgentRegistrationForm from './components/agent_creation'
import App from './App'
import Loca from './loca'


const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
)
