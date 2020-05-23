import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

 const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = initialState
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            createUserProfileDocument(user, { displayName });

            this.setState(initialState)
        } catch(err) {
            console.log(err)
        }
    }

    handleChange = event => {
        event.preventDefault();
        const{ name , value } = event.target;
        this.setState({[name]: value})

    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput 
                type="text"
                name='displayName'
                label='DisplayName'
                value={displayName}
                onChange={this.handleChange}
                required
                />
                <FormInput 
                type="email"
                name='email'
                label='Email'
                value={email}
                onChange={this.handleChange}
                required
                />
                <FormInput 
                type="password"
                name='password'
                label="Password"
                value={password}
                onChange={this.handleChange}
                required
                />
                <FormInput 
                type="password"
                name='confirmPassword'
                label='ConfirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;