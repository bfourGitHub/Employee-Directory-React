import React, { useEffect, useState } from 'react';

import API from '../utils/API';

import Body from '../components/Body';
import Header from '../components/Header';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Image from '../components/Image';
 


function Directory () {

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");    
        
    // return with componetns to build whole page...
    
    // call API when the page loads to then populate Body.js cards
    useEffect(() => {
        getEmployees();
    }, []);
    
    const getEmployees = () => {
        
        API.getEmployeeList().then((res) => setEmployees(res.data.results));
        
    };
    
    //handleInput... for search function
    function handleInputChange (event)  {
        const { value } = event.target;
        setSearch( value );
    };
    
    const [sortBy, setSortBy] = useState("");
     
    //Buttons for selecting a sort situation
    function handleSortBtnFirstNameAZ (az) {
        setSortBy(az);
        let employeesSortAZ;
        employeesSortAZ = employees.sort((a,b) => a.name.first.localeCompare(b.name.first));
        setEmployees(employeesSortAZ);
        console.log(sortBy, setSortBy);
    };

    function handleSortBtnFirstNameZA (za) {
        setSortBy(za);
        let employeesSortZA;
        employeesSortZA = employees.sort((a,b) => b.name.first.localeCompare(a.name.first));
        setEmployees(employeesSortZA);
        console.log(sortBy, setSortBy);
    };

    function handleSortBtnLastNameAZ (az) {
        setSortBy(az);
        let employeesSortLastAZ;
        employeesSortLastAZ = employees.sort((a,b) => a.name.last.localeCompare(b.name.last));
        setEmployees(employeesSortLastAZ);
        console.log(sortBy, setSortBy);
    };

    function handleSortBtnLastNameZA  (za) {
        setSortBy(za);
        let employeesSortLastZA;
        employeesSortLastZA = employees.sort((a,b) => b.name.last.localeCompare(a.name.last));
        setEmployees(employeesSortLastZA);
        console.log(sortBy, setSortBy);
    };

    return (

        // Add onclick to Filters to passes button info/event 
        //get onClick working... console log a value... then sort the array to update EMPLOYEES
        <div className="directory">
            <Header />
            <Image />
            <Filters handleInputChange={handleInputChange} handleSortBtnFirstNameAZ={handleSortBtnFirstNameAZ} 
            handleSortBtnFirstNameZA={handleSortBtnFirstNameZA} handleSortBtnLastNameAZ={handleSortBtnLastNameAZ} handleSortBtnLastNameZA={handleSortBtnLastNameZA} /> 
            <Title />
            <Body employees={employees} search={search}  />
            <Footer />
        </div>
    )
};

export default Directory;