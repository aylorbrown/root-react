import React from 'react'; 

import {
    Link
  } from "react-router-dom";

// destructuring version 
export default function Guide() {
    return(
        <div>
    <header>
        <h1>This is a GUIDE to KEGELS</h1>
    </header> 

    <Link to="/fasttimer">START</Link>

        </div>


    );
}