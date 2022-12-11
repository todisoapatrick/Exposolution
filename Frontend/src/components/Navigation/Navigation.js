import React, { useState } from "react";

import "./style.scss";
import { Link } from "react-router-dom";
import { HashLink as LinkHash } from "react-router-hash-link";
// import Modale from "../Modal/Modale";

function Navigation() {

  /* Handle Navbar Open */
  const [open, setOpen] = useState(false);
  const ImgSrc = () => {
    if (open) {
      return <i className='fa fa-circle'></i>;
    } else {
      return <i className='fa fa-bars'></i>;
    }
  };


  const HandleNav = () => {
    if (open) {
      return (
        <div className="MobileNav">
          <Link to={"#"}>Acceuil</Link>
          <Link to={"/#about"}>Apropos</Link>
          <Link to={"#howItWorks"}>Comment ça marche?</Link>
          <Link to={"#"}>Contact</Link>
        </div>
      );
    } else {
      return null;
    }
  };
  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  }; 
  return (
    <div className="Navbar" id="home">
      <div className="Navbar-brand">
        <h2>Logo</h2>
        <h3>
         Votre <span>logo ici</span>
        </h3>
      </div>
      <div className="Navbar-menu">
        <Link className="Navbar-item" to={"#"}>Acceuil</Link>
        <LinkHash className="Navbar-item" to={"/comm1/#propos"} smooth={true} offset={0} duration={100000}>
         A propos de nous
        </LinkHash>
        <LinkHash className="Navbar-item" to={"/comm1/#realisation"} smooth={true} offset={0} duration={100000}>
         Nos realisation 
        </LinkHash>
        <LinkHash className="Navbar-item" to={"/comm1/#agence"} smooth={true} offset={0} duration={100000}>
        L'Agence
        </LinkHash>
        <LinkHash className="Navbar-item" smooth={true} offset={0} duration={100000} to={"/comm1/#contact"}>
        Contacts
        </LinkHash>
      </div>
      <div className="Navbar-auth">
      {/* <LinkHash to='#' className="assistant-content"> <i className="fa fa-user"></i> </LinkHash> */}
        <LinkHash to="/Felicitation">Je veux ce site</LinkHash>
      </div>
      <button onClick={handleClick} className="btn-bars">
        <ImgSrc />
      </button>
      <div className="Handle">
        <HandleNav />
      </div>
    </div>
  );
}

export default Navigation;