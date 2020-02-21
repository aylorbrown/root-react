import React from 'react'; 
// import {useSpring, animated} from 'react-spring'
import SplashCircle from './SplashCircle'

import {
    Link
  } from "react-router-dom";

export default function Splash() {
    return(
        <div className='root'>
        <h1>ROOT</h1>
        
        <Link to="/guide"><SplashCircle /></Link>



        {/* <SplashCircle /> */}
    {/* <button class="circle-splash">START</button> */}
        </div>
    );
}

