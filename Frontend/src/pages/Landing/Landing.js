import React, {useState, useEffect} from 'react'
import { HashLink as LinkHash } from "react-router-hash-link";
import { Link } from "react-router-dom";

/* custom hooks and stylesheet */
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Landing.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './LandingScreen.scss'

/* assets */
import person from '../../assets/images/woman_entrepreneur.png'
import create from '../../assets/images/Create.png'
import reservation from '../../assets/images/Reservation.png'
import devis from '../../assets/images/Money.png'
import man from '../../assets/images/Man_apropos.png'
import tools from '../../assets/images/Group 1.png'
import rectangle from '../../assets/images/Rectangle 2.png'
import ellipse from '../../assets/images/Ellipse 1.png'
import back from '../../assets/images/Back.png'
import time from '../../assets/images/13_23.png'
import pub from "../../assets/images/depositphotos_63582601-stock-photo-advertising-campaign-mass-medias.jpg";
import construction from "../../assets/images/633ea75eb29bf6f83d394342576ce72e.jpg";
import shop from "../../assets/images/7559c4468f07f39de5ee5db5d7760155.jpg";
import autre from "../../assets/images/8193f8d916994f252cf61d1a10295461.jpg";
import student from "../../assets/images/student-849822_1920.jpg";
import admin from "../../assets/images/depositphotos_6646381-stock-photo-folder-search.jpg";
import Logo from "../../assets/images/MaSaifaire.png";
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/ant-design_facebook-filled.png";
import twitter from "../../assets/images/ant-design_twitter-outlined.png";
import linkedIn from "../../assets/images/ant-design_linkedin-filled.png";
import up from "../../assets/images/up.png";
import apercu from "../../assets/images/Apercu.png"

function Landing() {
    /* AOS */
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
    /* State navbar */
    const [open, setOpen] = useState(false);
    const ImgSrc = () => {
      if (open) {
        return <i className='fas fa-circle-xmark'></i>;
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
  
    /* State Services */
    const [services, setServices] = useState(false);
    const ToogleSrc = () => {
      if(services){
        return <i className="fas fa-angles-up"></i>
      } else{
        return <i className="fas fa-angles-down"></i>
      }
    };
    const HandleServ = () => {
      if (services) {
        return (
          <div className="dropservice">
            <Link to="#" data-aos="fade-down" data-aos-delay="200" data-aos-duration="800">Template</Link>
            <Link to="#" data-aos="fade-down" data-aos-delay="300" data-aos-duration="800">Reservation</Link>
            <Link to="#" data-aos="fade-down" data-aos-delay="400" data-aos-duration="800">Demande de devis</Link>
          </div>
        )
      } else {
        return null;
      }
    };
    const handleDrop = () => {
      services ? setServices(false) : setServices(true);
    };
  
    /* State aperçu */
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  
    /* State Menu */
    const [menu, setMenu] = useState(false);
    const HandleMenu = () => {
      if(menu){
        return(
          <div className="phone-menu">
            <i className="fas fa-circle-xmark" onClick={handleOpenMenu}></i>
            <div className="phone-menu-content">
              <div className="menu-phone menu-template">
                <img src={create} alt="create icon" height={30}/>
              </div>
              <div className="menu-phone menu-devis">
                <img src={devis} alt='devis icon' height={30}/>
              </div>
              <div className="menu-phone menu-reservation">
                <img src={reservation} alt='reservation icon' height={30}/>
              </div>
            </div>
          </div>
        );
      } else{
        return null;
      }
    }
    const handleOpenMenu = () => {
      menu ? setMenu(false) : setMenu(true);
    }
    return (
      <div className='Landing'>
  
        <div className="Navbar" id='home'>
          <div className="Navbar_brand">
            <img src={logo} alt="logo" />
            <h3>
              Expo<span>Solution</span>
            </h3>
          </div>
  
          <div className="Navbar_menu">
            <LinkHash className="Navbar-item" to={"#"}>Acceuil</LinkHash>
            <LinkHash className="Navbar-item" to={"/#about"} smooth={true} offset={0} duration={100000}>
              Apropos
            </LinkHash>
            <LinkHash className="Navbar-item" to={"/#howItWorks"} smooth={true} offset={0} duration={100000}>
            Comment ça marche?
            </LinkHash>
            <div className='Navbar-div-item' onClick={handleDrop}>
              <p className="Navbar-item">Nos Services <ToogleSrc/> </p>
              <HandleServ/>
            </div>
            <LinkHash className="Navbar-item" smooth={true} offset={0} duration={100000} to={"/#contacts"}>
            Contacts
            </LinkHash>
          </div>
  
          <div className="Navbar_auth">
            <Link to={"/connexion"} className="btn_connect">Se connecter </Link>
            <button onClick={handleClick} className="btn-bars">
              <ImgSrc />
            </button>
            <div className="Handle">
              <HandleNav />
            </div>
          </div>
        </div>
  
        <div className="banner">
          <div className="HeadingText">
            <h1>
              Créer <span>son propre stand</span>
            </h1>
            <h2>facilement. </h2>
            <p>
              ExpoSolution est une plateforme qui vous aide à créer votre propre stand et le rendre visible dans le salon virtuel de visibilité du savoir faire de TPE ou PME
            </p>
            <LinkHash to='/#about' smooth={true} offset={0} duration={100000}>Continuer</LinkHash>
          </div>
  
          <div className="PersonHeading">
          <div className="notfibox">
            <div className="idea">
              <img src={create} alt="icon" height={30}/>
            </div>
            <div className="idea-text">
              <p>Création de stand ou mini-site</p>
              <p className="text-desc">Personnaliser des template</p>
              <p className="text-desc">pour avoir votre propre stand</p>
            </div>
          </div>
          <img className="heading-woman" src={person} alt="woman pics" />
          <div className="notfibox2">
            <div className="timer">
                <img src={devis} alt='clock icon' />
            </div>
            <div className="idea-text">
              <p>Demande de devis</p>
              <p className="text-desc">Choisissez votre devis</p>
              <p className="text-desc">avec facilité</p>
            </div>
          </div>
          <div className="notfibox3">
              <div className="timer">
                <img src={reservation} alt='clock icon' />
              </div>
              <div className="reserve-text">
                <p>Reserver</p>
                <p className="text-desc">Vous pouvez aussi faire</p>
                <p className="text-desc">une réservaion</p>
              </div>
          </div>
        </div>
  
        </div>
  
        <h1 className="Landing-title top-title" id="about">
          À propos d'<span>ExpoSolution</span>
        </h1>
        <div className="Landing-Text">
        <img src={man} alt="man" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800"/>
          <div className="Landing-about" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <p className="Landing-p">
              ExpoSolution est une plateforme qui vous aide à créer votre stand virtuel avec facilité, c'est-à-dire sans besoins d'une grande connaissance en informatique. Elle vous permet aussi de publier le stand créé dans un salon virtuel pour qu'elle soit visible par tout le monde.
            </p>
            <LinkHash to={"/#howItWorks"} smooth={true} offset={0} duration={100000} data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">En savoir plus</LinkHash>
          </div>
        </div>
  
        <div className="Landing-work" id="howItWorks">
          <h1>
            Comment <span>ça marche</span> ?
          </h1>
          <div className="step">
  
            <div className="step-nouveau" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
              <h2>Si vous êtes encore nouveau</h2>
              <p>Seulement en regle de trois click et vous pouvez y aller</p>
                <div className="step-step">
                  <div className="oneStep">
                    <div className="number">
                      <p>1</p>
                    </div>
                    <h3>
                    Inscrivez <span>vous</span>
                    </h3>
                  </div>
                  <div className="oneStep">
                    <div className="number">
                      <p>2</p>
                    </div>
                    <h3>
                      Choissez le template qui <span>vous convient</span>
                    </h3>
                  </div>
                  <div className="oneStep">
                    <div className="number">
                      <p>3</p>
                    </div>
                    <h3>
                      Commencer à<span> exposer</span>
                    </h3>
                  </div>
                  <Link to="/Inscription">Commencer</Link>
              </div>
            </div>
            
            <div className="step-membre" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
              <h2>Si vous êtes déja membre</h2>
              <p>Vous pouvez choisir d'autres services qu'on peut vous offrir</p>
                <div className="step-step">
                {/* etapes */}
                <div className="oneStep">
                  <div className="number">
                    <p>1</p>
                  </div>
                  <h3>
                  Visitez des templates qui <span>vous inspirent</span>
                  </h3>
                </div>
                <div className="oneStep">
                  <div className="number">
                    <p>2</p>
                  </div>
                  <h3>
                    Demander des <span>devis digitales</span>
                  </h3>
                </div>
                <div className="oneStep">
                  <div className="number">
                    <p>3</p>
                  </div>
                  <h3>
                    Commander une <span>résérvation</span>
                  </h3>
                </div>
                <Link to="/Connexion">Commencer</Link>
              </div>
            </div>
          </div>
        </div>
  
        <div className="services">
          <h1>Nos services</h1>
          <div className="services-content">
            <div className="services-text">
              <p>Notre principale service c'est de vous aider créer votre propre stand en ligne. Pour voir nos autres services veuillez consulter notre menu ci-joint</p>
              <LinkHash to="/connexion">Commencer</LinkHash>
            </div>
            <div className='device' data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                <div className="phone">
                  <div className="phone-head">
                    <img src={time} alt="time" className="time"/>
                    <img src={tools} alt="tools" className='tools'/>
                  </div>
                  <div className="phone-body">
                  <HandleMenu/>
                    <div className='phone-body-content' onClick={handleOpenMenu}>
                      <i className="fa fa-bars"></i>
                      <p>Services</p>
                    </div>
                  </div>
                  <div className="phone-foot">
                    <img src={back} alt="back" className="back"/>
                    <img src={ellipse} alt="ellipse" className="ellipse"/>
                    <img src={rectangle} alt="rectangle" className="rectangle"/>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="blank"></div>
  
        <div className="Landing-stands my-5" id="examples-stands">
          <h1 className="heading-stand">
            Galerie <span>des templates</span> 
          </h1>
          <p className="text-stand">Vous pouvez choisir ici votre categorie et sous categorie pour definir le template qui vous convient</p>
          <div className="body-stand">
            <div className="cards">
              <div className="card-single" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                <img src={pub} alt="pub" />
                <h3 className="card-title">Communication,publicité</h3>
                <p className="card-text">Les sociétés de communication et de publicité, medias, radios, télévisions, évenementiel, éditeurs, imprimeries, objets et mediaux publicitaires</p>
                <>
                  {values.map((v, idx) => (
                    <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                     Aperçu
                    </Button>
                  ))}
                  <Modal className='Modal' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Communication et Publicité</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='Modal-body'>
                      <img src={apercu} alt="apercu" width={"100%"}/>
                    </Modal.Body>
                  </Modal>
                </>
              </div>
              <div className="card-single" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                <img src={construction} alt="construction" />
                <h3 className="card-title">Batiment et Construction</h3>
                <p className="card-text">Le secteur de la constructoin est très large. Artisans (serruriers,plombiers...), specialistes des materiaux de construction, travaux de genie civil</p>
                <button>Aperçu</button>
              </div>
              <div className="card-single" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                <img src={shop} alt="shop" />
                <h3 className="card-title">Commerce</h3>
                <p className="card-text">Nos boutiques, boulangeries, centre commerciaux, vente de chaussures, boucheries, galerie d'Art... ici vous trouverez tout ce qui se vend</p>
                <button>Aperçu</button>
              </div>
              <div className="card-single" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                <img src={autre} alt="autre" />
                <h3 className="card-title">Télécommunication</h3>
                <p className="card-text">Pour communiquer facilement chaque jour, trouvez vos opérateurs téléphoniques, spécialistes en téléphonie mobile, carte de récharges...</p>
                <button>Aperçu</button>
              </div>
              
            </div>
            <div className="content-stand">
              {/* <Link to="/Inscription">
                <button>Voir tout <span className="fas fa-arrow-right"></span> <br/>
              S'inscrire</button>
              </Link> */}
            </div>
          </div>
        </div>
  
        <div className="Landing-devis" id="devis">
          <h1 className="heading-devis">
            Demande <span>de devis</span> 
          </h1>
          <div className="content-devis">
              <div className="text-link-devis">
                <p className="text-devis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis maiores non omnis voluptates ratione nemo, velit animi quas quos!</p>
                <Link to="/devis">Visiter</Link>
              </div>
              <img src={admin} alt="admin" />
          </div>
        </div>
  
        <div className="Landing-reservation" id="reservation">
          <h1 className="heading-reservation">
            Reservation
          </h1>
          <div className="content-reservation">
          <img src={student} alt="student" />
            <div className="text-link-reservation">
              <p className="text-stand">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis maiores non omnis voluptates ratione nemo, velit animi quas quos!</p>
              <Link to="/reservation">Visiter</Link>
            </div>
          </div>
        </div>
  
        <div className="Landing-footer" id="contacts">
          <LinkHash
            to={"#home"}
            smooth={true}
            offset={0}
            duration={100000}
            className="ToTop"
          >
            <img src={up} alt="upIcon" />
          </LinkHash>
          <h1>Vous avez des remarque à nous dire? n’hesite pas à le faire.</h1>
          <p>
            Pour une respect de la condition de la confidentialité. Votre messange
            restent anonyme. On vous remercie de votre honêteté.
          </p>
          <div className="footer-input">
              {/* <ContactUs/> */}
          </div>
          <div className="footer-link">
            <Link to="/">
              <img src={Logo} alt="saifaire logo" />
            </Link>
            <div className="Link">
              <Link to="www.facebook.com">
                <img src={facebook} alt="facebook icons" />
              </Link>
              <Link to="www.twetter.com">
                <img src={twitter} alt="twitter icons" />
              </Link>
              <Link to="www.linkedin.com">
                <img src={linkedIn} alt="linkedin icons" />
              </Link>
            </div>
            <Link to="https://guiduchoix24.com/">Guide du choix 24</Link>
          </div>
        </div>
      </div>
    )
}

export default Landing
