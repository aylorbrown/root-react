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
    // initialize three states - seconds, isActive, reps. Seconds will
    // store the value of the timer, isActive will store the 
    // timer's state for whether it is currentlu timing or paused, 
    // reps will store the value of the number of reps - stop timer after x many reps 
    const [seconds, setSeconds] = useState(MAXSECONDS);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(2);
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
        setNumberReps(2);
    }


    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
              if (seconds ==1){
                  if (reps ==0) {
                    history.push("/slowtimer");
                    setValue({
                        ...value, 
                        hello: 'aylor'

                        // next how does the chart want to receive the info?
                        // how to translate 
                    })
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
        
        <nav>
        HOME 
        TIMER-FAST     
        GUIDE
        </nav>
        

            <div className="time">
                <div className="row">
                    <h5>{activity}</h5>
                    <h1>{seconds}</h1>
                    <h5>{reps} reps to go</h5>
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                    </button>
                    {/* <button className="button" onClick={reset}>
                        Pause
                    </button> */}
                    <Link to="/slowtimer">Next</Link>

                </div>
            </div>
        </div>
    )
}


/// when the reps are done route to the progress page 

export default FastTimer;