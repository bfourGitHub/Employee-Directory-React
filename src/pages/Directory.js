import React, { useEffect, useState } from 'react';

import API from '../utils/API';

import Body from '../components/Body';
import Header from '../components/Header';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
 


function Directory () {

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    
    // return with componetns to build whole page...
    
    // call API when the page loads to then populate Body.js cards
    useEffect(() => {
        getEmployees();
    }, []);

    function getEmployees() {

        API.getEmployees().then((res) => setEmployees(res.data.results))
            
    };


    
    //handleInput... for search function
    function handleInputChange (event)  {
        const { value } = event.target;
        setSearch( value );
    };


    return (

        <div className="directory">
            <Header />
            <Filters handleInputChange={handleInputChange} />
            <Body employees={employees} search={search}/>
            <Footer />
        </div>
    )
};

export default Directory;