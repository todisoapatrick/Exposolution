import React, { useState, useEffect } from 'react'

/* custom hooks and stylesheet */
import './GalerieTemplates.scss'
import SweetPagination from "sweetpagination";
import { HashLink as LinkHash } from "react-router-hash-link";
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css';

/* assets */
import logo from '../../assets/images/logo.png'
import learning from '../../assets/images/clip-never-stop-learning.png'

/* required data */
import template from '../../data/template'

function GalerieTemplates() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const [galerieData, setGalerieData] = useState(template.cardData);
    const [filter,setFilter] = useState("");
    const searchText = (event) => {
      setFilter(event.target.value);
      const filtredData = template.cardData.filter(item =>{
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
      });
      setGalerieData(filtredData);
    }
    return (
      <div className='GalerieTemp'>
          <div className="header">
            <img src={learning} alt="learning" />
            <div className="header-content">
                <p><span>Deuxièmement,</span> <br/> Vous avez déja un compte donc votre seconde étape <br/>c'est de choisir le template qui vous convient dans<br/>notre galerie ci-dessous</p>
            </div>
          </div>
  
          <div className="search">
            <div className="logo">
              <img src={logo} alt="logo" className='logo-img'/>
              <h3 className="logo-text">Expo<span className="expo">Solution</span></h3>
            </div>
            <div className="bar">
            <select className='searchtemp' name="categorie" id="categorie">
                        <option value="communication">Communication,publicité</option>
                        <option value="construction">Batiment et Construction</option>
                        <option value="commerce">Commerce</option>
                        <option value="administration">Administration</option>
                        <option value="automobile">Automobile/Moto</option>
                        <option value="telecomunication">Télécommunication</option>
                        <option value="immobilier">Immobilier</option>
                        <option value="comptabilite">Comptabilité, Juridique et Conseil</option>
                        <option value="tourisme">Tourisme et Loisir</option>
                        <option value="informatique">Informatique, Internet</option>
                        <option value="sante">Santé</option>
                        <option value="finances">Finances</option>
                        <option value="agroalimentaire">Agroalimentaire</option>
                        <option value="association">Association Professionelle</option>
                        <option value="bien-etre">Bien être</option>
                        <option value="emploi">Emploi</option>
                        <option value="energie">Energie</option>
                        <option value="formation">Formation, éducation</option>
                        <option value="hygiene">Hygienne</option>
                        <option value="import">Import et export</option>
                        <option value="industries">Industries</option>
                        <option value="securite">Securité</option>
                        <option value="services">Services</option>
                        <option value="sport">Sport</option>
                        <option value="transports">Transports</option>
                        <option value="urgence">Urgence</option>
                        <option value="autre">Autre</option>
                    </select>
            </div>
            <div className="bar">
              <input type="text" name="searchtemp" id="searchtemp" className='searchtemp' placeholder='Template' value={filter} onChange={searchText.bind(this)}/>
            </div>
          </div>
  
          <div className="templates">
          {galerieData.map((item)=>{
                return(
                  <div className="template" id="template">
                    <img src={item.image} alt="images" />
                    <h3 className="template_title">{item.titre}</h3>
                    <p className="template_contenue">{item.contenue}</p>
                    <LinkHash to={item.link1}>{item.souscateg1}</LinkHash><br/>
                    <LinkHash to={item.link2}>{item.souscateg2}</LinkHash>
                  </div>
                )
            })}
          </div>
          <SweetPagination
          currentPageData={setGalerieData}
          dataPerPage={4}
          getData={template.cardData}
          navigation={true}
        />
      </div>
    )
}

export default GalerieTemplates
