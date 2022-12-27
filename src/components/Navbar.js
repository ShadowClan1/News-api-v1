
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


const Navbar=(props)=>{
 
 
  
    
    
  
   
    return (
      

      <div> 
        <nav className="navbar navbar-dark navbar navbar-dark fixed-top bg-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">h News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${props.linkk} `} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${props.linkk1} `} aria-current="page" to="/Top-headlines"
           >Top headlines</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${props.linkk2}`} aria-current="page" to="/All-News">All news</Link>
        </li>
       
      
        
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk3}`} aria-current="page" to="/business">Business</Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk4}`} aria-current="page" to="/entertainment">Entertainment </Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk5}`} aria-current="page" to="/general">General</Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk6}`} aria-current="page" to="/health">Health</Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk7}`} aria-current="page" to="/science">Science</Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk8}`} aria-current="page" to="/sports">Sports</Link></li>
         <li className="nav-item">
          <Link className={`nav-link ${props.linkk9}`} aria-current="page" to="/technology">Technology</Link></li>

      </ul>
     
    </div>
  </div>
</nav>
      </div>
      
          
    )
  }


export default Navbar