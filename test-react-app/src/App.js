import React from 'react';
import sn_logo from "./signapps_icon_dark.png";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sn_logo} className="sn-logo" alt="logo" />
        <p>
          Hello from SignApps
        </p>
        <a
          className="App-link"
          href="https://www.getsignapps.com/about-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          About SignApps
        </a>
        <p>
          Powered by <strong style={{color: "#61dafb"}}>React</strong>
        </p>
        <img src={logo} className="React-app-logo" alt="React" />
      </header>
    </div>
  );
}

export default App;
