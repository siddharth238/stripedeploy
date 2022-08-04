import React from 'react'
import './Error.css'
import { Link } from "react-router-dom";
import error from'../../assets/error.svg'
import { useAuth0, } from "@auth0/auth0-react";
function Errorload() {
    const { user } = useAuth0();
  return (
    <div><div className='Logintop'>
    <img className='Logintopimg'  src='https://global-uploads.webflow.com/5efccc15b40a7dfbb529ea1a/5f8b2e4c689873149306fa46_Richpanel_logo_colored.svg'/>
    <a><p className='Logintoptext'>Lets talk</p></a>
    
</div>
<div className='Errorcontent'>
    <div className='Errorcontentheading'>
<h3   className='Texthead'>{`Hey 👋 ${user.name}`}</h3>
<h3  className='Texthead1'>Looks like you are on a wrong page</h3>
 
 
</div>
<img className='Errorcontentimg' src={error}/> 
<p1></p1>               
 
</div></div>
  )
}

export default Errorload