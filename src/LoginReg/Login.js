import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast} from 'react-toastify';
import './Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../Firebase.init';

const Login = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    

    const [submitInfo, setSubmitInfo]  = useState({
        email : "",
        password : ""
    })

    const [error, setError] = useState({
        email : "",
        password : ""
    })

    const handleEmail = (event) =>{
        const emailRequired =  /\S+@\S+\.\S+/;
        const validEmail = emailRequired.test(event.target.value);
        if(validEmail){
            setSubmitInfo({...submitInfo, email : event.target.value})
            setError({...error, email:''})
        }
        else{
            setError({...error, email :'Invalid Email'})
            setSubmitInfo({...submitInfo, email:""})
        }
    } 

    const handlePassword =(event) =>{
        const passwordRequired =  /.{6,}/;
        const validPassword = passwordRequired.test(event.target.value);
        if(validPassword){
            setSubmitInfo({...submitInfo, password : event.target.value})
            setError({...error, password:''})
        }
        else{
            setError({...error, password :'Invalid Password'})
            setSubmitInfo({...submitInfo, password:""})
        }
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(submitInfo.email, submitInfo.password)
         
    }
    useEffect(() => {
        if (error1) {
            switch(error1?.code) {
                case "auth/invalid-email" : toast('Invalid email ! please valid email');
                    break;
                case 'auth/invalid-password': toast('Wrong-password')
                    break;
                default:
                    toast('something-went-wrong')
            }
        }
    }, [error1])

    const location = useLocation();
    // useEffect(() => {
        let from = location?.state?.from?.pathname || "/"
        if (user) {
            navigate(from, { replace: true })
        }
    // }, [user])

    
    

    const navigateRegister = () => {
        navigate('/register')
    }
    return (
        <div className='login-container'>
            <div className='login-main-container'>
            <div className='title'>LogIn</div>
            <form onSubmit={handleLoginSubmit}>
                <input onChange={handleEmail} type="email" placeholder='Your Email' required/><br />
                <p className='text-danger'>{error.email}</p>
                <input onChange={handlePassword} type="Password" placeholder='Your Password' required/><br />
                <p className='text-danger'>{error.password}</p>
                <button>Login</button>
                <SocialLogin></SocialLogin>
            </form>

            
            <h6 onClick={navigateRegister}>Please Register</h6>

        </div>
        </div>
    );
};

export default Login;