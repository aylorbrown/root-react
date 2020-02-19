import React, { useContext } from 'react'; 
import {
    Link
  } from "react-router-dom";
import ProgressChart from './ProgressChart';
import { UserContext } from './UserContext';



export default function Progress() {
    const {value} = useContext(UserContext);
    return(
        <div>
            <nav>
        HOME 
        GUIDE
            </nav>
        <h3>{value}</h3>
        {/* css chart library here  */}
        <ProgressChart />
    <Link to="/fasttimer">START</Link>
    </div>
    );
}
