import React from 'react'
import { GoAlert } from "react-icons/go";
import { PiWarningCircle } from "react-icons/pi";
import { MdOutlineVerified } from "react-icons/md";

function AlertBox({
    id = 0,
    WarningName = "LandSlide",
    WarningInfo = "Heavy rainfall has triggered landslides near Ghoda Farm. Avoid affected zones and follow evacuation advisories.",
    WarningLevel = "High",
    Time = "13:12",
    Date = "29/01/2024"
}) {

    const renderWarning = () => {
        switch (WarningLevel) {
          case "High":
            return (
              <div 
                id={id}
                className='h-[150px] border-1 border-[#2A2A2A] px-[20px] py-[10px] flex flex-col gap-4 relative rounded-2xl'>
                <div className="items-center justify-start flex gap-3">
                    <GoAlert className='text-[#DE3737] text-2xl'/>
                    <div className='text-2xl font-bold'>{WarningName}</div>
                    <div className='text-[13px] text-gray-400'>{Time} {Date}</div>
                </div>
                <div className='w-[60%] text-2xl'>
                    {WarningInfo}
                </div>
                <div className='absolute top-4 right-4 text-[#DE3737]'>
                    High Severity
                </div>
                <button className='absolute bottom-4 right-4 bg-[#2A2A2A] text-white px-[10px] py-[8px] text-[12px] rounded-[10px]'>
                    View Details
                </button>
              </div>
            );
          case "Medium":
            return (
                <div 
                  id={id}
                  className='h-[150px] border-1 border-[#2A2A2A] px-[20px] py-[10px] flex flex-col gap-4 relative rounded-2xl'>
                <div className="items-center justify-start flex gap-3">
                    <PiWarningCircle className='text-yellow-400 text-2xl'/>
                    <div className='text-2xl font-bold'>{WarningName}</div>
                    <div className='text-[13px] text-gray-400'>{Time} {Date}</div>
                </div>
                <div className='w-[60%] text-2xl'>
                    {WarningInfo}
                </div>
                <div className='absolute top-4 right-4 text-yellow-500'>
                    Moderate
                </div>
                <button className='absolute bottom-4 right-4 bg-[#2A2A2A] text-white px-[10px] py-[8px] text-[12px] rounded-[10px]'>
                        View Details
                </button>
              </div>
            );
          case "Low":
            return (
                <div 
                  id={id}
                  className='h-[150px] border-1 border-[#2A2A2A] px-[20px] py-[10px] flex flex-col gap-4 relative rounded-2xl'>
                <div className="items-center justify-start flex gap-3">
                    <MdOutlineVerified className='text-green-400 text-2xl'/>
                    <div className='text-2xl font-bold'>{WarningName}</div>
                    <div className='text-[13px] text-gray-400'>{Time} {Date}</div>
                </div>
                <div className='w-[60%] text-2xl'>
                    {WarningInfo}
                </div>
                <div className='absolute top-4 right-4 text-green-400'>
                    Resolved
                </div>
                <button className='absolute bottom-4 right-4 bg-[#2A2A2A] text-white px-[10px] py-[8px] text-[12px] rounded-[10px]'>
                    View Details
                </button>
              </div>
            );
          default:
            return (
              <div className="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4" role="alert">
                <p className="font-bold">{WarningName}</p>
                <p>{WarningInfo}</p>
              </div>
            );
        }
      };  return (
    <div>
        {renderWarning()}
    </div>
  )
}

export default AlertBox