import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import api from "../api"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

const Form = ({route, method}) => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    const name = method === "login"? "Login" : "Register";

    const handleSummit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post(route, {username, password})
            if(method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/home")
            }else{
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        }
    }
  return (
    <div>
        <form onSubmit={handleSummit} className='flex justify-center  border p-4 '>
            <div className='flex flex-col items-center justify-center bg-g  ray-100 p-4 gap-4 border bg-gray-100'>
                <h1>{name}</h1>
                <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='border bg-white p-1'
                />
                <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border bg-white p-1'
                />
                <button type='submit' className='border  p-2'>{name}</button>
            </div>
        </form>
    </div>
  )
}

export default Form