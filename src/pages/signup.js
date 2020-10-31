import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';

import * as ROUTE from '../constants/route';
import { useHistory } from 'react-router-dom';

function Signup() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName ==='' || password === '' || emailAddress === '';
    const handleSignup = (event) => {
        event.preventDefault();
        firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) => {
            result.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            }).then(() => {
                history.push(ROUTE.BROWSE);
            }).catch((e) => {
                setError(e.message);
                setFirstName('');
                setEmailAddress('');
                setPassword('');
            });
        })
        .catch((e) => {
            setError(e.message);
            setFirstName('');
            setEmailAddress('');
            setPassword('');
        });
    }
    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignup} method='POST'>
                    <Form.Input placeholder="First Name" value={firstName} onChange={({ target }) => setFirstName(target.value)} />

                    <Form.Input placeholder="Email Address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />
                    
                    <Form.Input type="password" autoComplete="off" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} />
                    
                    <Form.Submit disabled={isInvalid} type='submit'>Sign Up</Form.Submit>
                </Form.Base>
                <Form.Text>
                    Already have an account? <Form.Link to={ROUTE.SIGN_UP}>Sign In!</Form.Link>
                </Form.Text>
                <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn More.</Form.SmallText>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}

export default Signup;