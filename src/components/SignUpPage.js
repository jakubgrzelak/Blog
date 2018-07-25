import React from 'react';
import FrontHeader from './FrontHeader';
import Footer from './Footer';
import SignUpFrom from './SignUpFrom';


export default class SignUpPage extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView({
      behavior: "smooth"
    });
  }
  render () {
    return (
      <div> 
        <FrontHeader />
        <div  ref={node => this.node = node}>
          <SignUpFrom />
        </div>
        <Footer />
      </div> 
    )
  }
}
   

