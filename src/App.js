import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Landing from './components/Landing';
import Login from './components/Login';

import './App.css';

import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/signup">
          <SignUp />
        </Route>
    </Router>

  );
}

export default App;
