// import React, { useState } from 'react';
// import './SignupLogin.css';


// function Contact (){
//   const [isLogin,setIsLogin]=useState(true)
//   return(
//   <>
//   <div className="container">
//     <div className='form-container'>
//       <div className='form-toggle'>
//         <button className={isLogin ? 'active' : ""} onClick={()=> setIsLogin(true)}>Login</button>
//         <button className={!isLogin ? 'active' : ""} onClick={()=> setIsLogin(false)}>SignUp</button>
//       </div>
//       {isLogin ? <><div className='form'>
//         <h2>Login Form</h2>
//         <input type="email" placeholder='Enter your email' />
//         <input type="password" placeholder='Enter a password' />
//         <a href="#">Forgot password?</a>
//         <button>Login</button>
//         <p>Not a Member?<a href="#" onClick={()=>setIsLogin(false)}>Signup now</a></p> 
//         </div>
//         </>:<>
//         <div className='form'>
//         <h2> Signup Form</h2>
//         <input type="email" placeholder='Enter your email' />
//         <input type="password" placeholder='Enter a password' />
//         <input type="password" placeholder='Confirm password' />
//         <button>Signup</button>
//         </div>
//       </>}
//     </div>
   
//   </div>

//   </>
// );
// }

// export default Contact;