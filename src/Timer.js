import React, { useEffect } from 'react';
import { useState } from 'react';


const Timer = () => {

    // initialize three states - seconds, isActive, reps. Seconds will
    // store the value of then timer, isActive will store the 
    // timer's state for whether it is currentlu timing or paused, 
    // reps will store the value of the number of reps - when to stop
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [reps, setNumberReps] = useState(2);
    // add a variable to stop the timer after x many of turns 

    // combine start and pause into one function 
    function toggle() {
        setIsActive(!isActive);
    }

    //  reset the timer 
    function reset() {
        setSeconds(0);
        setIsActive(false);
        setNumberReps(2);
        // add that variable here 
    }

    // detects when isActive is true and start the timer inside that function 

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
              if (seconds >=5){
                  // reseting seconds to a different value
                  setSeconds(0);
                // clearInterval(interval);
              } else {
                setSeconds(seconds => seconds + 1);
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
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                    </button>
                    <button className="button" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Timer;