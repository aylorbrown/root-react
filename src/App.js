import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// import { Provider } from 'react-redux';
import FastTimer from './components/FastTimer';
import SlowTimer from './components/SlowTimer';
import Splash from './components/Splash';
import Guide from './components/Guide';
import Progress from './components/Progress';
import ProgressChart from './components/ProgressChart';
import UserContext from './components/UserContext';



export default function AppRouter({ location }) {
  // use useState for gloabl state 
  const [value, setValue] = useState(
    [
      {day: 7, minutes: 2.25},
      {day: 1, minutes: 4},
      {day: 2, minutes: 3},
      {day: 3, minutes: 2},
      {day: 4, minutes: 1},
      {day: 5, minutes: 0},
      {day: 6, minutes: 1.5}
    ]
  );
 
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

      {/* decides which Route element to render depending on the path prop */}
      <Switch location={location}>

      <Route exact path="/" component={Splash}>
        <Splash />
      </Route>

      <Route path="/guide" component={Guide}>
        <Guide />
      </Route>

      {/* use React Router for gloabl state  */}
      <Route path="/progress" component={Progress}>
        <Progress 
        value={value}
        />
      </Route>

      <Route path="/progresschart">
        <ProgressChart 
        value={value}
        />
      </Route>

      <Route path="/fasttimer" component={FastTimer}>
        <FastTimer 
        value={value}
        setValue={setValue}/>
      </Route>

      <Route path="/slowtimer" component={SlowTimer}>
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


