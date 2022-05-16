import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [ signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    return (
        <div className='login'>
            <h1 className='text-center fw-bolder p-5'>Login</h1>
            {/* onSubmit={handleLogIn} */}
            <Form  className="w-50 d-block m-auto login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                // ref={emailRef}
                type="email"
                placeholder="Enter email"
                required
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                // ref={passwordRef}
                type="password"
                placeholder="Password"
                required
            />
            </Form.Group>
            {/* {errorElement} */}
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
            {/* google login html */}
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