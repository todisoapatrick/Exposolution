import React, {useEffect} from 'react'

/* custom hooks and stylesheet */
import "./Felicitation.scss"
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css"
import { HashLink as LinkHash } from "react-router-hash-link";

/* assets */ 
import step3 from "../../assets/images/clip-delivery-service.png"
function Felicitation() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="step3">
        <div className="heading">
            <div className="head-content">
                <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800">Troisièmement,</h1>
                <p data-aos="fade-down" data-aos-delay="600" data-aos-duration="800">Nous avons bien réçu tout ce dont vous avez besoin pour votre site, maintenant c'est à notre assistant de jouer. Vous pouvez poursuivre l'avancement de la création du stand depuis votre tableau de bord. Mais en attendant, vous pouvez consulter nos autres services</p>
                <div className="head-link" data-aos="fade-down" data-aos-delay="600" data-aos-duration="800">
                    <LinkHash to="/home/Exposant">Tableau de bord</LinkHash>
                </div>
            </div>
                <img src={step3} alt="step3" />
        </div>
    </div>
  )
}

export default Felicitation
