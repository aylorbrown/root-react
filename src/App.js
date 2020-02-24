import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
 

import FastTimer from './components/FastTimer';
import SlowTimer from './components/SlowTimer';
import Splash from './components/Splash';
import Guide from './components/Guide';
import Progress from './components/Progress';
import ProgressChart from './components/ProgressChart';
import UserContext from './components/UserContext';

const apiKey = "e5e8ae85-18a9-4c69-b321-f8a2068a7100";

function getToken () {
  return axios({
    url:'https://jsonbin.org/_/bearer',
    headers: {
      authorization: `token ${apiKey}`
    }
  }).then( resp => {
    console.log(resp.data);
    console.log('hello! hcxjhsdknsjdk  hfdskjnsd,jksdnf  hiflsanjkx')
    return resp.data.token;
  })
}

function saveData (dataToSave) {
  // get the token from getToken 
  // make an axios POST 
  // in axios post, send data to save 
  getToken()
  .then(token => {
    // make the axios post 
    axios({
      url: 'https://cors-anywhere.herokuapp.com/http://jsonbin.org/aylorbrown/kegel', 
      method: 'POST', 
      headers: {
        authorization: `Bearer ${token}` 
      }, 
      data: dataToSave
    });
  });
}

function getData () {
  return getToken()
  .then(token => {
    //
    return axios({
      url: 'https://cors-anywhere.herokuapp.com/http://jsonbin.org/aylorbrown/kegel',
      headers: {
        authorization: `Bearer ${token}` 
      }
    })
  })
  .then(resp => {
    console.log('Got data!');
    return resp.data

  })
}

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
    // sets state
    getData()
    .then(data => {
      console.log('loading data from the API!')
      setValue(data)
    })
  return (
    // provides information for every component using provider 
    <UserContext.Provider
      value={{
        value, 
        setValue, 
        saveData
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
        setValue={setValue}
        saveData={saveData}/>
      </Route>

      <Route path="/slowtimer">
        <SlowTimer 
        value={value}
        setValue={setValue}
        saveData={saveData}
        />
      </Route>
      </Switch>

    </Router>
    </UserContext.Provider>
  );
}

