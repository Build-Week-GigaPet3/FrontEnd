import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';

// testing buttons
import ButtonLarge from './components/buttons/ButtonLarge';
import ButtonSmall from './components/buttons/ButtonSmall';
import EmailSignUp from './components/buttons/EmailSignUp';
import ButtonLargeAlt from './components/buttons/ButtonLargeAlt';

// sign up page
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <header className="App-header">
          <Route exact path='/login' component={Login} />

          {/* This route is just for testing buttons and components. Will delete later. */}
          <Route path='/buttons'>
            <ButtonLarge title="Large Button" />
            <ButtonLargeAlt title="Alt Large Button" />
            <ButtonSmall title="Small Button" />
            <EmailSignUp />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

        </header>
      </div>
    </Router>

  );
}

export default App;
