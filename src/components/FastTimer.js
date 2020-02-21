import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Link
  } from "react-router-dom";


const FastTimer = (
    {
    value,
    setValue
    }
) => {
    const MAXSECONDS = 5;
    // initialize four states - seconds, isActive, reps, activity. Seconds will
    // store the value of the timer, isActive will store the 
    // timer's state for whether it is currently timing or paused, 
    // reps will store the value of the number of reps - stop timer after x many reps, activity toggles between squeeze and rest 
    const [seconds, setSeconds] = useState(MAXSECONDS);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(10);
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
        setNumberReps(10);
    }


    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
              if (seconds ==1){
                  if (reps ==0) {
                      // to get day of week 
                    var d = new Date();
                    var n = d.getDay();
                      let tempValue = [...value];
                      let currentDay = tempValue[n];
                      currentDay.time ++
                        console.log(currentDay);
                    history.push("/slowtimer");
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
                    // clearInterval(interval);
                  }
              } else {
                setSeconds(seconds => seconds - 1);
              }
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds, reps, activity]);
    return (
        <div className='app'>
        
        <nav className='guide'>
        <Link to="/progress">HOME</Link>
        <Link to="#">TIMER</Link>    
        <Link to="/guide">GUIDE</Link>
        </nav>
        

            <div className="time">
                <div className="row">
                    <h5>{activity}</h5>
                    <button className={activity == 'squeeze'? 'circle-timer-squeeze' : 'circle-timer-rest'}>{seconds}</button>
                    
                    {/* <h1>{seconds}</h1> */}
                    <h5>{reps} reps to go</h5>
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                    </button>
                    {/* <button className="button" onClick={reset}>
                        Pause
                    </button> */}

                    <Link to="/slowtimer">NEXT</Link>

                </div>
            </div>
        </div>
    );
}



export default FastTimer;