import axios from "axios";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router";

const app = axios.create({
    baseURL: import.meta.env.VITE_baseURL,
});



// used
export async function login({email, password}){
    try {
        const response = await app.post("/userlogin",{
            email: email,
            password: password,
            hash : import.meta.env.VITE_HASH,
        })  
        return response.data;      
    } catch (error) {
        return error;
    }
}

// used
export async function updateLocation({
    email,
    flatno,
    city,
    state,
    country,
    pincode
}){
    try {
        const response = await app.post("/user/pincode",{
            email: email,
            flatno : flatno,
            city: city,
            state: state,
            country: country,
            pincode: pincode,
            hash: import.meta.env.VITE_HASH
        })
        return response.data
    } catch (error) {
        return error
    }
}

// used
export async function updateUserInfo({
    email,
    password,
    name,
    mobile_number
}){
    try {
        const response = await app.post("/user/info", {
            email : email,
            password : password,
            name : name,
            mobile_number: mobile_number,
            hash: import.meta.env.VITE_HASH
        })
        return response.data
    } catch (error) {
        return error
    }
}

// used
export async function register({
    email,
    password,
    name,
}){
    try {
        const response = await app.post("/user", {
            email: email,
            password: password,
            name: name,
            hash: import.meta.env.VITE_HASH
        })
        return response.data;
    } catch (error) {
        return error;
    }
}

//used
export async function alertPincode({pincode}){
    try {
        const response = await app.post("/notification/pincode",{
            pincode: pincode,
            hash : import.meta.env.VITE_HASH
        })
        return response;
    } catch (error) {
        return error;
    }
}

//used
export async function alertAdmin({email}){
    try{
        const response = await app.post("/notification/admin",{
            email: email,
            hash : import.meta.env.VITE_HASH
        })
        return response.data;
    } catch(error) {
        return error
    }
}

// used
export async function sendAlert({
    title,
    email,
    pincode,
    severity,
    description,
}){
    let date = new Date();
    let formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    let formattedTime = `${hours}:${minutes}:${seconds}`; // Format time as HH:MM:SS
    try {
        const response = await app.post("/notification",{
            title: title,
            email: email,
            pincode: pincode,
            severity: severity,
            text: description,
            date: formattedDate, // Use formatted date
            time: formattedTime, // Use formatted time
            hash : import.meta.env.VITE_HASH
        })
        return response.data
    } catch (error) {
        return error
    }
}

export async function fetchLatestNotification({pincode}){
    try {
        const response = await app.post("/notification/latest",{
            pincode: pincode,
            hash : import.meta.env.VITE_HASH
        })
        return response.data
    } catch (error) {
        return error
    }
}

export function logout(){

    localStorage.clear();
    alert("Logout Successfully");
    window.location.href = "/";
}