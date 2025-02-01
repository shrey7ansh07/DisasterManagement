import React, { StrictMode,useEffect,useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Profile from './components/DashboardComponents/Profile.jsx'
import Home from './components/DashboardComponents/Home.jsx'
import Alert from './components/DashboardComponents/Alert.jsx'
import Setting from './components/DashboardComponents/Setting.jsx'
import Adminboard from './components/DashboardComponents/Adminboard.jsx'
import { Navigate } from 'react-router'




const Main = () => {
  
  const [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem("user") ? true : false)


  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/user/home" /> : <Login />} />
          <Route path='/Signup' element={<Signup />} />
          {
          isAuthenticated ? 
                  <Route path="/user" element={<Layout />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="home" element={<Home />} />
                    <Route path="notification" element={<Alert />} />
                    <Route path="settings" element={<Setting />} />
                    <Route path="adminboard" element={<Adminboard />} />
                  </Route>:(<Route path="*" element={<Navigate to="/" />} />)
          }
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);
