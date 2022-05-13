import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
	
   
    return (      
        <nav className="navbar navbar-expand navbar-dark bg-info">
		<div className="container">            
			  <a href="https://github.com/kabirul">
			    <img src="https://amicacs.com/assets/images/logo.png" className="imground" alt="" /> 
			  </a> 		 
          <div className="navbar-nav mr-auto mleft">
            <li className="nav-item">
              <Link to={"/"} className="nav-link white-text">
                File Upload
              </Link>
            </li>            
          </div>
		   </div>	 
        </nav>
    );
  
}

export default Navbar; 