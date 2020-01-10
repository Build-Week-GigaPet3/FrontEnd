import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ChoosePet from './components/Pets/ChoosePet';
import NamePet from './components/Pets/NamePet';
import EditPet from './components/Pets/EditPet';
import FeedPet from './components/Pets/FeedPet';
import Calendar from './components/Calendar/Calendar';

import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('../img/rainbowbg.gif');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 49px;
  background-attachment:fixed;
  /* max-height: 100vh; */
  min-width: 320px;
  /* max-width: 700px; */
  /* margin: 0 auto; */
  /* border: 1px solid blue; */
  @media screen and (min-width: 568px) {
    background-position: center;
    background-size: contain;
    /* max-height: 900px; */
    background-position-y: 49px;
    background-attachment: fixed;
    /* background-position-x: 430px; */
  }
  .home::-webkit-scrollbar {
    width: 5px;
    }
  .home::-webkit-scrollbar-track {
    }
  .home::-webkit-scrollbar-thumb {
    background: lightgray;
    height: 100px; 
    }
  .home::-webkit-scrollbar-thumb:hover {
    background: #888; 
  }
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
`

function App() {
  return (
    <Router>
      <Header />
        <MainContainer className='main'>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/choosepet' component={ChoosePet} />
          <PrivateRoute path='/namepet' component={NamePet} />
          <PrivateRoute path='/editpet' component={EditPet} />
          <PrivateRoute path='/feedpet' component={FeedPet} />
          <PrivateRoute path='/calendar' component={Calendar} />
        </MainContainer>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
