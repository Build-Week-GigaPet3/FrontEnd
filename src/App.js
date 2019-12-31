import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import TestLogin from './components/TestLogin';
import Header from './components/Header';
import './App.css';

// testing buttons
import ButtonLarge from './components/buttons/ButtonLarge';
import GoogleSignUp from './components/buttons/GoogleSignUp';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <header className="App-header">
          <Route exact path='/' component={TestLogin} />
          <Route path='/testing'>
            <ButtonLarge title="Sign Up" />
            <GoogleSignUp />
          </Route>
        </header>
      </div>
    </Router>

  );
}

export default App;
