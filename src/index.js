import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Profile from './Profile.js';
import About from './About.js';
import * as serviceWorker from './serviceWorker';
import{
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
ReactDOM.render(

    <Router>
        <div>
            <Route exact path="/" component ={Home} />

            <Route path="/Profile" component={Profile} />
            <Route path="/About" component={About} />
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();