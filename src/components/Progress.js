import React, { useContext } from 'react'; 
import {
    Link
  } from "react-router-dom";
import ProgressChart from './ProgressChart';
import UserContext from './UserContext';


export default function Progress() {
    const {value} = useContext(UserContext);
    return(
        <div className='app'>
        
        <nav className='guide'>
        <Link to="#">HOME</Link>    
        <Link to="/guide">GUIDE</Link>
        </nav>
        
        <ProgressChart />
    <Link to="/fasttimer">START</Link>
    </div>
    );
}
