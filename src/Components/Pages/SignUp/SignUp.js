import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SignUp.css'

const SignUp = () => {
    const [ createUserWithEmailAndPassword, user1 ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true})


    const handleSignUp = (event) =>{
        event.preventDefault();
        const name = event.target.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        let path = `/`
        navigate(path)
    }


    const [ signInWithGoogle, user, loading, error ] = useSignInWithGoogle(auth)
    const navigate = useNavigate();
    if(user){
        navigate('/')
    }

    

    return (
        <div className='signUp'>
            <h1 className='text-center fw-bolder p-5'>Sign Up</h1>
            <Form onSubmit={handleSignUp} className="w-50 d-block m-auto login-form">
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
            />
            </Form.Group>
            <Button variant="primary" type="submit">
            Sign Up
            </Button>
            <p className="mt-2">
            Have an account?{" "}
            <Link to="/login" className="text-success fw-bold">
                Login now
            </Link>
            </p>
        </Form>
        <button
            onClick={() => signInWithGoogle()}
            className="w-25 mt-5 mb-5 d-block btn btn-dark m-auto"
            >
            <FontAwesomeIcon icon={faGoogle} />  Sign In with Google
            </button>
        </div>
    );
};

export default SignUp;