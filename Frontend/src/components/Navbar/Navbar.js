import React, { useEffect, useState } from 'react';
import { HashLink as LinkHash } from "react-router-hash-link";
import { Link } from "react-router-dom";

/*hooks and stylesheet */
import './Navbar.scss'
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

/* images */
import Logo from "../../assets/images/logo.png";

function Landing() {
    /* AOS Js */
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    
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
          <div className="mav">
            <Link to={"/connexion"}>Se connecter </Link>
          </div>
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
        <img src={Logo} alt="logo" />
        <h3>
          MaSaifaire <span>expo</span>
        </h3>
      </div>
      <div className="Navbar-menu">
        <LinkHash className="Navbar-item" to={"#"}>Acceuil</LinkHash>
        <LinkHash className="Navbar-item" to={"/#about"} smooth={true} offset={0} duration={100000}>
          Apropos
        </LinkHash>
        <LinkHash className="Navbar-item" to={"/#howItWorks"} smooth={true} offset={0} duration={100000}>
        Comment ça marche?
        </LinkHash>
        <LinkHash className="Navbar-item" smooth={true} offset={0} duration={100000} to={"/#contacts"}>
        Contacts
        </LinkHash>
      </div>
      <div className="Navbar-auth">
        <Link to={"/connexion"}>Se connecter </Link>
      </div>
      <button onClick={handleClick} className="btn-bars">
        <ImgSrc />
      </button>
      <div className="Handle">
        <HandleNav />
      </div>
    </div>
  )
}

export default Landing
