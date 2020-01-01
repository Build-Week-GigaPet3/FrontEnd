import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import TestLogin from './components/TestLogin';
import Header from './components/Header';
import './App.css';

// testing buttons
import ButtonLarge from './components/buttons/ButtonLarge';
import GoogleSignUp from './components/buttons/GoogleSignUp';
import ButtonSmall from './components/buttons/ButtonSmall';
import EmailSignUp from './components/buttons/EmailSignUp';
import PhoneSignUp from './components/buttons/PhoneSignUp';
import ButtonLargeAlt from './components/buttons/ButtonLargeAlt';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <header className="App-header">
          <Route exact path='/' component={TestLogin} />

          {/* This route is just for testing buttons and components. Will delete later. */}
          <Route path='/buttons'>
            <ButtonLarge title="Large Button" />
            <ButtonLargeAlt title="Alt Large Button" />
            <ButtonSmall title="Small Button" />
            <GoogleSignUp />
            <EmailSignUp />
            <PhoneSignUp />
          </Route>

        </header>
      </div>
    </Router>

  );
}

export default App;
