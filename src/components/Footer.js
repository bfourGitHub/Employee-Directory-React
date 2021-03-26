import React from 'react';
import { Container } from 'react-bootstrap';



function Footer() {

    return (

        <Container>

        <footer style={{ backgroundColor:"darkslategrey", minHeight: "2rem", display:"flex", justifyContent:"center", marginTop: "2rem", borderRadius:"8px" }}>
            <p style={{ fontSize: ".9rem", color: "white", marginTop: "1rem" }}>&copy; bryan<span style={{ color: "rgba(172,135,80)" }}>moreno</span> 2021</p>
        </footer>
        </Container>

    )
};

export default Footer;
