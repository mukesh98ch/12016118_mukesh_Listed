import React from 'react';
import './login.css'
import Apple from '../Image/apple.png'
import Google from '../Image/google.png'



export default function Login() {

    return (
        <>
<div className="mainpage">
   <div className="left-h">
        <h1 className="Board">Board.</h1>
   </div>
   <div className="right-h">
     <div className="Signin">
       <div className='sign'> <h1>Sign In</h1></div>
        <h4>Sign in to your account</h4>

        <div className="Account1">
        <img src={Google} className='img1'/>
            <a href='' className='google'> Sign in with Google</a>
        </div>
        <div className="Account2">
        <img src={Apple} className='img2'/>
            <a href='' className='apple'>  Sign in with Apple</a>
        </div>
     </div>

     <div className="form">
      <form>
         <label className='email'>Email address </label>
         <br />

         <div >
         <input type="text" name="Enter Email address" className='blank1' required /></div>

         <br/>
         <label className='pass'>Password </label>
         <br />
         <div >
         <input type="password" name="pass" className='blank2' required /></div>
         <br/>
         <div className='forg'><a href=''>Forgot password?  </a></div>
        <br/>
        <br/>
         <div >
            <button className="button-container" >Sign In</button>
         </div>
     </form>
     
     </div>
     <div className='acco'>
        <p>Don't have an account? <a href='/Signup'>Register here</a></p>
     </div>
    </div>

</div>

</>
    )
}
