import React, { useState, useEffect } from "react";
import {  useParams} from "react-router-dom";
import {Card, Row, Col} from 'react-bootstrap';
import ReactLogo from './logo.svg';
import { Link } from 'react-router-dom';
import './specificjob.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
import { MDBInput } from 'mdb-react-ui-kit';
import validator from 'validator'
function SpecificJob() {
    let {id} = useParams();  
    const [jobname, setjobname] = useState('loading...');
    const [company, setcompany] = useState('loading...');
    const [role, setrole] = useState('loading...');
    const [skills, setskills] = useState('loading...');
    const [ comp, setcomp] = useState('loading...')
    const [ years_min, setyears_min] = useState('loading...')
    const [email, setemail] = useState('');
    const [emailValid, setemailValid] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [postsuccess, setpostsuccess] = useState('') 
  const validateEmail = (e) => { 
    var emailtxt = e.target.value 
  
    if (validator.isEmail(emailtxt)) { 
      setEmailError('') 
      setemailValid(true);
    } else { 
      setEmailError('Enter valid Email!');
      setemailValid(false);
    } 
  } 
  const handleSubmit = event => {

    if(!emailValid){
      setEmailError('Enter valid Email!') 
      console.log('invalid', email);
    }
    else{
    console.log('handleClick 👉️', email);
      postjobapp();   
    }
    
  };


  const postjobapp = async () => {
    try {
      const response = await fetch(`http://www.localhost:5000/postjobapp?jobid=${id}&email=${email}`,
       {
        method: "GET",
       } 
       );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data);
      if(data.status === 'success'){
          setpostsuccess('Job Application Sent!');
      }
      

    } catch (error) {
      console.error('Error:', error);
    }
  }


    const fetchJob = async () => {
        try {
          const response = await fetch(`http://www.localhost:5000/getSpecificJob?jobid=${id}`,
           {
            method: "GET",
           } 
           );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json();
          console.log("network sent" + data);
          
          setcompany(data.company);
          setjobname(data.jobname);
          setskills(data.skills);
          setrole(data.role);
          setcomp(data.comp);
          setyears_min(data.years_min);

        } catch (error) {
          console.error('Error:', error);
        }
      }
      useEffect(() => {
            fetchJob();
    
      }, []);
    return (
        
 
<div className="gradient_background">    
<Navbar bg="primary"  expand="lg" variant="dark">  
    <Container>  
        <Link to="/">
        <Navbar.Brand  >NextGen Home</Navbar.Brand>  

        </Link>
    
    </Container>  
  </Navbar> 
                <div class = "cardblur" style = {{width: '120vh', margin: '0 auto', marginTop: '5vh' ,}}>
                    <Row>
                        <Col>
                        <div  >
                        <img src={ReactLogo} alt="React Logo" />

                        </div>
                        </Col>
                        <Col md={8}>
                      
                            <div>

     <div class="card">
  <div class="card-header">
  {company}
  </div>
  <div class="card-body">
    <h5 class="card-title">{jobname}</h5>

    <div style = {{marginBottom:'1vh'}}>
    <div class='highlight-gradient'>{
    
    skills[0] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    skills[1] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    skills[2] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    skills[3] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    skills[4] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    skills[5] 
    
    }</div>
    </div>
    <p class="card-text">{years_min} years of experience required</p>
    <p class="card-text">{role}</p>

    <MDBInput label='Enter your email and we will catch you!' 
    value = {email}
    onInput={e => setemail(e.target.value)}
    onChange={(e) => validateEmail(e)}
     id='typeEmail' type='email' />
    <div style={{ 
          fontWeight: 'bold', 
          color: 'red', 
        }}>{emailError}</div> 
  
         <button onClick={() => {
       handleSubmit();         
    }
    }
    
    class="btn btn-primary"> Send application!</button>
  <div style={{ 
          fontWeight: 'bold', 
          color: 'green', 
        }}>{postsuccess}</div> 
  </div>
</div>
   </div>

                        
                        </Col>
                    </Row>
                </div>

       

        </div>
    );
  }
  
  export default SpecificJob;