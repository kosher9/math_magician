import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bla</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
      <Outlet />
      <div className="App-Ctn">
        {/* <Calculator /> */}
      </div>
    </div>
  );
}

export default App;
