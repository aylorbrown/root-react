import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import FastTimer from './components/FastTimer';
import SlowTimer from './components/SlowTimer';
import Splash from './components/Splash';
import Guide from './components/Guide';
import Progress from './components/Progress';
import ProgressChart from './components/ProgressChart';
import UserContext from './components/UserContext';



export default function AppRouter() {
  // uses useState for global state 
  const [value, setValue] = useState(
    [
      {day: 7, minutes: 0},
      {day: 1, minutes: 0},
      {day: 2, minutes: 0},
      {day: 3, minutes: 0},
      {day: 4, minutes: 0},
      {day: 5, minutes: 0},
      {day: 6, minutes: 0}
    ]
  );

  return (
    // provides information for every component using provider 
    <UserContext.Provider
      value={{
        value, 
        setValue
      }}
    >

    <Router>
      
      {/* decides which Route element to render depending on the path prop */}
      <Switch>

      <Route exact path="/">
        <Splash />
      </Route>

      <Route path="/guide">
        <Guide />
      </Route>

      {/* use React Router for global state */}
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

    </Router>
    </UserContext.Provider>
  );
}

