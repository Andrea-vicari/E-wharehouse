import React from 'react'
import { Link } from "react-router-dom";


function MenuWare() {




  return (
    <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">

              <li className="nav-item">
                <Link className="nav-link fs-6" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6" to={'/elencoprodotti'} >Elenco Prodotti</Link>
              </li>



            </ul>
  )
}

export default MenuWare
