import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import userlistImg from '../../assets/images/UserList.jpg'
import elencoPren from '../../assets/images/elencoPrenotazioni_640.jpg'
import nuovoProdImg from '../../assets/images/elenco-prodotti.jpg'
import addProdImg from '../../assets/images/aggiungi-prodotto.jpg'
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



                            {/** Below only for USERS */}
                            {role == "user" &&
                            <div className="col-md-12 mt-5">
                             <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={nuovoProdImg} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2 className="text-primary">Elenco prodotti</h2>
                                                <p className="text-secondary">Clicca per visualizzare l'elenco prodotti</p>
                                                <Link to="/elencoprodotti" type="button" className="btn btn-sm btn-outline-primary text-uppercase">VAI ALL'ELENCO</Link>
                                            </div>
                                    </div>

                                </div>

                                <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={addProdImg} className="img-fluid rounded mb-2"/>
                                            </div>
                                            <div className="col-md-6">
                                                <h2 className="text-primary">Aggiungi Prodotto</h2>
                                                <p className="text-secondary">Clicca per aggiungere un nuovo prodotto</p>
                                                <Link to="/nuovoprodotto" type="button" className="btn btn-sm btn-outline-primary text-uppercase">Aggiungi prodotto</Link>
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
