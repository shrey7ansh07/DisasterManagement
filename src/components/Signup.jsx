import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaKey } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";

import React from 'react'
import { NavLink } from "react-router";
import { register } from "../api/request";

function Signup() {

    async function googlesignup(){
    // code for google signup
    }

    async function facebooksignup(){
    // code for github signup
    }

    async function signup(e){
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmpassword = document.getElementById("confirmpassword").value;

        if(confirmpassword != password) {
            alert("Password do not match")
            return
        }

        try {
            const response = await register({email, password, name})
            if(response.status == "error"){
                alert(response.message);
                return;
            }
            alert("Successfully resgistered!! please login")
        } catch (error) {
            alert.log("Error while signing up", error)
        }
        
    }
  return (
    <div className='w-screen h-screen flex'>
        <div className='w-[50%] h-full flex justify-center items-center bg-[#2A2A2A]'>
            <img src="/Frame.png" alt="" className="w-[50%] aspect-auto" />
        </div>
        <div className='flex justify-center items-center w-[50%]'>
            <div className='border-[0.5px] border-[#2A2A2A] w-[80%] h-[80%] rounded-2xl p-[3%] flex flex-col gap-3'>
                <div className='w-full h-[15%]'>
                    <div>
                        <p className='text-[#2A2A2A] text-2xl'>Welcome to </p>
                        <p className='text-[#DE3737] text-4xl font-extrabold'>AlertSys</p>
                    </div>
                </div>
                <form 
                    action=""
                    onSubmit={signup}
                    className='flex flex-col gap-[10px]'>
                    <div className='flex px-[20px] justify-start items-center gap-2'>
                        <IoPersonSharp className="text-[20px]"/>
                        <input type="text" id = "name" placeholder='Name' className='border-gray-200 w-full border-2 p-[10px] text-[17px]'/>
                    </div>
                    <div className='flex px-[20px] justify-start items-center gap-2'>
                        <IoMail className='text-[20px]'/>
                        <input type="email" id = "email" placeholder='Email' className='border-gray-200 w-full border-2 p-[10px] text-[17px]'/>
                    </div>
                    <div className='flex px-[20px] justify-start items-center gap-2'>
                        <FaKey className='text-[20px]'/>
                        <input type="password" id = "password" placeholder='Password' className='border-gray-200 w-full border-2 p-[10px] text-[17px]'/>
                    </div>
                    <div className='flex px-[20px] justify-start items-center gap-2'>
                        <FaKey className='text-[20px]'/>
                        <input type="password" id = "confirmpassword" placeholder='Confirm Password' className='border-gray-200 w-full border-2 p-[10px] text-[17px]'/>
                    </div>
                    <button className='w-full bg-[#DE3737] text-white h-[50px] font-bold rounded-[10px] cursor-pointer'>
                        Signup
                    </button>
                </form>
                <div className='w-full flex justify-center items-center gap-[5px]'>
                    <p>Already have an account?</p> 
                    <NavLink className='text-[#DE3737]' to="/">Login</NavLink>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup