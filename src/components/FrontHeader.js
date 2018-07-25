import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <div className="nav">
        <div className="nav-wrapper"><br></br>
            <ul>
                <li><NavLink  className="link" to="/">Home </NavLink></li>
                <li><NavLink className="link" to="#">Posts </NavLink></li>
                <li><NavLink className="link" to="#">Contact </NavLink></li>
                <li><NavLink className="link" to="/signup">Sign up </NavLink></li>
                <li><NavLink className="link" to="/signin">Sign in </NavLink></li>
                <li><NavLink className="link" to="#">About me </NavLink></li>
            </ul>
            
        </div>
        <h1>Dolomites - the most beautiful part of the world!</h1>
    </div>
);