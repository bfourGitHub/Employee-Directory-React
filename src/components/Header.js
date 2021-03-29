import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


function Header() {

    return (

        <Container >
            <Jumbotron fluid bg="dark" style={{ borderRadius:"8px", backgroundColor:"darkslategrey", color:"white", fontFamily:"'Montserrat', sans-serif" }}>
                <Container>
                    <h1>Employee Directory</h1>
                    <p>
                        A simple application for referencing employee information.
                    </p>
                </Container>
            </Jumbotron>
        </Container>

    );
};

export default Header;