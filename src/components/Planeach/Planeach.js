import React from 'react'
import './Planeach.css'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Planeach({pladid}) {
  return (
   
    <div className='Planeach'>
      <div className='Planeachtext'><h4><p>Plan Type:</p><>{pladid.planName}</> </h4>
      <h4><p>Amount paid:</p>₹{pladid.amount}</h4></div>
      <Link className='btns2' to={`/plan/${pladid.userId_stripe}`}>
       <Button variant="outlined"  color="error"><Link to={`/plan/${pladid.userId_stripe}`} className='btns1'  ></Link> Cancle plan</Button></Link>
       </div>
  )
}

export default Planeach