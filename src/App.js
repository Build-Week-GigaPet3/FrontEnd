import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import ChoosePet from './components/Pets/ChoosePet';
import NamePet from './components/Pets/NamePet';
import FeedPet from './components/Pets/FeedPet';

import './App.css';

import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path='/choosepet' component={ChoosePet} />
        <Route exact path='/namepet' component={NamePet} />
        <Route exact path='/feedpet' component={FeedPet} />
      <Footer />
    </Router>
  );
}

export default App;
