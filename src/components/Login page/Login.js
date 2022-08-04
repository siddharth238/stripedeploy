import React from 'react'
import { useState,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";
import './Login.css'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Loading from '../Loading/Loading';
function Login() {
    const { loginWithPopup, isAuthenticated, user, logout, isLoading } =
    useAuth0();
 const[message, setMessage]= useState()
 const [btnDisabled, setBtnDisabled] = useState(true)
 function handleChange(event){
    setMessage(event.target.value);
    setBtnDisabled(!event.target.value)
 }
 console.log(message)
  return (<div>
    {isLoading? <Loading/> :
    <> {isAuthenticated ? (
            <Redirect to="/home" />
          ) :
  <>
    <div className='Login'>
        <div className='Logintop'>
            <img className='Logintopimg'  src='https://global-uploads.webflow.com/5efccc15b40a7dfbb529ea1a/5f8b2e4c689873149306fa46_Richpanel_logo_colored.svg'/>
            <a><p className='Logintoptext'>Lets talk</p></a>
        </div>
        <div className='Loginmiddle'>
        <h3 className='Loginmiddleheading'>Hey 👋 Team,</h3>
        <h1 className='Loginmiddleheading2'> RICH PANEL</h1>
        <p1></p1>
       <div className='formg'> <Input onChange={handleChange} placeholder='Enter Your name'/>
        <Button disabled={btnDisabled}  onClick={() => {loginWithPopup()}} variant="outlined">Login</Button></div>
        </div>
    </div></>} </>}
    
    </div>
  )
}

export default Login