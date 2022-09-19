import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../FirebaseConfig';

const Menu = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  if(loading){
    return(
      <p>Loading....</p>
    )
  }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link className='font-medium' to='/'>Home</Link></li>
      <li><Link className='font-medium' to='/about'>about</Link></li>
      
      <li><Link className='font-medium' to='/protect'>Protected page</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link className='font-medium' to='/'>Home</Link></li>
      <li><Link className='font-medium' to='/about'>about</Link></li>
      
      <li><Link  className='font-medium' to='/protect'>Protected page</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {user?<button onClick={logout} className='btn btn-error'>Log out</button>: <Link className="btn btn-error" to='/login'>Log In</Link>}
 
  </div>
</div>
        </div>
    );
};

export default Menu;