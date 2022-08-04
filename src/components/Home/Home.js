import React from 'react'
import './Home.css'
import { useAuth0, User } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import devices from'../../assets/devices.svg'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Navbar from '../Navbar/Navbar';
function Home() {
    const { logout, user } = useAuth0();
  return (
    <div>  <Navbar/>
<div className='Homecontent'>
    <div className='Homecontentheading'>
<h3   className='Texthead'>{`Hey 👋 ${user.name}`}</h3>
<h3  className='Texthead1'>Looking for plans of video releases?</h3>
<p  className='Texthead2'>Check out the lastest subscription plans</p>
<div className='buttong'>
<Link to="/plans" className='btns'  >
<Button variant="outlined">Explore plans</Button></Link>
<Link to="/myplans" className="btns">
<Button   variant="outlined">My plans</Button></Link></div> 
</div>
<img className='Homecontentimg' src={devices}/> 
<p1></p1>               
 
</div>
</div> 
  )
}

export default Home