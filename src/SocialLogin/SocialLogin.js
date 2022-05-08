import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import './SocialLogin.css'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div onClick={()=>signInWithGoogle()} className='social-container'>
            <h4>SignIn Google</h4>
        </div>
        </div>
    );
};

export default SocialLogin;