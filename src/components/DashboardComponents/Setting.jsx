import React from 'react'
import ToggleSwitch from './ToggleButton/Toggle';
import { logout } from '../../api/request.js';

function Setting() {
    const inputStyle = "w-full h-[40px] text-[15px] px-[20px] bg-gray-200"
    const inputBoxStyle = "flex flex-col gap-2"


    async function settingsChange(e){
        e.preventDefault();
        console.log("Hi")
    }

  return (
    <div className='w-screen pt-[3rem] px-[3rem] flex flex-col gap-6 mb-5'>        
        <div className='flex justify-between items-center'>
            <div className='text-[3rem] font-semibold'>
                Settings
            </div>  
            <button 
                className='w-[100px] bg-[#de3b3b] text-white px-[10px] py-[15px] text-[15px] rounded-[10px] cursor-pointer'
                onClick={logout}>
                Logout
            </button>
        </div>
        <div className='relative w-full h-[500px] border-1 border-black rounded-2xl pt-[1rem] px-[2rem] flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
                <div className='text-[2rem] font-medium'>
                    Notification Preferences
                </div>  
            </div>
            <form 
            action=""
            onSubmit={settingsChange}
            className='flex flex-col gap-6'>
                <div className='flex items-center justify-between'>
                    <div className='text-[24px] font-extralight'>
                        Enable push Notifications
                    </div>
                    <ToggleSwitch id="Push"/>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[24px] font-extralight'>
                        Enable email Notifications
                    </div>
                    <ToggleSwitch id="email"/>
                </div>
                <div className={inputBoxStyle}>
                        <label htmlFor="severity" className='text-[17px]'>Severity level</label>
                        <select id='severity' className={inputStyle} required>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                </div>
                <div className={inputBoxStyle}>
                        <label htmlFor="retry" className='text-[17px]'>Retry interval</label>
                        <select id='retry' className={inputStyle} required ty>
                            <option value="10">10 seconds</option>
                            <option value="60">1 minute</option>
                            <option value="300">5 minutes</option>
                        </select>
                </div>
                <button className='bottom-4 w-full bg-[#2A2A2A] text-white px-[10px] py-[15px] text-[15px] rounded-[10px]'>
                        Save Changes
                </button>
            </form>
        </div>
    </div>
  )
}

export default Setting