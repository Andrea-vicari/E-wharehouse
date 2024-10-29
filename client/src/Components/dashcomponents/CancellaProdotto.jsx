import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react";
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

var prodDaCancID

function CancellaProdotto() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  const role = useSelector((state) => state.setRole.value)

  const { user } = UseAuthContext()
  
  let clicked = useLocation();
  
  prodDaCancID = clicked.state
  
  console.log('ID del prodotto da cancellare')
  console.log(prodDaCancID)
  
useEffect(() => {
      axios.delete(`http://localhost:8080/api/prodotti/delete/${prodDaCancID}`)
      .then(res => {
          if(res.data.deleted) {
              navigate('/dashboard')
          }
      }).catch(err => console.log(err))
    }, [])
 
 



  return (
    <React.Fragment>

      <section className={"py-3" + " " + bgType + " " + textType}>
      <div className='container-fluid pt-1 mt-5'>
        <div className='container text-center mt-5 pb-1'>
          <h1 className='text-primary text-uppercase'>Cancella Prodotto</h1>
        </div>
      </div>


        <div className="container-fluid  mt-0 pt-0">
            <div className="row mb-3">

              <div className="col-md-12">
                <div className="p-3 mb-2">
                <div className="row bg-body-tertiary pt-3">
                   <div className="col-sm-10">
                      <p className="text-center">STAI PER CANCELLARE IL PRODOTTO</p>
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
