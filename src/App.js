import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Math Magician</h1>
      <nav style={{ padding: '1rem 0' }}>
        <Link to="/home">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
