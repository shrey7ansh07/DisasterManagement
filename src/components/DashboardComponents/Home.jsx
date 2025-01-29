import React from 'react'
import { GoAlert } from "react-icons/go";
import { PiWarningCircle } from "react-icons/pi";
import { FaGripLines } from "react-icons/fa6";

function Home() {

    const highAlertInfo = "Landslide reported near Ghoda Farm. Remain cautious in case of further instability."
    const adivsoryInfo = "Strong winds expected in the Kamand Valley. Secure loose objects."
    const numberOfActiveAlerts = 2
    const numberOfAreasAffected = 4
    const evacuation = "None"
  return (
    <>
        <div className='w-screen pt-[3rem] px-[3rem] flex flex-col gap-6 mb-5'>
            <div className='flex justify-between items-center'>
                <div className='text-[3rem] font-semibold'>
                    Live Updates
                </div>
            </div>
            <div className='flex justify-between items-center w-full'>
                <div className='w-[32%] h-[200px] border-1 border-[#2A2A2A] px-[20px] py-[10px] flex flex-col gap-4 relative'>
                    <div className="items-center justify-start flex gap-3">
                        <GoAlert className='text-[#DE3737] text-2xl'/>
                        <div className='text-2xl font-bold'>High Severity Alert</div>
                    </div>
                    <div className='text-[20px]'>
                        {highAlertInfo}
                    </div>
                    <button className='absolute bottom-4 left-4 bg-[#2A2A2A] text-white px-[10px] py-[8px] text-[12px] rounded-[10px]'>
                        View Details
                    </button>
                </div>
                <div className='w-[32%] h-[200px] border-1 border-[#2A2A2A] px-[20px] py-[10px] flex flex-col gap-4 relative'>
                    <div className="items-center justify-start flex gap-3">
                        <PiWarningCircle className='text-yellow-400 text-2xl'/>
                        <div className='text-2xl font-bold'>Weather Advisory</div>
                    </div>
                    <div className='text-[20px]'>
                        {adivsoryInfo}
                    </div>
                    <button className='absolute bottom-4 left-4 bg-[#2A2A2A] text-white px-[10px] py-[8px] text-[12px] rounded-[10px]'>
                        View Details
                    </button>
                </div>
                <div className='w-[32%] h-[200px] border-1 border-[#2A2A2A] px-[20px] py-[10px] flex flex-col gap-4 relative'>
                    <div className="items-center justify-start flex gap-3">
                        <FaGripLines className='text-[#DE3737] text-2xl'/>
                        <div className='text-2xl font-bold'>Alert Summary</div>
                    </div>
                    <ul className='text-[20px]'>
                        <li>Active alerts: {numberOfActiveAlerts}</li>
                        <li>Areas Affected: {numberOfAreasAffected}</li>
                        <li>Evacuations: {evacuation}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='w-screen pt-[3rem] px-[3rem] flex flex-col gap-6 mb-10'>
            <div className='flex justify-between items-center'>
                <div className='text-[3rem] font-semibold'>
                    Disaster Map
                </div>
            </div>
            <div className='w-full h-[500px] border-1 border-black rounded-2xl'>
            </div>
        </div>
    </>
  )
}

export default Home