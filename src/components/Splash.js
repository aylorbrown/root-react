import React from 'react'; 

import {
    Link
  } from "react-router-dom";

// destructuring version 
export default function Splash() {
    return(
        <div>
    <header>
        <h1>Welcome to Aylor's Untitled Kegels APP</h1>
    </header> 
    <Link to="/guide">START</Link>

        </div>


    
    );
}