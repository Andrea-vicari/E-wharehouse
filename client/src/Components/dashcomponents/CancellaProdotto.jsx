import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

var prodDaCancID

function CancellaProdotto() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"



  let clicked = useLocation();

  prodDaCancID = clicked.state

  console.log('ID del prodotto da cancellare')
  console.log(prodDaCancID)


 const cancellaProd = () => {

  useEffect(() => {
    axios.delete(`http://localhost:8080/api/prodotti/delete/${prodDaCancID}`)
    .then(res => {
        if(res.ok) {
        	 console.log(res.json)
            console.log('Cancellato', json)
            navigate('/dashboard')
        }
    }).catch(err => console.log(err))
  }, [])

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
                   <i className='bi bi bi-check-square fs-1 text-success py-5'></i>


                      <p className="text-center">PRODOTTO CANCELLATO CORRETTAMENTE</p>
                      <Link to="/elencoprodotti" type="button" className="btn btn-large btn-outline-primary mx-1">
                        <i className='bi bi-arrow-left-circle'></i> TORNA ALL'ELENCO PRODOTTI
                      </Link>
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

export default CancellaProdotto
