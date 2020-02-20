import React, { useState } from 'react'; 
import {useSpring, animated} from 'react-spring'
import SplashCircle from './SplashCircle'

import {
    Link
  } from "react-router-dom";

export default function Splash() {
    return(
        <div>
        <h1>ROOT</h1>
        
        <SplashCircle onClick='/guide'/>
    {/* <button class="circle-splash">START</button> */}
        </div>
    );
}

