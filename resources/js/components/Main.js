import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';


import Nav from './Nav';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HeroSection from './HeroSection';

function Main() {
    return (
        <Router>
            <main>
                <Nav />
                <HeroSection/>
                <Switch>
                    
                </Switch>
            </main>
        </Router>
    )
}

export default Main
ReactDOM.render(<Main />, document.getElementById('main'));