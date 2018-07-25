import React from 'react';
import FrontHeader from './FrontHeader';
import Footer from './Footer';
import SignUpFrom from './SignUpFrom';


export default class SignUpPage extends React.Component {
  render () {
    return (
      <div> 
        <FrontHeader />
        <SignUpFrom />
        <Footer />
      </div> 
    )
  }
}
   

