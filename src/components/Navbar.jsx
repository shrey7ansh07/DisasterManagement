import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { MdHome } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";

function Navbar() {

    const [isUser, setIsUser] = useState(true);
    const navStyle = "flex justify-center items-center gap-1";
    const iconsStyle = 'text-2xl text-white';
    const navTextStyle = 'text-white text-2xl font-extralight';
  return (
    <div className='w-screen h-[100px] bg-[#2A2A2A] flex items-center px-[2.5rem] justify-between'>
        <NavLink 
            className='text-[#DE3737] text-[3rem] font-extrabold'
            to="/user">
            AlertSys
        </NavLink>
        <div className='flex gap-[2rem]'>
            <NavLink 
                className={navStyle}
                to="home">
                <MdHome className='text-[30px] text-white font'/>
                <div className={navTextStyle}>Home</div>
            </NavLink>
            {
                isUser? 
                <NavLink 
                className={navStyle}
                to="adminboard">
                <RiAdminFill className={iconsStyle}/>
                <div className={navTextStyle}>Admin</div>
                </NavLink>:null
            }
            <NavLink 
                className={navStyle}
                to="notification">
                <FaBell className={iconsStyle}/>
                <div className={navTextStyle}>Alert</div>
            </NavLink>
            <NavLink 
                className={navStyle}
                to="profile">
                <IoPersonSharp className={iconsStyle}/>
                <div className={navTextStyle}>Profile</div>
            </NavLink>
            <NavLink 
                className={navStyle}
                to="settings">
                <IoSettingsSharp className={iconsStyle}/>
                <div className={navTextStyle}>Settings</div>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar