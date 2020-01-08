import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ChoosePet from './components/Pets/ChoosePet';
import NamePet from './components/Pets/NamePet';
import EditPet from './components/Pets/EditPet';
import FeedPet from './components/Pets/FeedPet';

import './App.css';


function App() {
  return (
    <Router>
      <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/choosepet' component={ChoosePet} />
        <PrivateRoute path='/namepet' component={NamePet} />
        <PrivateRoute path='/editpet' component={EditPet} />
        <PrivateRoute path='/feedpet' component={FeedPet} />
      <Footer />
    </Router>
  );
}

export default App;
