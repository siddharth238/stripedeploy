import React from 'react'
import './Cancelled.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import devices from'../../assets/devices.svg'
import { Redirect } from "react-router-dom";
import Navbar from './../Navbar/Navbar';
function Cancelled(props) {
    const [currPlan, setCurrPlan] = useState({});
    const [redirects, setRedirects] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const getPlan = async () => {
            const id = props.match.params.id;
            const res = await axios.get(
                "https://richpanelbackend11.herokuapp.com/getorderbystripeId/" + id
            );
            setCurrPlan(res.data);
        };
        getPlan();
    }, []);

    const handleCancel = async () => {
        const id = props.match.params.id;

        currPlan["isCancelled"] = true;

        const res = await axios.patch(
            "https://richpanelbackend11.herokuapp.com/cancelorder/" + id,
            currPlan
        );
        setRedirects(true);
    };
    if (redirects === true) {
        return <Redirect to="/myplans" />;
    }
    return (
        <div> <Navbar/><div className="cancelled">
            <div className="cancelledcontentleft">
                <div className='cancelledcontentlefttext'>
                {currPlan.isCancelled ? (
                    <div
                       
                    >
                        Your plan was already cancelled
                    </div>
                ) : (
                    <div

                        className="m-4"
                    >
                        Active
                    </div>
                )}
                <div

                ></div>
                    <h4>
                        <b>Amount Paid: </b>
                        {currPlan.amount}
                    </h4>
                    <h4>
                        <b>Type: </b>
                        {currPlan.planName}
                    </h4>
                    <h4>
                        <b>Email: </b>
                        {currPlan.email}
                    </h4>
                </div>
                <Button variant="outlined"
                    disabled={currPlan.isCancelled}
                 
                    onClick={handleCancel}
                >
                    Cancel Payment
                </Button>
            </div>
            <div className='cancelledcontentright'>
                <img src={devices}/>
            </div>
        </div>
        </div>
    )
}

export default Cancelled