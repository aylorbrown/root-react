// this file creates a context to share between components 

import React from 'react';

import { createContext } from 'react';

// pass initial value 
export const UserContext = createContext(null);

// functions to  save data and load data 


// where do i want to interact with the current user? 
// just the progress page?
// for capstone, will create a backend but for now i think 
// i only need UserContext on Progress page...
// though do i need UserContext on the timer pages to keep 
// track of the reps? 