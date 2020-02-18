import React, { useEffect } from 'react';
import { useState } from 'react';


const Timer = () => {

    // initialize three states - seconds, isActive, reps. Seconds will
    // store the value of the timer, isActive will store the 
    // timer's state for whether it is currentlu timing or paused, 
    // reps will store the value of the number of reps - when to stop
    const [seconds, setSeconds] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(10);
    // add a variable to stop the timer after x many of turns 

    // combine start and pause into one function/ button
    function toggle() {
        setIsActive(!isActive);
    }

    //  pause the timer 
    function reset() {
        setSeconds(5);
        setIsActive(false);
        setNumberReps(10);
        // add that variable here 
    }

    // detects when isActive is true and start the timer inside that function 

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
              if (seconds ==1){
                  // reseting seconds to a different value
                  setSeconds(5);
                  // resets the number of reps, countdowns number of reps 
                  setNumberReps(reps => reps - 1);
                // clearInterval(interval);
              } else {
                setSeconds(seconds => seconds - 1);
              }
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);

    return (
        <div className='app'>
            <div className="time">
                <div className="row">
                    <h1>{seconds}</h1>
                    <h3>{reps} reps to go</h3>
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                    </button>
                    {/* <button className="button" onClick={reset}>
                        Pause
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default Timer;