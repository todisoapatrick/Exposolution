import React,{useState} from 'react'
import "./Operateur.scss"
import { HashLink as LinkHash } from "react-router-hash-link";
import SweetPagination from "sweetpagination";
/*components*/
import Nav from '../../../components/Nav/Nav'
import demande from "../../../data/demande"

/*assets*/
import profile1 from "../../../assets/images/Profile.jpg"


function Operateur() {
    const [dataOperateur, setDataOperateur] = useState(demande.cardDemande);
    const [filter, setFilter] = useState("");
    const searchText = (event) => {
        setFilter(event.target.value);
        const filtredData = demande.cardDemande.filter(item =>{
            return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
          });
          setDataOperateur(filtredData);
    }

    const [openMessage, setOpenMessage] = useState(true);
      const Disscussion = () => {
          return(
            <>
                  <div className="message" onClick={() => setOpenMessage(false) }>
                    <div className="message-head">
                      <img src={profile1} alt="profile" />
                      <h4>Gabrielo Todisoa</h4>
                      <p>1</p>
                    </div>
                    <div className="message-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quae nisi, consequuntur laboriosam sint deleniti, corporis similique sunt repellendus quaerat non ipsam hic perspiciatis fugiat, earum laborum illo nulla error.</div>
                  </div>
            </>
          )
      }

      const Message = () => {
          return(
            <div className="chats">
              <div className="chat-heading">
                <button onClick={() => setOpenMessage(true) }> <span className='fa fa-arrow-left'></span> Back</button>
                <h4>Gabrielo Todisoa</h4>
                <img src={profile1} alt="profile" />
              </div>

              <div className="chat-body">
                  <div className='chat-income' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <p>Bonjour, Monsieur!!</p>
                  </div>
                  <div className="chat-send" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <p>Bonjour!!</p>
                  </div>
                  <div className='chat-income' data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                    <p>
                      Votre site est enfin prêt!
                    </p>
                  </div>
              </div>

              <div className="chat-footer">
                <input className='messageText' type="text" name="sendMessage" id="sendMessage" placeholder='Votre texte ici...'/>
                <input className='send' type="submit" value="Envoyer" />
              </div>
            </div>
          )
      }

  return (
    <div className='operateur'>
       <Nav></Nav>
        <div className="component">
            <div className="content d-flex flex-row">
                <div className="dashboard">
                    <div className="cards">
                        <div className="card">
                            <h3 className="card-title">
                                Stands terminés
                            </h3>
                            <div className="card-content">
                                00
                            </div>
                            <div className="card-footer">
                                <p className="variation"><span className='fas fa-arrow-up'></span> 00</p>
                            </div>
                        </div>
                        <div className="card">
                            <h3 className="card-title">
                                Stands en cours
                            </h3>
                            <div className="card-content">
                                00
                            </div>
                            <div className="card-footer">
                                <p className="variation"><span className='fas fa-arrow-down'></span> 00</p>
                            </div>
                        </div>
                        <div className="card">
                            <h3 className="card-title">
                                Demandes pas répondu
                            </h3>
                            <div className="card-content">
                                00
                            </div>
                            <div className="card-footer">
                                <p className="variation"><span className='fas fa-arrow-up'></span> 00</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h1>Personnes qui demandent une stand <span className="fas fa-user-plus"></span></h1>
                        <div className="search-field">
                            <input type="text" name="searchpers" id="searchpers" onChange={searchText.bind(this)} placeholder="Trouver une personne" />
                        </div>
                        <div className="attente">
                        {dataOperateur.map((item)=>{
                            return(
                                <div className="demande" id='demande'>
                                <img src={item.profile} alt="profile" />
                                <div className="demande-content">
                                    <h4>{item.name}</h4>
                                    <p>Ce personne demande une stand</p>
                                    <LinkHash to={item.link}>Configurer</LinkHash>
                                </div>
                            </div>
                            )
                        })}
                        </div>
                        <SweetPagination
                            currentPageData={setDataOperateur}
                            dataPerPage={4}
                            getData={demande.cardDemande}
                            navigation={true}
                        />
                    </div>
                </div>
                <div className="chat">
                    <div className="chat-header">
                        <h3 className="chat-title"><span className="far fa-comments"></span> Discussions</h3>
                    </div>
                    <div className="chat-content">
                    {openMessage ? <Disscussion/> : <Message/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Operateur
