import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <NavLink activeClassName="active" to="/home">Home</NavLink>
        <NavLink activeClassName="active" to="/about">About Us</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
      </ul>
    );
  }
}
