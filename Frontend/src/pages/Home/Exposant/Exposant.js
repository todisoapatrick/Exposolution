import React, { useState, useEffect } from 'react'
import { HashLink as LinkHash } from "react-router-hash-link";

/*custom Hooks and stylesheet*/
import './Exposant.scss';
import AOS from "aos";
import { CircularProgressbar } from 'react-circular-progressbar';
// import SweetPagination from "sweetpagination";
import 'react-circular-progressbar/dist/styles.css';
import "../../../../node_modules/aos/dist/aos.css";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'

/*images*/ 
import logo from '../../../assets/images/logo.png'
import profile1 from '../../../assets/images/Profile.jpg'

/* required data */
import service from "../../../data/services"

function Exposant() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    // Progression percentage
    const percentage = 65;

    // search text
    const [serviceData, setServiceData] = useState(service.cardData);
    const [filter,setFilter] = useState("");
    const searchText = (event) => {
      setFilter(event.target.value);
      const filtredData = service.cardData.filter(item =>{
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
      });
      setServiceData(filtredData);
    }

    // State result
    const [searchResult,setSearchResult] = useState(false);
    const HandleResult = () => {
      if (searchResult){
        return(
          <div className='search_result'>
            <i className='fas fa-circle-xmark' onClick={resultOpen}></i>
            <div className="result-component">
              {serviceData.map((item)=>{
                  return(
                    <div className="result" id="result">
                      <h3 className="service_title">{item.service}</h3>
                      <p className="service_contenue">{item.description}</p>
                      <LinkHash to={item.link}>Visiter</LinkHash>
                    </div>
                  )
              })}
            </div>
            {/* <SweetPagination
          currentPageData={setSearchResult}
          dataPerPage={4}
          getData={service.cardData}
          navigation={true}
        /> */}
          </div>
        );
      } else{
        return null;
      }
    }

    const resultOpen = () => {
      searchResult ? setSearchResult(false) : setSearchResult(true);
    }
    
    // State Notification
    const [notification,setNotification] = useState(false);
    const HandleNotif = () => {
      if (notification){
        return(
          <div className="message_component">
                <div className="message_heading">
                  <i className="fa fa-bell"></i>
                  <h3>Notifications</h3>
                </div>
                <div className="message_content">
                  <div className="message_box">
                    <div className="profile">
                      <img src={profile1} alt="pdp" />
                    </div>
                    <div className="message_text">
                      <h4>Gabrielo Todisoa</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quidem sequi iusto maxime veniam? Repellendus?</p>
                    </div>
                  </div>
                  <div className="message_box">
                    <div className="profile">
                      <img src={profile1} alt="pdp" />
                    </div>
                    <div className="message_text">
                      <h4>Gabrielo Todisoa</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quidem sequi iusto maxime veniam? Repellendus?</p>
                    </div>
                  </div>
                  <div className="message_box">
                    <div className="profile">
                      <img src={profile1} alt="pdp" />
                    </div>
                    <div className="message_text">
                      <h4>Gabrielo Todisoa</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quidem sequi iusto maxime veniam? Repellendus?</p>
                    </div>
                  </div>
                  <div className="message_box">
                    <div className="profile">
                      <img src={profile1} alt="pdp" />
                    </div>
                    <div className="message_text">
                      <h4>Gabrielo Todisoa</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quidem sequi iusto maxime veniam? Repellendus?</p>
                    </div>
                  </div>
                </div>
              </div>
        );
      } else{
        return(
          <div className="message_component">
                <div className="message_heading">
                  <i className="fa fa-comments"></i>
                  <h3>Messages</h3>
                </div>
                <div className="search_bar">
                  <input type="text" name="search_message" id="search_message" placeholder='Rechercher une message'/>
                  <i className="fa fa-search"></i>
                </div>
                <div className="message_content">
                  <div className="message_box">
                    <div className="profile">
                      <img src={profile1} alt="pdp" />
                    </div>
                    <div className="message_text">
                      <h4>Gabrielo Todisoa</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quidem sequi iusto maxime veniam? Repellendus?</p>
                    </div>
                  </div>
                  <div className="message_box">
                    <div className="profile">
                      <img src={profile1} alt="pdp" />
                    </div>
                    <div className="message_text">
                      <h4>Gabrielo Todisoa</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quidem sequi iusto maxime veniam? Repellendus?</p>
                    </div>
                  </div>
                  <div className="message_box">
                    <div className="profile">
                      <img src={profile1} alt="pdp" />
                    </div>
                    <div className="message_text">
                      <h4>Gabrielo Todisoa</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quidem sequi iusto maxime veniam? Repellendus?</p>
                    </div>
                  </div>
                  <div className="message_box">
                    <div className="profile">
                      <img src={profile1} alt="pdp" />
                    </div>
                    <div className="message_text">
                      <h4>Gabrielo Todisoa</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quidem sequi iusto maxime veniam? Repellendus?</p>
                    </div>
                  </div>
                </div>
              </div>
        );
      }
    }

    const notifOpen = () => {
      notification ? setNotification(false) : setNotification(true);
    }
    return(
      <div className="Exposant">
        <div className="sidebar">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>Expo<span className='expo'>Solution</span></h3>
          </div>
          <p className='sidebar_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laboriosam, veritatis voluptas consequatur iusto quia ad voluptates voluptate laborum vitae.</p>
          <div className="template_menu">
            <h3>SERVICES TEMPLATE</h3>
            <LinkHash to='/Galerie' className='template_content'> <i className="fa fa-eye"></i> Visiter,choisir un template</LinkHash>
            <LinkHash to='#' className='template_content'> <i className="fa fa-pen-to-square"></i> Créer un stand</LinkHash>
            <div className="message_button template_content">
              <p> <i className="fas fa-comment"></i> Messages</p>
              <span className='message_count'>2</span>
            </div>
          </div>
          <div className="service_menu">
            <h3>AUTRES SERVICES</h3>
            <LinkHash to='#' className='template_content'> <i className="fa fa-rectangle-list"></i> Resérvation</LinkHash>
            <LinkHash to='#' className='template_content'> <i className="fa fa-money-bill-1"></i> Demande de devis</LinkHash>
          </div>
          <div className="sign_out">
            <div className="deconnect_button">
              <img src={profile1} alt="profile_deconnect" />
              <div className="names">
                <h3>Gabrielo Todisoa</h3>
                <p>Déconnexion</p>
              </div>
              <i className="fas fa-door-open"></i>
            </div>
          </div>
        </div>

        <div className="exposant_corps">
          <div className="navbar">
            <p className="greeting_text">Bonjour,<br/> <span className='users_name'>Gabrielo Todisoa</span></p>
            <h2 className='navbar_title'>Tableau <span className='bord'>de bord</span></h2>
                <div className="search-bar">
                 <i className="fa fa-search"></i>
                 <input type="text" name="search_service" id="search_service" placeholder='Rechercher une service' onClick={resultOpen} value={filter} onChange={searchText.bind(this)}/>
                </div>
            <div className="navbar_tools">
              <i className="fa fa-bell" onClick={notifOpen}></i>
              <i className="fa fa-circle-question"></i>
              <img src={profile1} alt="profile" />
            </div>
          </div>

          <div className="corps_component">
            <HandleResult/>
            <div className="corps_content">
              <div className="progression_component">
                <div className="progression_heading_text">
                  <h3>Progression du site</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita et autem veritatis modi necessitatibus voluptatibus suscipit quae voluptates possimus repellendus nisi dolore aperiam vel neque, reiciendis placeat.</p>
                </div>
                
                <div className="progression_content">
                  <div className="progress_circle">
                    <CircularProgressbar className='circular_progress' value={percentage} text={`${percentage}%`} />
                  </div>

                  <div className="creation_steps">
                    <div className="oneStep">
                      <div className="number">
                        <p>1</p>
                      </div>
                      <h3>
                      Etape <span>1</span>
                      </h3>
                    </div>
                    <div className="oneStep">
                      <div className="number">
                        <p>2</p>
                      </div>
                      <h3>
                        Etape <span>2</span>
                      </h3>
                    </div>
                    <div className="oneStep">
                      <div className="number">
                        <p>3</p>
                      </div>
                      <h3>
                        Etape <span>3</span>
                      </h3>
                    </div>
                    <div className="oneStep">
                      <div className="number">
                        <p>4</p>
                      </div>
                      <h3>
                        Etape <span>4</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="services_component">
                <div className="service_heading_text">
                  <h3>Autres Services</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita et autem veritatis modi necessitatibus voluptatibus suscipit quae voluptates possimus repellendus nisi dolore aperiam vel neque, reiciendis placeat.</p>
                </div>
                <div className="services_content">
                  <div className="services">
                    <div className="icon reservation_icon">
                      <i className="fa fa-rectangle-list"></i>
                    </div>
                    <div className="service_text">
                      <h4>Réservation</h4>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, dolor?</p>
                    </div>
                  </div>
                  <div className="services">
                    <div className="icon devis_icon">
                      <i className="fa fa-money-bill-1"></i>
                    </div>
                    <div className="service_text">
                      <h4>Demande de devis</h4>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, dolor?</p>
                    </div>
                  </div>
                  <div className="services">
                    <div className="icon sum1_icon">
                      <i className="fas fa-border-all"></i>
                    </div>  
                    <div className="service_text">
                      <h4>Autre 1</h4>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, dolor?</p>
                    </div>
                  </div>
                  <div className="services">
                    <div className="icon sum2_icon">
                      <i className="fas fa-border-all"></i>
                    </div>
                    <div className="service_text">
                      <h4>Autre 2</h4>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, dolor?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="corps_message">
              <HandleNotif/>
            </div>

          </div>
        </div>
      </div>
    );
}

export default Exposant