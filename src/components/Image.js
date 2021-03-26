import React from 'react';
import { Container } from 'react-bootstrap';
import searchGraphic from '../assets/searchGraphic.jpg';


function Image () {

    return (

        <Container>
            <img src={searchGraphic} className="card-img-top" alt="..." style={{ borderRadius:"8px", marginBottom:"2rem"}}>
            </img>

        </Container>
    );
};

export default Image;