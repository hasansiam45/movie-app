import React, { useState } from 'react'
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './SignUp.scss';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {

    const app = initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Signed in successfully!');
            localStorage.setItem('login',true);
            navigate('/home');
            window.location.reload();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            setEmail('');
            setPassword('');
        });

    }

  

    

    return (
        <>
        <div>
            <div className="sign-up">
            <form className="form" onSubmit={handleSubmit}>
                <input type="email" value={email} placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/> <br/>
                <input type="password" value={password} placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/> <br/>
                <div className="btn">
                <button type="submit">Submit</button>
                </div>

                
            </form>


        </div>
        </div>
        <span className="switch">Don't have an account? <Link to="/signUp"><span className="signIn">Sign Up</span></Link> </span>
        </>
    )
}

export default SignIn
