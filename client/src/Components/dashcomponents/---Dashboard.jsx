import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import userlistImg from '../../assets/images/UserList.jpg'
import elencoPren from '../../assets/images/elencoPrenotazioni_640.jpg'
import newTrainingImg from '../../assets/images/NewTraining.jpg'
import agendaImg from '../../assets/images/Agenda_640.jpg'
import ckeckClosed from '../../assets/images/weights-3483560_640.jpg'
import { Link } from 'react-router-dom';
import UserProfile from '../dashcomponents/UserProfile'

function Dashboard() {

    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    const role = useSelector((state) => state.setRole.value)

    const {user} = UseAuthContext()

    console.log(role)

    return (
        <React.Fragment>
                <div className='container-fluid pt-1 mt-5 bg-stripe'>
                    <div className='container text-center mt-5 pb-1'>
                        <h1 className='display-2 text-white text-uppercase'>DashBoard</h1>
                    </div>
                </div>
            <section className={"py-3" + " " + bgType + " " + textType}>

                <div className="container">
                    <h1 className="section-title pt-5">Bacheca Gestionale</h1>
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-md-3">
                                <h2 className="fw-bold text-body-emphasis">Area Gestionale</h2>
                                <UserProfile />

                            </div>

                            {/** Below only for ADMINS */}
                            {role == "admin" &&

                            <div className="col-md-9 mt-5">

                                <div className="p-3 bg-body-tertiary border rounded-3">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={agendaImg} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2>Agenda Prenotazioni</h2>
                                                <p>Vedi l'elenco delle prenotazioni confermate </p>
                                                <Link to="/agenda" type="button" className="btn btn-sm btn-outline-primary">Vai alla lista utenti</Link>
                                            </div>
                                    </div>

                                </div>

                                <div className="p-3 bg-body-tertiary border rounded-3">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={userlistImg} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2>Lista Utenti</h2>
                                                <p>Vedi l'elenco completo degli utenti da dove potrai vedere/aggiungere i workout di ogni singolo utente </p>
                                                <Link to="/userslist" type="button" className="btn btn-sm btn-outline-primary">Vai alla lista utenti</Link>
                                            </div>
                                    </div>

                                </div>
                                <div className="p-3 bg-body-tertiary border rounded-3 mt-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={elencoPren} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2>Prenotazioni da approvare</h2>
                                                <p>Vedi l'elenco delle prenotazioni da confermare/approvare  </p>
                                                <Link to="/elencoprenotazionitrainer" type="button" className="btn btn-sm btn-outline-primary">Vedi Prenotazioni</Link>
                                            </div>
                                    </div>

                                </div>
                                <div className="p-3 bg-body-tertiary border rounded-3 mt-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={newTrainingImg} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2>Aggiungi Workout</h2>
                                                <p>Vedi l'elenco completo degli utenti da dove potrai vedere/aggiungere i workout di ogni singolo utente </p>
                                                <Link to="/userslist" type="button" className="btn btn-sm btn-outline-primary">Aggiungi Workout</Link>
                                            </div>
                                    </div>

                                </div>
                            </div>}

                            {/** Below only for USERS */}
                            {role == "user" &&
                            <div className="col-md-9 mt-5">
                             <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={newTrainingImg} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2>Scheda Training</h2>
                                                <p>Clicca per accedere alla scheda allenamento attiva</p>
                                                <Link to="/elencoschedeapertepage" type="button" className="btn btn-sm btn-outline-primary">vai alla scheda</Link>
                                            </div>
                                    </div>

                                </div>

                                <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={agendaImg} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2>Prenota Lezione</h2>
                                                <p>Prenota qui la tua prossima lezione</p>
                                                <Link to="/newbooking" type="button" className="btn btn-sm btn-outline-primary">Prenota la lezione</Link>
                                            </div>
                                    </div>

                                </div>
                                <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={elencoPren} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2>Controlla le prenotazioni</h2>
                                                <p>Controlla lo stato delle tue prenotazioni</p>
                                                <Link to="/elencoprenotazioniutente" type="button" className="btn btn-sm btn-outline-primary">Controlla</Link>
                                            </div>
                                    </div>

                                </div>
                                <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={ckeckClosed} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2>Schede Completate</h2>
                                                <p>Vedi le schede completate</p>
                                                <Link to="/elencoschedechiusepage" type="button" className="btn btn-sm btn-outline-primary">Vedi</Link>
                                            </div>
                                    </div>

                                </div>

                            </div>

                            }

                        </div>
                    </div>
                </div>

            </section>

        </React.Fragment>
    )
}

export default Dashboard
