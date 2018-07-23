import React from 'react';
import BlogPostsList from './BlogPostsList';
import Footer from './Footer';
import FrontHeader from './FrontHeader';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <FrontHeader />
    <BlogPostsList />
    <Footer  />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
