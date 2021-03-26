import React from 'react';
import { Container } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
// import logo from "../logo.svg";


function Body({ employees, search }) {

    return (


        <Container className="employeeCards card" style={{ fontFamily: "'Montserrat', sans-serif", display: "flex", flexFlow: "wrap", justifyContent: "center", paddingTop:"1rem" }}>




            {employees.filter((employee) =>
                employee.name.first.concat(employee.name.last).toUpperCase().includes(search.replace(/\s/g, '').toUpperCase())
            )
                .map((employee) => (
                    
                    <div className="card" style={{ width: "20rem", margin: ".25rem", borderRadius: "8px", fontFamily: "'Montserrat', sans-serif", color:"white", backgroundColor:"rgba(47, 79, 79, 0.5)" }} >
                        <div className="card-body">
                            <img src={employee.picture.large} className="card-img-top" alt="..." />
                            <h5 className="card-title">{employee.name.first} {employee.name.last}</h5>

                        </div>

                        <div className="card-body">
                            <p >Email: {employee.email}</p>
                            <p >Phone: {employee.phone}</p>
                            <p >Cell: {employee.cell}</p>
                            <p >{employee.location.city}, {employee.location.state}</p>
                            <p >{employee.location.country}</p>
                        </div>
                    </div>

                ))}
        </Container>

    );
};

export default Body;