import React from 'react'
import { GoAlert } from "react-icons/go";

function Adminboard() {
    const boxStyle = "border-1 border-[#2A2A2A] w-[48%] h-[650px] py-[2rem] px-[1.5rem] flex flex-col gap-2 relative"
    const boxInfoStyle = "text-[30px] font-medium mb-4"
    const inputBoxStyle = "flex flex-col gap-2"
    const inputStyle = "w-full h-[40px] text-[15px] px-[20px] bg-gray-200"
    const buttonStyle = "absolute bottom-6 right-6 text-white px-[30px] py-[10px] rounded cursor-pointer flex justify-center items-center gap-2"

    async function broadcastAlert(e){
        e.preventDefault();
    }

  return (
    <div className='w-screen pt-[3rem] px-[3rem] flex flex-col gap-6 mb-5'>
        <div className='flex justify-between items-center'>
            <div className='text-[3rem] font-semibold'>
                Authority Dashboard
            </div>  
        </div>
        <div className='flex gap-[2rem] justify-between'>
            <div className={boxStyle}>
                <div className={boxInfoStyle}>
                    Create Alert
                </div>
                <form 
                    action=""
                    onSubmit={broadcastAlert}
                    className='flex flex-col gap-6'>
                    <div className={inputBoxStyle}>
                        <label htmlFor="alerttype" className='text-[17px]'>Alert Type</label>
                        <input type="text" id='alerttype' className={inputStyle} required placeholder='Landslide'/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="regions" className='text-[17px]'>Affected region</label>
                        <input type="regions" id='regions' className={inputStyle} required placeholder='Ghoda Farm, Salgi, IIT Mandi North Campus'/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="severity" className='text-[17px]'>Severity Level</label>
                        <input type="severity" id='severity' className={inputStyle} required />
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="description" className='text-[17px]'>Description</label>
                        <textarea type="description" id='description' className={`${inputStyle} h-[100px] py-[10px]`} required />
                    </div>
                    <button className={`${buttonStyle} bg-[#DE3737]`}>
                        <GoAlert className='text-white'/>
                        <p>Broadcast Alert</p>
                    </button>
                </form>
            </div>
            <div className={boxStyle}>
                <div className={boxInfoStyle}>
                    Analytics
                </div>
                <button className={`${buttonStyle} bg-[#2A2A2A]`}>
                    View detailed analysis
                </button>

            </div>

        </div>
    </div>
  )
}

export default Adminboard