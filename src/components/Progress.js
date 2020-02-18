import React from 'react'; 
import {
    Link
  } from "react-router-dom";
import ProgressChart from './ProgressChart';



// destructuring version 
export default function Progress() {
    return(
        <div>
    <header>
        <h1>This is your PROGRESS</h1>
    </header> 
        <ProgressChart />
    <Link to="/">HOME</Link>
    </div>
    );
}

//  css chart library here 
