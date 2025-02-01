import React from 'react'
import { GoAlert } from "react-icons/go";
import { sendAlert } from '../../api/request.js';
import { logout } from '../../api/request.js';
import { alertAdmin } from '../../api/request.js';

function Adminboard() {
    const boxStyle = "border-1 border-[#2A2A2A] w-[48%] h-[650px] py-[2rem] px-[1.5rem] flex flex-col gap-2 relative"
    const boxInfoStyle = "text-[30px] font-medium mb-4"
    const inputBoxStyle = "flex flex-col gap-2"
    const inputStyle = "w-full h-[40px] text-[15px] px-[20px] bg-gray-200"
    const buttonStyle = "absolute bottom-6 right-6 text-white px-[30px] py-[10px] rounded cursor-pointer flex justify-center items-center gap-2"

    async function broadcastAlert(e){
        e.preventDefault();

        let admin = localStorage.getItem("user")
        const title = document.getElementById("alerttype").value
        const email = JSON.parse(admin).email
        const pincode = document.getElementById("regions").value
        const severity = document.getElementById("severity").value
        const description = document.getElementById("description").value

        try {
            const response = await sendAlert({title, email, pincode, severity, description})
            const emailAlert = await alertAdmin({ email: email });
            localStorage.setItem("notification", JSON.stringify(emailAlert));
            if(response.status == "success"){
                alert(response.message,"Refresh page");
            }
        } catch (error) {
            alert(error.message)
        }
    }

  return (
    <div className='w-screen pt-[3rem] px-[3rem] flex flex-col gap-6 mb-5'>
        <div className='flex justify-between items-center'>
            <div className='text-[3rem] font-semibold'>
                Authority Dashboard
            </div>  
            <button 
                className='w-[100px] bg-[#de3b3b] text-white px-[10px] py-[15px] text-[15px] rounded-[10px] cursor-pointer'
                onClick={logout}>
                Logout
            </button>
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
                        <input type="number" id='regions' className={inputStyle} required placeholder='471001'/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="severity" className='text-[17px]'>Severity Level</label>
                        <select id='severity' className={inputStyle} required>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="description" className='text-[17px]'>Description</label>
                        <textarea type="text" id='description' className={`${inputStyle} h-[100px] py-[10px]`} required />
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