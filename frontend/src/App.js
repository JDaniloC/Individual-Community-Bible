import React from 'react';
import Routes from './routes';

import './App.css';

function App() {
  return (
    <div className="container">
      <h1> Bible Comment </h1>
      <sub> A Program for His Glory </sub>
      
      <div className="content">
        <Routes />
      </div>

      <footer>
        Developed JDaniloC
      </footer>
    </div>
  );
}

export default App;