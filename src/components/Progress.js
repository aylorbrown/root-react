import React from 'react'; 
import {
    Link
  } from "react-router-dom";
import ProgressChart from './ProgressChart';



// destructuring version 
export default function Progress() {
    return(
        <div>
        <Link to="/">HOME</Link>
        <Link to="#">GUIDE</Link>
        <ProgressChart />
    <Link to="/fasttimer">START</Link>
    </div>
    );
}

//  css chart library here 
