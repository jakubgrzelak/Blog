import React from 'react';
import FrontHeader from './FrontHeader';
import { firebase } from '../firebase/firebase';
import { withFormik, Form, Field } from 'formik';
import  Footer  from './Footer';

class SignIn extends React.Component {
    componentDidMount() {
        this.node.scrollIntoView({
          behavior: "smooth"
        });
      }

    render () {
        return (
        <div>
            <FrontHeader />
            <div className="content-container">
                <div  ref={node => this.node = node}></div>
                <Form className="form">
                    <h1>Sign In Now!<span>New adventure or new ideas? Share them with others!</span></h1>
                    <div className="form__input-group">
                        {this.props.errors.signIn && <span className="form__error-message">{this.props.errors.signIn}</span>}
                        <Field className="form__input" type="email" name="email" placeholder="Enter your email" />
                        <Field className="form__input" type="password" name="password" placeholder="Enter your password" />
                        <button type="submit" className="button">Sign In</button>
                    </div>
                </Form>
            </div>
            <Footer />
        </div>
        );
    }
}

export default withFormik({
   handleSubmit({ email, password }, {setErrors}) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrors({
            signIn: errorMessage
        });
        console.log(errorCode, errorMessage);
      });
   }
})(SignIn);


