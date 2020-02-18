import React from 'react';
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




function App() {
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
        <Progress />
      </Route>

      <Route path="/progresschart">
        <ProgressChart />
      </Route>

      <Route path="/fasttimer">
        <FastTimer />
      </Route>

      <Route path="/slowtimer">
        <SlowTimer />
      </Route>


      </Switch>
      </div>

    </Router>
  );
}

export default App;
