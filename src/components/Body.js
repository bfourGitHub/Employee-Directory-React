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
                    <Card.Img variant="top" src={employee.picture} />
                        <Card.Title>{employee.name.first} {employee.name.last}</Card.Title>
                        <Card.Text>
                            {employee.description}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Email: {employee.email}</ListGroupItem>
                        <ListGroupItem>Phone: {employee.phoneNumber}</ListGroupItem>
                        <ListGroupItem>{employee.location}</ListGroupItem>
                    </ListGroup>
                    {/* <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body> */}
                </Card>
                ))}
            </div>
        </Container>
    );
};

export default Body;