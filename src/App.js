import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Components/Header.js';
import Home from './Components/Navigation/Home.js';
import ConnectWithUs from './Components/Navigation/Connect.js';
import TitheOffering from './Components/Navigation/TitheOffering.js';
import RegisterService from './Components/Navigation/RegisterService.js';
import MemberRegister from './Components/Navigation/MemberRegister.js';
import Login from './Components/Navigation/Login.js';
import './App.css';
import { MobileTablet } from './Components/Responsive/MobileTablet.js';
import { LaptopDesktop } from './Components/Responsive/LaptopDesktop.js';

const AppRouter = () => {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path='/' exact component = { Home } />
          <Route path='/connectwithus' exact component = { ConnectWithUs } />
          <Route path='/giving' exact component = { TitheOffering } />
          <Route path='/service' exact component = { RegisterService }/>
          <Route path='/registration' exact component = { MemberRegister }/>
          <Route path='/login' exact component = { Login } />
        </Switch>
    </Router>
  )
}


export default function App() {
  const isMobileOrTablet = useMediaQuery({
    maxDeviceWidth: 1223,
  });

  const isRetina = useMediaQuery({
    resolution: 2
  });

  return (
    <div>
      { isMobileOrTablet  ?
        <MobileTablet> <AppRouter /> </MobileTablet> :
          <LaptopDesktop> <AppRouter /> </LaptopDesktop>
      }
      { isRetina  ?
        <MobileTablet> <AppRouter /> </MobileTablet> :
          <LaptopDesktop> <AppRouter /> </LaptopDesktop>
      }
    </div>
  );
};
