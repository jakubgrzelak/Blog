import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Footer = ( { startLogin }) => (
    <div className="footer">
     <span>Jakub Grzelak &copy 2018</span>
    
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
  });

 // <button className="button" onClick={startLogin}>Login with Google</button>

export default connect(undefined, mapDispatchToProps)(Footer)