import React from 'react'

function Profile() {
    const name = "Akshat"
    const imageUrl = "/src/assets/Frame.png"

    const boxStyle = "border-1 border-[#2A2A2A] w-[48%] h-[650px] py-[2rem] px-[1.5rem] flex flex-col gap-2 relative";
    const boxInfoStyle = "text-[30px] font-medium mb-4"
    const inputBoxStyle = "flex flex-col gap-2"
    const inputStyle = "w-full h-[40px] text-[15px] px-[20px] bg-gray-200"
    const buttonStyle = "absolute bottom-6 right-6 bg-[#DE3737] text-white px-[30px] py-[10px] rounded cursor-pointer"


    async function savePersonelDetails(e){
        e.preventDefault();
        console.log("hey");
        
    }

    async function saveAddressDetails(e){
        e.preventDefault();
        console.log("hi");
        

    }
  return (
    <div className='w-screen pt-[3rem] px-[3rem] flex flex-col gap-3 mb-10'>
        <div className='flex justify-between items-center'>
            <div className='text-[3rem] font-semibold'>
                Welcome {name}
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
                        <input type="text" id='name' className={inputStyle} required placeholder='Shreyansh Gupta'/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="number" className='text-[17px]'>Phone Number</label>
                        <input type="number" id='number' className={inputStyle} required placeholder='7024995712'/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="email" className='text-[17px]'>Email</label>
                        <input type="email" id='email' className={inputStyle} required placeholder='abc1234@gmail.com'/>
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
                        <input type="text" id='flatno' className={inputStyle} required placeholder='B10 005'/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="city" className='text-[17px]'>City</label>
                        <input type="text" id='city' className={inputStyle} required placeholder='Mandi'/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="state" className='text-[17px]'>State</label>
                        <input type="text" id='state' className={inputStyle} required placeholder='Himachal Pradesh'/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="country" className='text-[17px]'>Country</label>
                        <input type="text" id='country' className={inputStyle} required placeholder='India'/>
                    </div>
                    <div className={inputBoxStyle}>
                        <label htmlFor="pincode" className='text-[17px]'>Pincode</label>
                        <input type="number" id='pincode' className={inputStyle} required placeholder='471001'/>
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