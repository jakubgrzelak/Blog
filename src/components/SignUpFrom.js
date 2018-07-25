import React from 'react';
import { firebase } from '../firebase/firebase';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


export const SignUpForm =  ({ 
    errors,
    touched,
    isSubmitting
}) => (
    <div>        
        <div className="content-container">
            <Form className="form">
                <h1>Sign Up Now!<span>Share your passion to Dolomites with others!</span></h1>
                <div className="form__input-group">
                    <div>
                        {touched.name && errors.name && <span className="form__error-message">{errors.name}</span>}
                        <Field className="form__input" type="text" name="name" placeholder="Name" />
                       
                    </div>
                    <div>
                        {touched.email && errors.email && <span className="form__error-message">{errors.email}</span>}
                        <Field className="form__input" type="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                        {touched.password && errors.password && <span className="form__error-message">{errors.password}</span>}
                        <Field className="form__input" type="password" name="password" placeholder="password" />
                    </div>
                    <div>
                        {touched.passwordConfirm && errors.passwordConfirm && <span className="form__error-message">{errors.passwordConfirm}</span>}
                        <Field className="form__input" type="password" name="passwordConfirm" placeholder="Confirm Password" />
                    </div>
                    <button className="button" type="submit" disabled={isSubmitting}>Submit</button>
                </div>
                
            </Form>
        </div>
    </div> 
);

export default withFormik({
    mapPropsToValues() {
        return {
            email: '',
            password: '',
            passwordConfirm: '',
            name: ''
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Email is not vaild').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        passwordConfirm: Yup.string().min(6, 'Too few characters').oneOf([Yup.ref('password'), null], "Passwords don't match").required('Confirm Password is required'),

    }),
    handleSubmit({ email, password }, { resetForm, setErrors, setSubmitting}) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage);
            resetForm()
          });
          setSubmitting();
    }
})(SignUpForm);