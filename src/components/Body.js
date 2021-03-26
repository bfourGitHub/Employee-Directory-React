import React from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
// import logo from "../logo.svg";


function Body({ employees, search }) {

    return (

        <Container>

            <div className="card">

                <p>Add a card here. perhaps.</p>

            {employees
            .filter((employee) => 
                employee.name.first.concat(employee.name.last).toUpperCase().includes(search.replace(/\s/g, '').toUpperCase())
            )
            .map((employee, index) => ( 
                // Place holder employee.~ ... 
                <Card style={{ maxWidth: '22rem', margin:"2rem", borderRadius:"8px", fontFamily:"'Montserrat', sans-serif" }}>

                    <Card.Body>
                        <Card.Img variant="top" src={employee.picture.large} />
                        <Card.Title>{employee.name.first} {employee.name.last}</Card.Title>                        
                    </Card.Body>
                    
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Email: {employee.email}</ListGroupItem>
                        <ListGroupItem>Phone: {employee.phone}</ListGroupItem>
                        <ListGroupItem>Cell: {employee.cell}</ListGroupItem>
                        <ListGroupItem>{employee.location.city}, {employee.location.state}, {employee.location.country}</ListGroupItem>
                    </ListGroup>
                    
                </Card>
                ))}
            </div>
        </Container>
    );
};

export default Body;