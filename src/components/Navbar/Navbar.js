import React from 'react'
import './Navbar.css'
import { useAuth0, User } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import devices from'../../assets/devices.svg'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect } from 'react';
function Navbar() {
    const { logout, user } = useAuth0();
   
  return (
    <div><div className='Nav btns1'>
    <img className='Navimage'  src='https://global-uploads.webflow.com/5efccc15b40a7dfbb529ea1a/5f8b2e4c689873149306fa46_Richpanel_logo_colored.svg'/>
    <a><p className='Navtext '>Lets talk</p></a>
    <Link to="/home" className='btns1'  ><Button    > Home</Button> </Link> 
    <Link to="/myplans" className='btns1'  > <Button  >  My Plans</Button> </Link>
    <Link to="/plans" className='btns1'  ><Button   > Subscribe</Button> </Link>
     <Button variant="outlined"  onClick={() => logout()}> <LogoutIcon style={{marginRight:5}}/>Logout</Button> 
</div></div>
  )
}

export default Navbar