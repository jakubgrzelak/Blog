import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header  className="nav nav--dashboard">
    <div className="nav-wrapper">
      <div>
      <ul>
      <li><NavLink  className="link" to="/">Home </NavLink></li>
      <li><NavLink className="link" to="/user-posts">My Posts </NavLink></li>
      <li><NavLink className="link" to="/create-post">Create a post </NavLink></li>
      <li><button className="link button--link" onClick={startLogout}>Logout</button></li>
  </ul>
        
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
