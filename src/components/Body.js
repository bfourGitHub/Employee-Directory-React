import React from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from "../logo.svg";


function Body({ employees, search }) {

    return (

        <Container>

            <div className="card">

                <p>Add a card here. perhaps.</p>
                {/* {employees
            .filter((employee) => {
                employee.name.first.concat(employee.name.last)
                .toUpperCase().includes(search)
            })
        .map(user => <p className="card-text"> {user.name.first} {user.name.last} </p>)} */}
                <Card style={{ maxWidth: '22rem', margin:"2rem", borderRadius:"8px" }}>
                    <Card.Body>
                    <Card.Img variant="top" src={logo} />
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Body;