import React from 'react';
import { Container } from 'react-bootstrap';



function Filters({ handleInputChange }) {

    return (

        // Filter form inserted here to Filter thru api returned data
        <Container style={{ marginBottom:"2rem" }}>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="nameFilter" style={{fontFamily:"'Montserrat', sans-serif"}}>Search by Name</label>
                            <input type="text" className="form-control" name="search" id="nameFilter" onChange={handleInputChange} />
                        </div>
                    </form>
                </div>

            </div>
        </Container>
    );
};

export default Filters;