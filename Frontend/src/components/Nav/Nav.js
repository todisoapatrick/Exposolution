import React from "react";
import './Nav.scss'
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/Profile.jpg'
import { Link } from "react-router-dom";

function Nav() {
    return(
        <div className="navbar">
            <div className="header">
                <div className="content">
                    <div className="logo">
                        <img src={logo} alt="logo" className="img-logo"/>
                        <p className="masaifaire">MaSaifaire <span className="expo">Expo</span></p>
                    </div>
                    <div className="tools">
                        <Link to="#"><i className="fa fa-bell"></i></Link>
                        <Link to="#"><i className="fa fa-cog"></i></Link>
                        <img src={profile} alt="profile" className="profile"/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Nav
