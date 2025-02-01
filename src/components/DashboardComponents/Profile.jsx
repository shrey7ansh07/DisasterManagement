import React, { useEffect, useState } from 'react'
import { updateUserInfo, updateLocation} from '../../api/request.js';
import { alertPincode, fetchLatestNotification } from '../../api/request.js';

function Profile() {
    const imageUrl = "/Frame.png"


    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : {};
    });
    
    const boxStyle = "border-1 border-[#2A2A2A] w-[48%] h-[650px] py-[2rem] px-[1.5rem] flex flex-col gap-2 relative";
    const boxInfoStyle = "text-[30px] font-medium mb-4"
    const inputBoxStyle = "flex flex-col gap-2"
    const inputStyle = "w-full h-[40px] text-[15px] px-[20px] bg-gray-200"
    const buttonStyle = "absolute bottom-6 right-6 bg-[#DE3737] text-white px-[30px] py-[10px] rounded cursor-pointer"


    async function savePersonelDetails(e) {
        e.preventDefault();
        const userDetails = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            name: document.getElementById('name').value,
            mobile_number: document.getElementById('number').value,
        };
        try {
            const response = await updateUserInfo(userDetails);
            if(response.status == "success"){
                localStorage.setItem("user", JSON.stringify(response.user));
                setUser(JSON.parse(localStorage.getItem("user")))                
                alert("Details saved succesfully")
            }
            else{
                alert("Failed to save details")
            }
        } catch (error) {
            alert.error("Error while saving details", error);
        }
    }

    async function saveAddressDetails(e) {
        e.preventDefault();
        let user = localStorage.getItem("user");
        let parseduser = JSON.parse(user);
        const email = parseduser.email
        const addressDetails = {
            email: email,
            flatno: document.getElementById('flatno').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            country: document.getElementById('country').value,
            pincode: document.getElementById('pincode').value,
        };
        try {
            const response = await updateLocation(addressDetails);
            if(response.status == "success"){
                localStorage.setItem("user", JSON.stringify(response.user));
                setUser(JSON.parse(localStorage.getItem("user")))                
                const pincodeAlert = await alertPincode({ pincode: response.user.pincode });
                localStorage.setItem("notification", JSON.stringify(pincodeAlert.data));
                const latestNotification = await fetchLatestNotification({pincode: response.user.pincode})
                localStorage.setItem("latestNotificationId", JSON.stringify(latestNotification._id.$oid))
                alert("Details saved succesfully Please refresh to see updates")
            }
            else{
                alert("Failed to save details")
            }
        } catch (error) {
            alert.error("Error while saving details", error);
        }
    }
  return (
    <div className='w-screen pt-[3rem] px-[3rem] flex flex-col gap-3 mb-10'>
        <div className='flex justify-between items-center'>
            <div className='text-[3rem] font-semibold'>
                Welcome {user?.name? user.name:"USER"}
            </div>
            <img 
                src={imageUrl} 
                alt="Profile" 
                className='w-[100px] h-[100px] rounded-full border-2 border-gray-300'/>
        </div>
        <div className='flex gap-[2rem] justify-between'>
            <div className={boxStyle}>
                <div className={boxInfoStyle}>
                    Personel Information
                </div>
                <form 
                    action=""
                    onSubmit={savePersonelDetails}
                    className='flex flex-col gap-6'>
                    <div className={inputBoxStyle}>
                        <label htmlFor="name" className='text-[17px]'>Full Name</label>
                        <input type="text" id='name' className={inputStyle} required placeholder='Shreyansh Gupta' defaultValue={user?.name}/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="number" className='text-[17px]'>Phone Number</label>
                        <input type="number" id='number' className={inputStyle} required placeholder='7024995712' defaultValue={user?.phone_number? user.phone_number:""}/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="email" className='text-[17px]'>Email</label>
                        <input type="email" id='email' className={inputStyle} required placeholder='abc1234@gmail.com' defaultValue={user?.email? user.email:""}/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="password" className='text-[17px]'>Password</label>
                        <input type="password" id='password' className={inputStyle} required placeholder='##########'/>
                    </div>
                    <button className={buttonStyle}>
                        Edit
                    </button>
                </form>
            </div>
            <div className={boxStyle}>
                <div className={boxInfoStyle}>
                    Location
                </div>
                <form 
                    action=""
                    onSubmit={saveAddressDetails}
                    className='flex flex-col gap-6'>
                    <div className={inputBoxStyle}>
                        <label htmlFor="flatno" className='text-[17px]'>Flat/House No</label>
                        <input type="text" id='flatno' className={inputStyle} required placeholder='B10 005' defaultValue={user?.flatno? user.flatno: ""}/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="city" className='text-[17px]'>City</label>
                        <input type="text" id='city' className={inputStyle} required placeholder='Mandi' defaultValue={user?.city? user.city:""}/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="state" className='text-[17px]'>State</label>
                        <input type="text" id='state' className={inputStyle} required placeholder='Himachal Pradesh' defaultValue={user?.state? user.state : ""}/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="country" className='text-[17px]'>Country</label>
                        <input type="text" id='country' className={inputStyle} required placeholder='India' defaultValue={user?.country? user.country:""}/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="pincode" className='text-[17px]'>Pincode</label>
                        <input type="number" id='pincode' className={inputStyle} required placeholder='471001' defaultValue={user?.pincode? user.pincode:""}/>
                    </div>
                    <button className={buttonStyle}>
                        Edit
                    </button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Profile