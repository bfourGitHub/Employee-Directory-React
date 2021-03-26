import React from 'react';

import API from '../utils/API';

import Body from '../components/Body';
import Header from '../components/Header';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
 


function Directory () {

    
    // return with componetns to build whole page...
    
    // call API when the page loads to then populate Body.js cards
    
    //handleInput... for search function

    
    return (

        <div className="directory">
            <Header />
            <Filters />
            <Body />
            <Footer />
        </div>
    )
};

export default Directory;