import React from 'react'
import './Existing.css'
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar/Navbar';
 
import subscriptions from '../../assets/subscriptions.svg'
import Button from '@mui/material/Button';
import Planeach from '../Planeach/Planeach';
function Existing() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const res = await axios.get(
                "https://richpanelbackend11.herokuapp.com/getallorders/" + user.email
            );
            setOrders(res.data);
        };
        getOrders();
    }, []);
    return (
        <div className='Existing'><Navbar />
            <div className="Existingcontent">
                
                <div className="Existingcontentleft">
                    <div>
                        {isAuthenticated ? (
                            <>
                                {orders.length === 0 ? (
                                    <>
                                        <h1 style={{marginBottom:10}}>Haven't subscribed yet</h1>
                                        <NavLink to="/plans"  >
                                            <Button variant='outlined'> Wanna subscribe?</Button>
                                           
                                        </NavLink>
                                    </>
                                ) : (
                                    <div className='leftplan'>
                                        <h2 >Your Existing Plans </h2>
                                        <div className='leftplanprop'> 
                                        {orders.map((order) => {
                                            return <Planeach pladid={order} />;
                                        })}
                                        
                                    </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Redirect to="/" />
                        )}
                    </div>
                </div><div className='Existingcontentright'> <img className='rightimage' src={subscriptions}/></div>
            </div></div>
    )
}

export default Existing