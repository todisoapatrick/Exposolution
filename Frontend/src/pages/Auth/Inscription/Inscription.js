import React, { useEffect, useState } from 'react'

/* custom hooks and stylesheet */
import "./Inscription.scss"
import AOS from "aos";
import "../../../../node_modules/aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

/* assets */
import Logo from "../../../assets/images/logo.png"
import step1 from "../../../assets/images/sign_in_illustration.jpg"

function Inscription() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      /* Loading Animation */
  const [loading, setLoading] = useState(false);
  const HandleSub = () => {
    if (loading) {
      return <Link to='/home/Exposant'> <i className="fas fa-spinner fa-spin"></i> </Link>;
    } else {
      return <Link to='/home/Exposant'> <span>S'Inscrire</span> </Link>;
    }
  };

  return (
    <div className='Inscription'>
        <Helmet>
            <title>Masaifaire expo | Inscription</title>
        </Helmet>
      <div className="description-component">
        <div className="description">
          <p><span>Prémièrement,</span><br/>Vous êtes prié de s'inscrire au moyen de la formulaire<br/>ci-contre pour beneficier de tous nos services</p>
          <img src={step1} alt="step1" />
        </div>
      </div>

      <div className="form-component">

        <div className="inscription-component">
          
          <div className="inscription-header">
              <img src={Logo} alt="logo" />
              <p>MaSaifaire <span>Expo</span></p>
          </div>

          <form action="" className='inscription-form'>
                <input className="input" type="text" name="nom_user" id="nom_user" placeholder='Nom' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"/>
                <input className="input" type="text" name="prenom_user" id="prenom_user" placeholder='Prenom' data-aos="fade-up" data-aos-delay="300" data-aos-duration="800"/>
                <select className="input" name="pays" id="pays" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                  <option value="1">Madagascar</option>
                </select>
                <select className="input" name="id_region" id="id_region" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                  <option value="1">Antsiranana</option>
                  <option value="2">Antananarivo</option>
                  <option value="3">Fianarantsoa</option>
                  <option value="4">Toamasina</option>
                  <option value="5">Toliara</option>
                </select>
                  <select className="input" name="id_role" id="id_role" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                    <option value="1">Client</option>
                    <option value="2">Exposant</option>
                  </select>
                  <input className="input" type="text" name="email_user" id="email_user" placeholder='Email' data-aos="fade-up" data-aos-delay="700" data-aos-duration="800"/>
                <input className="input" type="text" name="username" id="username" placeholder="Nom d'utilisateur" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800"/>
                <input className="input" type="password" name="pass_user" id="password" placeholder="Votre mot de passe" data-aos="fade-up" data-aos-delay="900" data-aos-duration="800"/>
              <button type="submit" onClick={() => setLoading(true)} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800"><HandleSub/></button>
          </form>

          <div className="inscription-footer">
              <p>Si vous avez déjà une compte veuillez vous <Link to="/Connexion">connecter</Link></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Inscription
