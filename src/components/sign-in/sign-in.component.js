import React from 'react'

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signInWithGoogle, auth } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''})

        } catch(err){
            console.log(err)
        }
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        event.preventDefault();
        const { value, name } =  event.target;

        this.setState({ [name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already Have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required
                    label="Email"/>
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required
                    label="password"/>
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>{' '}Sign in with Google {' '}</CustomButton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn;

