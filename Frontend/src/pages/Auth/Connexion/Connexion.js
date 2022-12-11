import React, { useEffect, useState } from 'react'

/* custom hooks and stylesheet */
import "./Connexion.scss"
import AOS from "aos";
import "../../../../node_modules/aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

/* assets */
import Logo from "../../../assets/images/logo.png"
import illustration from "../../../assets/images/log_in_illustration.jpg"

function Connexion() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      /* Loading Animation */
  const [loading, setLoading] = useState(false);
  const HandleSub = () => {
    if (loading) {
      return <Link to='/home/exposant'> <i className="fas fa-spinner fa-spin"></i> </Link>;
    } else {
      return <Link to='/home/exposant'> <span>Se connecter</span> </Link>;
    }
  };

  return (
    <div className='Connexion'>
        <Helmet>
            <title>Masaifaire expo | Connexion</title>
        </Helmet> 
        <div className="connexion-illustration-part">
          <div className="illustration-text">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi optio odio inventore ea quas voluptatibus vel consequuntur aut dolor molestias.</p>
          </div>
          <img src={illustration} alt="illustration" />
        </div>
      <div className="connexion-form-part">
        <div className="connexion-component" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <div className="connexion-header">
              <img src={Logo} alt="logo" />
              <p>MaSaifaire <span>Expo</span></p>
          </div>

          <form action="" className='connexion-form'>
              <input type="text" name="email" id="email" placeholder='Votre adresse mail ici...'/>
              <input type="password" name="password" id="password" placeholder='Votre mot de passe ici...'/>
              <Link to="#">Mot de passe oublié?</Link>
              <button type="submit" onClick={() => setLoading(true)}><HandleSub/></button>
          </form>

          <div className="connexion-footer">
              <p>Si vous n'avez pas encore de compte veuillez vous <Link to="/Inscription">inscrire</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connexion
