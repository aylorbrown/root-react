import React, {useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import { Provider } from 'react-redux';
import FastTimer from './components/FastTimer';
import SlowTimer from './components/SlowTimer';
import Splash from './components/Splash';
import Guide from './components/Guide';
import Progress from './components/Progress';
import ProgressChart from './components/ProgressChart';
import UserContext from './components/UserContext';



export default function AppRouter() {
  // use useState for gloabl state 
  const [value, setValue] = useState(
    [
      {day: 7, time: 0},
      {day: 1, time: 0},
      {day: 2, time: 0},
      {day: 3, time: 0},
      {day: 4, time: 0},
      {day: 5, time: 0},
      {day: 6, time: 0}
    ]
  );
  // const [value, setValue] = useState(
  //   [
  //     //mon index 0
  //     {time: 5},
  //     {time: 6},
  //     {time: 4},
  //     {time: 1},
  //     {time: 4},
  //     {time: 15},
  //     {time: 10}
  //   ]
  // );

//   useEffect(() => {
//     let savedData = JSON.parse(
//         localStorage.getItem('reps') || {}
//     ) 
//   setValue(savedData);
// }, []);

  return (
    // provides information for every component using provider 
    <UserContext.Provider
      value={{
        value, 
        setValue
      }}
    >

    <Router>
      <div>
        
      {/* decides which Route element to render depending on the path prop */}
      <Switch>

      <Route exact path="/">
        <Splash />
      </Route>

      <Route path="/guide">
        <Guide />
      </Route>

      {/* use React Router for gloabl state  */}
      <Route path="/progress">
        <Progress 
        value={value}
        />
      </Route>

      <Route path="/progresschart">
        <ProgressChart 
        value={value}
        />
      </Route>

      <Route path="/fasttimer">
        <FastTimer 
        value={value}
        setValue={setValue}/>
      </Route>

      <Route path="/slowtimer">
        <SlowTimer 
        value={value}
        setValue={setValue}
        />
      </Route>



      </Switch>
      </div>

    </Router>
    </UserContext.Provider>
  );
}

