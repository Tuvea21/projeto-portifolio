import React from "react";
import logo from "../logo.png";
//REACT FONTAWESOME IMPORTS
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { fatBars } from "@fortawesome/free-solid-svg-icons";




const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">

          <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="logo..."/> </a>
          <button className="navbar-toggler" id="tresbarras" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            
          </button> 
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre mim</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Servicos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Como Trabalho</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contactos</a>
              </li>
            </ul>
        </div>

       </div>

  </nav>
  )
}

export default Navbar;