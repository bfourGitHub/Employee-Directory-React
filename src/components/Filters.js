import React from 'react';
import { Container } from 'react-bootstrap';



function Filters({ handleInputChange, handleSortBtnFirstNameAZ, handleSortBtnFirstNameZA, handleSortBtnLastNameAZ, handleSortBtnLastNameZA  }) {

    return (

        // Filter form inserted here to Filter thru api returned data
        <Container style={{ marginBottom: "2rem" }}>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="nameFilter" style={{ fontFamily: "'Montserrat', sans-serif" }}>Search by Name</label>
                            <input type="text" className="form-control" name="search" id="nameFilter" onChange={handleInputChange} />
                        </div>
                    </form>
                </div>
                <div className="card-body" style={{ display: "flex", justifyContent: "center", flexWrap:"wrap" }}>
                    <button type="button" class="btn btn-outline-info" style={{ margin:"4px" }} onClick={handleSortBtnFirstNameAZ} >First Name A-Z</button>
                    <button type="button" class="btn btn-outline-info" style={{ margin:"4px" }} onClick={handleSortBtnFirstNameZA} >First Name Z-A</button>
                    <button type="button" class="btn btn-outline-info" style={{ margin:"4px" }} onClick={handleSortBtnLastNameAZ} >Last Name A-Z</button>
                    <button type="button" class="btn btn-outline-info" style={{ margin:"4px" }} onClick={handleSortBtnLastNameZA} >Last Name Z-A</button>
                </div>

            </div>
            
        </Container>
    );
};

export default Filters;