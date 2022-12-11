import React from 'react';

/* custom hooks and stylesheet */
import "./style.scss";
import { HashLink as LinkHash } from "react-router-hash-link";

/* assets */
import image1 from "../../../assets/images/Templates_images/definition-communication-objectifs.jpg";
import image2 from "../../../assets/images/Templates_images/Agence-de-communication.jpg";
import exposant from '../../../assets/images/exposant.jpg';
import stand from '../../../assets/images/stand.jpg';

/* components */
import Navigation from "../../../components/Navigation/Navigation";
import { ContactUs } from "../../../components/ContactsUs/ContactUs";

function comm1() {
  return (
    <div className="comm1">
        <div className="page">
        <div className="header" id="header">
          <Navigation/>
          <div className="heading">
          <img src={exposant} alt="exposant" />
              <div className="head-content">
                <h1 className='heading-title'>Le nom de votre Société</h1>
                <p className="heading-content">En tête de votre page</p>
              </div>
          <img src={stand} alt="stand" />
          </div>
        </div>
        <div className="assistant">
        </div>
        <div className="howAbout" id="propos">
          <div className="image">
            <img src={image1} alt="image1" />
            <p>Image 1</p>
          </div>
          <div className="content">
            <h3>A propos de nous</h3>
            <p>Quelques descriptions concernant votre société</p>
          </div>
        </div>
        <div className="realisation" id="realisation">
          <h1>Nos réalisations</h1>
          <div className="cards-realisation">

            <div className="card">
              <div className="card-realisation">
                <h1> <i className="fas fa-award"></i></h1>
                <h3 className="title-card">TITRE 1</h3>
                <p className="content-card">contenue de la realisation</p>
              </div>
            </div>

            <div className="card">
              <div className="card-realisation">
              <h1> <i className="fas fa-award"></i></h1>
                <h3 className="title-card">TITRE 2</h3>
                <p className="content-card">contenue de la realisation</p>
              </div>
            </div>

            <div className="card">
              <div className="card-realisation">
              <h1> <i className="fas fa-award"></i></h1>
                <h3 className="title-card">TITRE 3</h3>
                <p className="content-card">contenue de la realisation</p>
              </div>
            </div>

          </div>
        </div>
        <div className="agence" id="agence">
          <div className="content-agence">
            <h3>L'Agence</h3>
            <p>Contenue qui decrive l'agence</p>
          </div>
          <div className="image-agence">
            <img src={image2} alt="image2" />
            <p>image 2</p>
          </div>
        </div>
        <div className="contact" id="contact">
          <h3>Si vous volez de plus amples informations</h3>
          <h3>nous concernant</h3>
          <p>Veuillez nous envoyer une message</p>
          <div className="send-mail">
            <ContactUs/>
          </div>
          <p>ou visiter notre réseau</p>
          <div className="social">
            <LinkHash to="#"><i className="fab fa-facebook"></i></LinkHash>
            <LinkHash to="#"><i className="fab fa-twitter"></i></LinkHash>
            <LinkHash to="#"><i className="fab fa-instagram"></i></LinkHash>
          </div>
        </div>
        </div>
    </div>
  )
}

export default comm1