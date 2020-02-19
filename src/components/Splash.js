import React, { useEffect, useContext } from 'react'; 
import {
    Link
  } from "react-router-dom";
import { UserContext } from './UserContext';

export default function Splash() {
    // create variable to give access to context (usercontext) 
    // let [userdata, setUserData] = useContext(UserContext);

    // useEffect(() => {
    //     let savedData = JSON.parse(
    //         localStorage.getItem('reps') || {}
    //     ) 
    //     setUserData(savedData);
    //     // console.log(setUserData);
    // }, []);

    return(
        <div>
    <header>
        <h1>UNTITLED KEGEL APP</h1>
    </header> 
    <Link to="/guide">START</Link>

        </div>
    
    );
}

// function loading data from local storage 
// convert it after it loads, then save to UserContext


