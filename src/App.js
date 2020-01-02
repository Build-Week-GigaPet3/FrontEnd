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

// sign up page
import SignUp from './components/SignUp';

// phone sign up page
import SignUpPhone from './components/SignUpPhone';

// confirm phone number code page
import PhoneConfirm from './components/PhoneConfirm';

// phone sign up details page after confirmation
import SignUpPhoneDetails from './components/SignUpPhoneDetails';

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

          <Route path="/register">
            <SignUp />
          </Route>

          <Route path="/registerphone">
            <SignUpPhone />
          </Route>

          <Route path="/confirmphone">
            <PhoneConfirm />
          </Route>

          <Route path="/registerphonedetails">
            <SignUpPhoneDetails />
          </Route>
        </header>
      </div>
    </Router>

  );
}

export default App;
