import React, { useState } from 'react'
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './SignUp.scss';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const app = initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Signed up successfully! Login with your account");
            navigate('/signIn');
            window.location.reload();

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    }

    return (
        <div className="sign-up">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" onChange={(e)=> setName(e.target.value)}/> <br/>
                <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/> <br/>
                <input type="password" placeholder="Create your password" onChange={(e)=> setPassword(e.target.value)}/> <br/>

                <div className="btn">
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
