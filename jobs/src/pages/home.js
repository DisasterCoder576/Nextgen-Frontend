import './home.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import laplogo from "./laptop.png"
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

function Home() {
  return (
   
    <div>
      <Navbar bg="primary"  expand="lg" variant="dark">  
    <Container>  
        <Link to="/">
        <Navbar.Brand  >NextGen Home</Navbar.Brand>  

        </Link>
    
    </Container>  
  </Navbar> 

<div className="top-component">
  <div className="headingtext">
  Engage with next-gen Tech

  </div>
  <div className="subtext">
  You have landed at the right place. Now we'll help you land the
  right company or the right candidate. Engage with the very best on the
  planet with our AI powered tools that helps us show you the very best
  right at the top. It's easy to get started.

  </div>
</div>
      <div className="bottom-component">

    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '5vh'}}>
      
      <Link to="/jobpage"> 
      <Button style={{marginRight:'0 auto'}} variant="primary">Get Started</Button>{' '} 
      </Link>
      </div> 
      <div class='img'>

        <img src={laplogo}  alt="laplogo">

        </img>
      </div>
        </div> 
   
  </div> 
  );
}

export default Home;
