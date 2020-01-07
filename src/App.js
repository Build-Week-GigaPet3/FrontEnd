import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';

import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Header />
        <Route exact path='/login' component={Login} />
        <Route path="/signup">
          <SignUp />
        </Route>
    </Router>

  );
}

export default App;
