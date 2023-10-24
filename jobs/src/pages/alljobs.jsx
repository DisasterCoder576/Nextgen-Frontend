import React, {useState, useEffect, useRef} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css'
import ReactLogo from './logo.svg';
import './home.css';
const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const [clickedjobID, setclickedJobID] = useState('');
    const elementRef = useRef(null)
    

    function onIntersection(entries){
        const firstEntry = entries[0];
        if(firstEntry.isIntersecting && hasMore){
            fetchMoreItems();
        }
    }    
    useEffect(()=>{
        const observer = new IntersectionObserver(onIntersection)
        if(observer && elementRef.current) {
            observer.observe(elementRef.current)
        }
        return () => {
            if(observer){
                observer.disconnect()
            }
    }
    
    },[jobs])

    async function fetchMoreItems(){
        try{
            const response = await fetch(`http://www.localhost:5000/getalljobs?skip=${page*5}`,
            {
                method:"GET",  
            }
            )
            console.log(response);
        
            const data = await response.json()
            console.log(data);
            if(data.length == 0){
                setHasMore(false);
            }
            else{
                setJobs(prevJobs => [...prevJobs, ...data]);
                setPage(prevPage => prevPage + 1 );
            }
        }
        catch(error){
            console.log(error);
        }
    
    }

    return (
        <> 
         <div>    
    {
           jobs.map(
                item=>
                <Card className = "innercard" key = {item._id} style = {{width: '80vh', margin: '0 auto', marginTop: '5vh'}}>
                    <Row>
                        <Col>
                        <div >
                        <img src={ReactLogo} alt="React Logo" />

                        </div>
                        </Col>
                        <Col md={8}>
                        <Card.Body>
                            <div>

     <div class="card">
  <div class="card-header">
  {item.company}
  </div>
  <div class="card-body">
    <h5 class="card-title">{item.jobname}</h5>

    <div style = {{marginBottom:'1vh'}}>
    <div class='highlight-gradient'>{
    
    item.skills[0] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    item.skills[1] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    item.skills[2] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    item.skills[3] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    item.skills[4] 
    
    }</div>
     <div class='highlight-gradient'>{
    
    item.skills[5] 
    
    }</div>
    </div>
    <p class="card-text">{item.years_min} years of experience required</p>
    <Link to= {"/specificjob/".concat(clickedjobID)} target="_blank">
         <button onClick={() => {
                setclickedJobID(item._id);
    }
    } class="btn btn-primary"> See more...</button>
     </Link>
  </div>
</div>
   </div>

                        </Card.Body>
                        </Col>
                    </Row>
                </Card>
           )

    }
        {
            hasMore && 
            <div ref ={elementRef} style = {{textAlign:'center'}}>
                Loading More Jobs...
            </div>
        }
       

        </div>
        </>
    )
}
export default JobList;