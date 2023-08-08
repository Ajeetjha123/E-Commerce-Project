import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaRegPlayCircle } from "react-icons/fa";

const About = () => {
  return <>
    <div className='mt-0 text-center'>  
        <Card bg='secondary'>
          <Card.Body className='display-2'>
            <Button variant="outline-light">Get Our Latest Album</Button>
            <br/>
            <FaRegPlayCircle color="white" fontSize="70px" />
          </Card.Body>
        </Card> 
      </div>
      <ListGroup className="text-center">
      <ListGroup.Item>16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button variant="info">Buys Tickets</Button></ListGroup.Item>
      <ListGroup.Item>16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button variant="info">Buys Tickets</Button></ListGroup.Item>
      <ListGroup.Item>16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button variant="info">Buys Tickets</Button></ListGroup.Item>
      <ListGroup.Item>16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button variant="info">Buys Tickets</Button></ListGroup.Item>
      <ListGroup.Item>16 DETROIT, MI DTE ENERGY MUSIC THEATRE <Button variant="info">Buys Tickets</Button></ListGroup.Item>
    </ListGroup>
  </>;
};

export default About;
