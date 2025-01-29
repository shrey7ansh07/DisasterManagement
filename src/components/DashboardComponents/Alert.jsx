import React from 'react'
import AlertBox from './AlertComponents/AlertBox'

function Alert() {
  return (
    <div className='w-screen pt-[3rem] px-[3rem] flex flex-col gap-6 mb-5'>
        <div className='flex justify-between items-center'>
            <div className='text-[3rem] font-semibold'>
                Alert Notifications
            </div>
        </div>
        <AlertBox/>
    </div>
  )
}

export default Alert