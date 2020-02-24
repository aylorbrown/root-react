import React from 'react'; 
import SplashCircle from './SplashCircle';

import {
    Link
  } from "react-router-dom";

export default function Guide() {
    return(
        <div className='app'>

        <nav className='guide'>
        <Link to="/progress">HOME</Link>
        <Link to="#">GUIDE</Link>
        </nav>

<div className='splash-circle-guide'>
<Link to="/fasttimer"><SplashCircle /></Link>
</div>
    
<p>
The pelvic floor is a group of muscles that attaches to the bones at the bottom of your pelvis. These muscles effectively form a hammock across the base of your pelvis that supports the internal organs above it. Having strong pelvic floor muscles give you proper control over our bladder and bowels, improve sexual performance and orgasm, help stabilize the hip joints, and act as a lymphatic pump for the pelvis. 
</p>
<p>
In Eastern traditions, the pelvic floor is known as the <b>root chakra</b> - it's where we tend to literally "hold" fears, specifically fears around primary instincts such as our health, our family's safety, and our financial security. It is a "stress container," in that it's where we process the emotion and house our fight or flight reactions. 
</p>
<p>
When we lose the connection to those deep muscles, it becomes difficult to relax the area, meaning the pelvic floor becomes perma-flexed. Imagine flexing your bicep constantly and never fully letting go and you get the idea: After a while, this would cause your arm to lose flexibility, strength, and the ability to relax. That's more or less what happens to the pelvic floor until you become aware of the stress and tension and do some work to alleviate it. Part of this is willfully relaxing and unclenching these muscles - and then directing energy to build strength. 
</p>
<p>
Use ROOT to do a quick alignment reboot throughout your day. Think of these exercises as pelvic floor push-ups. If you are unsure of how to find these muscles, they are the muscles you use to cut off your pee mid-stream. When you first try this exercise, stand up so you can feel the full power of the pelvic floor. First, slightly squeeze your pelvic floor. Notice how this locks up your jaw and hips? Then, pull up and hold (this is a Kegel!). You should feel a tightening around your vagina. Try not to tighten your butt or upper belly muscles. Then let go of the muscles. Stand down through your feet and notice how much more relaxed your face, jaw, and pelvis are. <b>If we learn to isolate these muscles with a brain-body connection, we have more power to control how we experience stress.</b>
</p>

<p>
- via @loroxburgh
</p>
        </div>
    );
}