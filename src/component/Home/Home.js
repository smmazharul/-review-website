import React, { useEffect, useState } from 'react';
import Homes from '../Homes/Homes';
import '../Home/Home.css'
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../images/banner.jpg'

const Home = () => {
    const [cards,setCards]=useState([])
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="Home">
          <div className='home-banner'>
              {/* about part */}
          <Container className='about-section'>
           <Row>
             <Col>
               <img src={banner} alt="" />
             </Col>
             <Col className='about-content'>
                <h4>Headteacher Welcome</h4>
                <h1>Welcome to Courselog Kindergarten</h1>
                <h6>We believe that human rights of a child are non-negotiable.</h6>
                <p>We pride ourselves on being able to provide happy, safe inclusive environment which children aged two and a half to five years old.</p>
                <h6 style={{color:'orange'}}>Head Teacher</h6>
             </Col>
            </Row>

           </Container>
          </div>
            <h2 style={{marginTop:'20px', color:'orange'}}>Our Service</h2>
            <div className='home-card' >
            {
                cards.slice(0,4).map(card=>
                <Homes card={card} key={card.name}></Homes>)
            }
            </div>
        </div>
    );
};

export default Home;