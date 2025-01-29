import React, { StrictMode,useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Profile from './components/DashboardComponents/Profile.jsx'
import Home from './components/DashboardComponents/Home.jsx'
import Alert from './components/DashboardComponents/Alert.jsx'
import Setting from './components/DashboardComponents/Setting.jsx'
import Adminboard from './components/DashboardComponents/Adminboard.jsx'



const Main = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/Signup' element={<Signup />} />
          <Route path="/user" element={<Layout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="home" element={<Home />} />
            <Route path="notification" element={<Alert />} />
            <Route path="settings" element={<Setting />} />
            <Route path="adminboard" element={<Adminboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);
