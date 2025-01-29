import React from 'react'
import ToggleSwitch from './ToggleButton/Toggle';

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
        </div>
        <div className='relative w-full h-[550px] border-1 border-black rounded-2xl pt-[1rem] px-[2rem] flex flex-col gap-6'>
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
                        Enable Push Notifications
                    </div>
                    <ToggleSwitch id="Push"/>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[24px] font-extralight'>
                        Enable SMS alert
                    </div>
                    <ToggleSwitch id="sms"/>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[24px] font-extralight'>
                        Enable email Notifications
                    </div>
                    <ToggleSwitch id="email"/>
                </div>
                <div className={inputBoxStyle}>
                    <label htmlFor="threshold" className='text-[17px] font-extralight'>Alert Threshold</label>
                    <input type="threshold" id='threshold' className={inputStyle} required placeholder='abc1234@gmail.com'/>
                </div>
                <div className={inputBoxStyle}>
                    <label htmlFor="interval" className='text-[17px] font-extralight'>Notification retry interval</label>
                    <input type="interval" id='interval' className={inputStyle} required placeholder='abc1234@gmail.com'/>
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