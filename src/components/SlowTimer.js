import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

import {
    Link
  } from "react-router-dom";




const SlowTimer = (
    {
        value, 
        setValue
    }
) => {
    const MAXSECONDS = 1;
    // initialize four states - seconds, isActive, reps, activity. Seconds will
    // store the value of the timer, isActive will store the 
    // timer's state for whether it is currentlu timing or paused, 
    // reps will store the value of the number of reps - stop timer after x many reps 
    const [seconds, setSeconds] = useState(MAXSECONDS);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(5);
    const [activity, setActivity] = useState('squeeze');
    let history = useHistory();


    // combine start and pause into one function/ button
    function toggle() {
        setIsActive(!isActive);
    }

    //  pauses the timer 
    function reset() {
        setSeconds(MAXSECONDS);
        setIsActive(false);
        setNumberReps(5);
        setActivity();
    }

    
    // detects when isActive is true and start the timer inside that function 
    useEffect(() => {
        let interval = null;
        let littleTimer = null;

        let countDown = () => {
            if (seconds ==0){
                if (reps ==0) {
                  // to get day of week 
                  var d = new Date();
                  var n = d.getDay();//5
                    let tempValue = [...value];
                    let currentDay = tempValue[n];
                    currentDay.time += 25/60
                      console.log(currentDay);
                      // send to progress page when done with reps                    
                  history.push("/progress");
                    setValue(
                        //increase time for the day 
                        //get the day number, where in array you are increasing 
                        // return the day of the week 
                        value = tempValue
                    )
                } else {
                    // reseting seconds to a different value
                    setSeconds(MAXSECONDS);
                    // resets the number of reps, countdowns number of reps 
                    setNumberReps(reps => reps - 1);
                    // reset activity
                    if (activity == 'rest') {
                        setActivity('squeeze');
                      } else {
                          setActivity('rest');
                    }
                }
            } else {
              setSeconds(seconds => seconds - 1);
            }
        }
        if (isActive) {
            
          interval = setInterval(countDown, 1000);
          console.log('we are creating interval');

          // 2nd set interval
            if (seconds == 0) {
              setSeconds(MAXSECONDS);
              countDown();
            }
        }
        return () => {
            clearInterval(interval); 
            clearInterval(littleTimer);
        }
      }, [isActive, seconds, reps, activity]);

    return (
        <div className='app'>

        <nav className='nav-timer'>
        <Link to="/progress">HOME</Link>
        <Link to="#">TIMER</Link>    
        <Link to="/guide">GUIDE</Link>
        </nav>

            <div className="time">
                <div className="row">
                    <h5>{activity}</h5>
                    <button className={activity == 'squeeze'? 'circle-timer-squeeze' : 'circle-timer-rest'}>{seconds}</button>
                    <h5>{reps} reps to go</h5>
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? <img src='/pause.png'/> : <img src='/start.png'/>}
                    </button>
                    {/* <button className="button" onClick={reset}>
                        Pause
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default SlowTimer;