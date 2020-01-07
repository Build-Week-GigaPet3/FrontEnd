import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Landing from './components/Landing';
import Login from './components/Login';
import Footer from './components/Footer';

import './App.css';

import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Header />
        <Route path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/signup" component={SignUp} />
      <Footer />
    </Router>

  );
}

export default App;
