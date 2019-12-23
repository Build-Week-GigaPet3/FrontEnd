import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import TestLogin from './components/TestLogin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Route exact path='/' component={TestLogin} />
      </header>
    </div>
    </Router>

  );
}

export default App;
