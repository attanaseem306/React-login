import React from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, auth } from './config/firebse'



function Login() {

  let nav = useNavigate()

  const go3 = () => {
    nav('/Sign')
  }

  function take2() {

    let email = document.getElementById("email2").value;
    let password = document.getElementById("pass2").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Login Sucessfully")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }


  return (
    <>
      <div>
        <div className="mainAll">
          <div className="main">
            <h1 className="hed">LOgin</h1>
            <input className="mt-5 email" type="email" id="email2" placeholder="Email" />
            <input className="mt-4 password" type="text" id="pass2" placeholder="Password" />
            <button className="btn3 mt-4" onClick={take2}>Login</button>
            <a onClick={go3} className="anchor" href="#"> Sign Up ?</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login