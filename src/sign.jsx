import React from "react";
import { createUserWithEmailAndPassword ,auth } from "./config/firebse";

function SignUp() {

    function take(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("USer Signup suceefully")
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
    <input type="email" id="email" placeholder="Email"/>
    <input type="text" id="pass" placeholder="PAssword"/>
    <button onClick={take}>Submit</button>
</>
    )

}

export default SignUp

