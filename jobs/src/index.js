import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./pages/home";
import JobPage from './pages/jobpage';
import SpecificJob from './pages/specificjob';
import reportWebVitals from './reportWebVitals';
import { Router, Route, Routes, BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <BrowserRouter basename={process.env.PUBLIC_URL}>
<Routes>
<Route path="/" element= {<Home />}/>
  <Route path = "/jobpage" element = {<JobPage />} />
  <Route path = "/specificjob/:id" element = {<SpecificJob />} />
</Routes>


</BrowserRouter>
    </React.StrictMode>




  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
