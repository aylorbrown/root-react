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
import Nav from './components/Nav';



export default function AppRouter() {
  const [value, setValue] = useState({});

  useEffect(() => {
    let savedData = JSON.parse(
        localStorage.getItem('reps') || {}
    ) 
  setValue(savedData);
}, []);

  return (
    <Router>
      <div>
        {/* <li><Link to="/timer">START</Link></li> */}
        {/* <li><Link to="/guide">GUIDE</Link></li>
        <li><Link to="/progress">PROGRESS</Link></li> */}
      {/* <Timer /> */}

      {/* decides which Route element to render depending on the path prop */}
      <Switch>

      <Route exact path="/">
        <Splash />
      </Route>

      <Route path="/guide">
        <Guide />
      </Route>


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



      <Route path="/nav">
        <Nav />
      </Route>


      </Switch>
      </div>

    </Router>
  );
}

