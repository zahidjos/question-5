import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../FirebaseConfig';

const Sinup = () => {
  const navigate=useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth);
  const handelRegistration=(event)=>{
    event.preventDefault();
    const email= event.target.email.value;
    const password=event.target.password.value;
    
    createUserWithEmailAndPassword(email,password);
   }

   if(user || user1){
    navigate('/')
  }
    return (
        <div className='pt-20'>
            <p className='text-center'>Registration page</p>
            <div className="card w-1/2 m-auto bg-base-100 p-5 shadow-xl">
                <form onSubmit={handelRegistration}>
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
  <input type="submit" className="btn w-1/2 btn-accent" value="SignUp" />
  </form>
 
         </div>

         <button onClick={()=>signInWithGoogle()} className="btn w-3/12 mt-10 mx-auto btn-info">SignIn with Google</button>
         {error && <p>{error.message}</p>}
        </div>
    );
};

export default Sinup;