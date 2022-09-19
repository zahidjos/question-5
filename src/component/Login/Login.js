import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../FirebaseConfig'

import {useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
  const navigate=useNavigate();
  const location=useLocation();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useSignInWithEmailAndPassword(auth);
  const handelLogIn=(event)=>{
     event.preventDefault();
     const email= event.target.email.value;
     const password=event.target.password.value;
     
     signInWithEmailAndPassword(email,password);
    }

    if(user || user1){
      let from = location.state?.from?.pathname || "/";
      navigate(from,{ replace: true });
      
    }
  
    return (
        <div className='pt-20'>
            <p className='text-center'>Log In page</p>
             <div className="card w-1/2 m-auto bg-base-100 p-5 shadow-xl">
                <form onSubmit={handelLogIn}>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Enter your Email?</span>
    </label>
  <input type="text" name='email' placeholder="Enter your email" className="input input-bordered w-full " />
  </div>

  <div className="form-control my-5 w-full ">
  <label className="label">
    <span className="label-text">Password</span>
    </label>
  <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full " />
  </div>
  {error1 && <p>{error1.message}</p>}
  <input type="submit" className="btn w-1/2 btn-accent" value="Log In" />
  </form>
         <div className='my-10 you hove no account.'>you hove no account.<Link className='font-bold' to='/signup'>please go to registration</Link></div>
         </div>

         <button onClick={()=>signInWithGoogle()} className="btn w-3/12 mt-10 mx-auto btn-info">SignIn with Google</button>
         {error && <p>{error.message}</p>}
        </div>
    );
};

export default Login;