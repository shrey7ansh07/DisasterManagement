import React from 'react'
import AlertBox from './AlertComponents/AlertBox'
import { useState, useEffect } from 'react';
import { fetchLatestNotification } from '../../api/request';

function Alert() {


  const [alerts, setAlerts] = useState(() => {
    const storedAlerts = localStorage.getItem('notification');
    return storedAlerts ? JSON.parse(storedAlerts) : [];
  });
  const [User, isUser] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user")).type
    return user == "admin"? "admin":"user"
  })
  useEffect(() => {
    if (User !== "user") return;
    async function fetchLatest() {
      try {
        let user = JSON.parse(localStorage.getItem("user"))
        if (!user || !user.pincode) {
          return;
        }
        const response = await fetchLatestNotification({pincode: user.pincode});
        if(!response._id){
          return;
        }
        const storedLatestNotificationId = JSON.parse(localStorage.getItem('latestNotificationId'));
  
        if (response._id.$oid != storedLatestNotificationId) {
          localStorage.setItem('latestNotificationId', JSON.stringify(response._id.$oid));
  
          setAlerts(prevAlerts => {
            const updatedAlerts = [...prevAlerts, response];
            localStorage.setItem('notification', JSON.stringify(updatedAlerts));
            return updatedAlerts;
          });
  
          // Trigger browser alert
          alert(`🚨 New Notification`);
        }
      } catch (error) {
        alert.error('Error fetching latest notification:', error);
      }
    }
  
  
    const intervalId = setInterval(fetchLatest, 60000); // Fetch every 1 minute
  
    return () => clearInterval(intervalId); // Cleanup when component unmounts
  }, []);
  
  return (
    <div className='w-screen pt-[3rem] px-[3rem] flex flex-col gap-6 mb-5'>
        <div className='flex justify-between items-center'>
            <div className='text-[3rem] font-semibold'>
                Alert Notifications
            </div>
        </div>
        {
          alerts.map((alert,index) => (
            <AlertBox
              key={index}
              id={index}
              WarningName={alert.title}
              WarningInfo={alert.text}
              WarningLevel={alert.severity}
              Time={alert.time}
              Date={alert.date}/>
          ))
        }
    </div>
  )
}

export default Alert