import React from "react";
import { createUserWithEmailAndPassword ,auth } from "./config/firebse";
import './sign.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate()

    function take(){

    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("USer Signup suceefully")
      navigate("/afterSign")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

}


    return(
 <>
 <div>
  <div className="mainAll">
    <div  className="main">
      <h1  className="hed">Sign Up</h1>
    <input className="mt-5 email" type="email" id="email" placeholder="Email"/>
    <input className="mt-4 password" type="text" id="pass" placeholder="Password"/>
    <button className="btn3 mt-4" onClick={take}>SignUp</button>
    <a className="anchor" href="#"> Login ?</a>
    </div>
    </div>
  </div>
</>
    )

}

export default SignUp

