import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { NavLink } from 'react-router';
import { fetchLatestNotification, login } from '../api/request.js';
import { alertAdmin, alertPincode } from '../api/request.js';


function Login() {

    async function googlelogin(){
        // code for google loginup
    }

    async function facebooklogin(){
        // code for github loginup
    }

    async function loginUser(e){
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        try {
            const response = await login({ email, password });
            if (response.status === "success") {
                localStorage.setItem("user", JSON.stringify(response.user));
                if (response.user.type === "admin") {
                    const adminAlert = await alertAdmin({ email: response.user.email });
                    localStorage.setItem("notification", JSON.stringify(adminAlert));
                } else if (response.user.pincode) {
                    const pincodeAlert = await alertPincode({ pincode: response.user.pincode });
                    localStorage.setItem("notification", JSON.stringify(pincodeAlert.data));
                    const latestNotification = await fetchLatestNotification({pincode: response.user.pincode})
                    localStorage.setItem("latestNotificationId", JSON.stringify(latestNotification._id.$oid))
                }
                window.location.href = "/user/home";
            }
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <div className='w-screen h-screen flex'>
        <div className='w-[50%] h-full flex justify-center items-center bg-[#2A2A2A]'>
            <img src="/Frame.png" alt="" className="w-[50%] aspect-auto" />
        </div>
        <div className='flex justify-center items-center w-[50%]'>
            <div className='border-[0.5px] border-[#2A2A2A] w-[80%] h-[80%] rounded-2xl p-[3%] flex flex-col gap-3'>
                <div className='w-full h-[25%]'>
                    <div>
                        <p className='text-[#2A2A2A] text-2xl'>Welcome to </p>
                        <p className='text-[#DE3737] text-4xl font-extrabold'>AlertSys</p>
                    </div>
                </div>
                <div className='h-[4%] flex justify-center items-center gap-3 mb-[10px] mt-[10px]'>
                    <div className='w-[40%] border-[#878484] border-[0.5px] h-[0.5px]'></div>
                    <p className='text-center text-[15px]'>OR</p>
                    <div className='w-[40%] border-[#878484]  border-[0.5px] h-[0.5px]'></div>
                </div>
                <form 
                    action="/"
                    onSubmit={loginUser}
                    className='flex flex-col gap-[10px]'>
                    <div className='flex px-[20px] justify-start items-center gap-2'>
                        <IoMail className='text-[25px]'/>
                        <input type="email" id = "email" placeholder='Email' className='border-gray-200 w-full border-2 p-[10px] text-[20px]' required/>
                    </div>
                    <div className='flex px-[20px] justify-start items-center gap-2'>
                        <FaKey className='text-[25px]'/>
                        <input type="password" id = "password" placeholder='Password' className='border-gray-200 w-full border-2 p-[10px] text-[20px]' required/>
                    </div>
                    <div className='flex justify-between mt-[10px]'>
                        <div className='px-[20px] flex gap-[10px] justify-start items-center'>
                            <input type='checkbox' className='cursor-pointer' id="Remember me"/>
                            <label htmlFor="Remember me" className='text-[15px] text-[#2A2A2A]'>Remember me</label>
                        </div>
                        <div className='text-[#DE3737]'>
                            Forgot Password?
                        </div>
                    </div>
                    <button 
                        className='w-full bg-[#DE3737] text-white h-[50px] font-bold rounded-[10px] cursor-pointer'>
                        Login
                    </button>
                </form>
                <div className='w-full flex justify-center items-center gap-[5px]'>
                    <p>Don’t have an account?</p> 
                    <NavLink className='text-[#DE3737]' to="/Signup">Register</NavLink>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login