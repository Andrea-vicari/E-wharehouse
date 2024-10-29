import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react";
import userlistImg from '../../assets/images/UserList.jpg'
import elencoPren from '../../assets/images/elencoPrenotazioni_640.jpg'
import nuovoProdImg from '../../assets/images/elenco-prodotti.jpg'
import addProdImg from '../../assets/images/aggiungi-prodotto.jpg'
import ckeckClosed from '../../assets/images/weights-3483560_640.jpg'
import { Link } from 'react-router-dom';
import UserProfile from '../dashcomponents/UserProfile'

function ElencoProdotti() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  const role = useSelector((state) => state.setRole.value)

  const { user } = UseAuthContext()

  const [prodotto, setProdotto] = useState([]);
  const [immagine, setImmagine] = useState([]);

  const makePRODOTTICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/prodotti`, { mode: 'cors' });
      const prodotto = await response.json();
      setProdotto(prodotto)

      console.log({ prodotto })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user) {
      makePRODOTTICall();
    }

  }, [user])

  const makeIMMAGINICall = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/images`, { mode: 'cors' });
      const immagine = await response.json();
      setImmagine(immagine)

      console.log({ immagine })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (user) {
      makeIMMAGINICall();
    }

  }, [user])

  // Clona array prodotto
  var prodottoCopy = [...prodotto];
  console.log("prodottoCopy")
  console.log(prodottoCopy)

  // Clona array immagini
  var immaginiCopy = [...immagine];
  console.log("immaginiCopy")
  console.log(immaginiCopy)

  /*Looppa in prodottoCopy e se unicoID combacia tra i 2 oggetti
    pusha immagineCaricata in prodottoCopy
  */

  /*
    for (let i = 0; i < prodottoCopy.length; i++) {

    for (let keyprodotto in prodottoCopy[i]) {

      // keyprodotto == "immagine" ? delete prodottoCopy[i][keyprodotto] : true

      }
    }


  prodottoCopy.forEach(function callback(value, index) {
    console.log(index)
    console.log(value.unicoID);
    let immagineDaAggiungere = immaginiCopy[index].immagineCaricata
    console.log(immagineDaAggiungere)
    // value.unicoID == immaginiCopy[index].value.idProdotto ? console.log('yes') : console.log('no')
  });
  */


  return (
    <React.Fragment>
      <div className='container-fluid pt-1 mt-5 bg-stripe'>
        <div className='container text-center mt-5 pb-1'>
          <h1 className='display-2 text-white text-uppercase'>Elenco Prodotti</h1>
        </div>
      </div>

      <section className={"py-3" + " " + bgType + " " + textType}>

        <div className="container">
        <p>Filtra per:</p>
                    <div className="row mb-3 border-2 border-info">
                        <div className="col-sm-2 accordion accordion-flush">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                       </div>
                       <div className="col-sm-2 accordion accordion-flush">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                       </div>

                    </div>

          <div className="container">
            <div className="row mb-3">

              <div className="col-md-12 mt-5">
                <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>

                          <th scope="col">Immagine</th>
                          <th scope="col">Codice Int.</th>
                          <th scope="col">Nome</th>
                          <th scope="col">Categoria</th>
                          <th scope="col">Marca</th>
                          <th scope="col">Modello</th>
                          <th scope="col">Anno</th>
                          <th scope="col">Peso</th>
                          <th scope="col">Ubicazione</th>

                        </tr>
                      </thead>
                      <tbody>
                        {prodotto.map((e) => {
                          return (
                            <tr keyprodotto={e._id} key={e._id}>
                              <td><img src={`http://localhost:8080/images/${e.immagine}`} style={{ width: 80 }} /></td>
                              <td>{e.unicoID}</td>
                              <td>{e.nome}</td>
                              <td>{e.categoria}</td>
                              <td>{e.marca}</td>
                              <td>{e.modello}</td>
                              <td>{e.anno}</td>
                              <td>{e.peso}</td>
                              <td>{e.scaffale}</td>
                            </tr>
                          )
                        })}

                      </tbody>
                    </table>
                  </div>


                </div>




              </div>



            </div>
          </div>
        </div>

      </section>

    </React.Fragment>
  )
}

export default ElencoProdotti
