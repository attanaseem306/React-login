import React from "react";
import axios from 'react'
import { useNavigate } from "react-router-dom";


import Nav from 'react-bootstrap/Nav';

function BasicExample() {



  
  let na=useNavigate()

  const go=()=>{
  na('/Sign')
  }


  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link> <button onClick={go}>SIgn UP</button></Nav.Link>
      </Nav.Item>
     
    </Nav>
  );
}

export default BasicExample;







//   return (
//     <div  className="App" >
//      
//     </div>
//   );
// }




