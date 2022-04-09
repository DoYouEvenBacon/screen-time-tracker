import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';

  import Home from './Home.js';
  import Trends from './Trends.js';
  import About from './About.js';
  import NoMatch from './NoMatch.js';


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<NoMatch />} />
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/trends' element={<Trends/>}/>
                <Route path='/about' element={<About />} />
            </Route>
            <Route path='/home' element={<App />}>
                <Route index element={<Home />} />
            </Route>
            
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
