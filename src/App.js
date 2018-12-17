import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Web 
          </a>

          <h1> Header </h1>
        </header>
        <body className="App-body">
          <div> React Web Prakerin </div>
        </body>
        <footer className="App-footer">
          <div> Footer </div>
          <div> Copyright Reserved 2018 </div>
        </footer>
      </div>
    );
  }
}

export default App;