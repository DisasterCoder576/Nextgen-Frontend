import './home.css';
import React from 'react';
import JobList from './alljobs';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
function JobPage() {
  return (
    <>
        <Navbar bg="primary"  expand="lg" variant="dark">  
    <Container>  
      <Navbar.Brand  >NextGen Home</Navbar.Brand>  
    
    </Container>  
  </Navbar>  
 <JobList>

</JobList>
    </>

 
   
  )
}

export default JobPage;