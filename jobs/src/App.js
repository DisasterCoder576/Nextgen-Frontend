import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Home from "./pages/home";
import JobPage from './pages/jobpage';
import SpecificJob from './pages/specificjob';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
   
<BrowserRouter>
<Routes>
  <Route path="/" element= {<Home />}/>
  <Route path = "/jobpage" element = {<JobPage />} />
  <Route path = "/specificjob/:id" element = {<SpecificJob />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
