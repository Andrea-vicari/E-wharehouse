import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import {  Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo-magazzino-footer.svg";
import axios from 'axios'

var prodDaCancID

function CancellaProdotto() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  const navigate = useNavigate();

  let clicked = useLocation();

  prodDaCancID = clicked.state

  console.log('ID del prodotto da cancellare')
  console.log(prodDaCancID)
	
                        function closeModal(){
				      document.getElementById('modale_prodotto').classList.remove("d-block")
				      navigate("/elencoprodotti");
				    }
				    function openModal(){
				      document.getElementById('modale_prodotto').classList.add("d-block")
				    }
	

 const cancellaProd = () => {
	
		
	openModal()
 
    axios.delete(`http://localhost:8080/api/prodotti/delete/${prodDaCancID}`)

 }

  return (
    <React.Fragment>

      <section className={"py-3" + " " + bgType + " " + textType}>



        <div className="container-fluid  mt-0 pt-0">
            <div className="row mb-3">

              <div className="col-md-12">
                <div className="p-3 mb-2">
                <div className="row bg-body-tertiary pt-3">
                   <div className="col-sm-10 text-center">
                   
                   	<h5>Richiesta cancellazione prodotto</h5>
				 <button onClick={()=>cancellaProd()} type="button" className="btn btn-large btn-outline-success mx-1 mb-2">
                        <i className='bi bi-trash'></i> OK, CANCELLA
                      </button>
                      
                      <Link to="/elencoprodotti" type="button" className="btn btn-large btn-outline-danger mx-1">
                        <i className='bi bi-arrow-left-circle'></i> NO, TORNA ALL'ELENCO PRODOTTI
                      </Link>
                    </div>
            {/** MODALE */}
            <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_prodotto">
              <div className="modal-dialog-centered modal-xl bg-dark" role="document">
                <div className="modal-content rounded-4 shadow bg-dark" >
                  <div className="modal-header d-flex justify-content-between">
                  <img src={logo} className='img-fluid'></img>
                    <h2 className="modal-title text-white text-center">PRODOTTO CANCELLATO</h2>

                  </div>
                  <div className="modal-body py-3 text-white">

                  <h4 className="text-white mt-3 fw-bold">Prodotto cancellato correttamente!</h4>
                    </div>

                  <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                    <div className="modal-footer">
                      <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                      <i className='bi bi-x-circle px-2 fs-4'></i>Chiudi
                      </button>
                    </div>
                  </div>
              </div>
            </div>
            </div>
            {/** FINE MODALE */}


                </div>
               

                </div>




              </div>



            </div>
          </div>
      </section>

    </React.Fragment>
  )
}

export default CancellaProdotto
