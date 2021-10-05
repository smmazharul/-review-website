import React from 'react';
import { ButtonGroup,Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import '../Homes/Homes.css'
const Homes = (props) => {
    const {name,year,description,duration,img}=props.card;
    const history = useHistory()
    const handleCard=()=>{
         history.push('/service')
    }
    return (
        <div className="header">
            <Card className='card'>
    <Card.Img className='card-img' variant="top" src={img} />
    <Card.Body className='card-body'>
      <Card.Title>Class:{name}</Card.Title>
      <Card.Text>Years: {year}</Card.Text>
      <Card.Text>Durations: {duration}</Card.Text>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button onClick={handleCard} className="home-card-button">See more</Button>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Homes;