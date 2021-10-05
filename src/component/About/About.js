import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../About/About.css'
import man from '../../images/man.jpg'


const About = () => {
    return (
        <div className="about">
           <Container className='about-section'>
           <Row>
             <Col>
               <img src={man} alt="" />
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
    );
};

export default About;