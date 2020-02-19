import React from 'react'; 
import {
    Link
  } from "react-router-dom";

// destructuring version 
export default function Nav() {
    return(
        <div>
    <Link to="/">HOME</Link>
    <Link to="/guide">GUIDE</Link>

        </div>
    
    );
}