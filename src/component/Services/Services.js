import React, { useEffect, useState } from 'react';
import Servie from '../Service/Servie';


const Services = () => {
    const [Services,setServices]=useState([])
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="service">
            <h5 style={{color:'orange'}}>Our Services</h5>
            <p style={{color:'rgb(6, 6, 46)', fontSize:'24px', fontWeight:'800'}}>Our Services is the best Service for kids </p>
            <div className='home-card'>
            {
                Services.map(service=><Servie servie={service} key={service.name}></Servie>)
            }
            </div>
        </div>
    );
};

export default Services;