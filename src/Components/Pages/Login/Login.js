import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const [signInWithEmailAndPassword, user1, error1] = useSignInWithEmailAndPassword(auth);

    const handleLogIn = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const [ signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if(user || user1){
        navigate('/')
    }

    let errorElement;
    let errorElement1;
    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }
    // if(error1){
    //     errorElement1 = <p className="text-danger">Error: {error1?.message}</p>
    // }

    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    if(user){
        navigate(from, { replace: true })
    }

    return (
        <div className='login'>
            <h1 className='text-center fw-bolder p-5'>Login</h1>
            
            <Form onSubmit={handleLogIn} className="w-50 d-block m-auto login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
                required
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                ref={passRef}
                type="password"
                placeholder="Password"
                required
            />
            </Form.Group>
            {errorElement}
            {errorElement1}
            <div className='text-center'>
            <Button variant="primary" type="submit">
            Login
            </Button>
            <p className="mt-2">
            Not have an Account Yet?{" "}
            <Link to="/signup" className="text-success fw-bold">
                Sign up now
            </Link>
            </p>
            <p>
            Forgot Password?{" "}
            <Button
                className="text-white text-decoration-none btn bg-danger border-0 "
                // onClick={resetPassword}
            >
                Reset Password
            </Button>
            {/* <ToastContainer /> */}
            </p>
            </div>

            {/* google login */}
            <button
            onClick={() => signInWithGoogle()}
            className="w-25 mt-5 d-block btn btn-dark m-auto"
            >
            <FontAwesomeIcon icon={faGoogle} />  Sign In with Google
            </button>
        </Form>
        </div>
    );
};

export default Login;