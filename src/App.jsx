import React from "react";
import axios from 'react'
import { useNavigate } from "react-router-dom";
function App() {
  
  let na=useNavigate()

  const go=()=>{
  na('/Sign')
  }


  return (
    <div  className="App" >
      <button onClick={go}>SIgn UP</button>
    </div>
  );
}

export default App;


