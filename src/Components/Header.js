import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Route>
          <div className="nav-links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/connectwithus'>Connect With Us</NavLink>
            <NavLink to='/giving'>Giving</NavLink>
            <NavLink to='/service'>Register For In-Person Service</NavLink>
            <NavLink to='/registration'>Member Registration</NavLink>
            <NavLink to='/'>Login</NavLink>
          </div>
        </Route>
      </div>
    )
  }
}