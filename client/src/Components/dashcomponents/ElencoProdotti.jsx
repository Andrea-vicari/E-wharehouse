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

    const {user} = UseAuthContext()

    const [data, setData] = useState([]);


    const makeAPICall = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/prodotti`, {mode:'cors'});
          const data = await response.json();
          setData(data)

          console.log({ data})
        }
        catch (e) {
          console.log(e)
        }
      }

      useEffect(() => {
        if(user){
           makeAPICall();
        }

      }, [user])


	
    return (
        <React.Fragment>
                <div className='container-fluid pt-1 mt-5 bg-stripe'>
                    <div className='container text-center mt-5 pb-1'>
                        <h1 className='display-2 text-white text-uppercase'>Elenco Prodotti</h1>
                    </div>
                </div>
            <section className={"py-3" + " " + bgType + " " + textType}>

                <div className="container">
                   
                    <div className="container">
                        <div className="row mb-3">
                           
                            <div className="col-md-12 mt-5">
                             <div className="p-3 bg-body-tertiary border rounded-3 mb-2">
                             <div className="table-responsive small">
        <table className="table table-striped">
          <thead>
            <tr>
              
              <th scope="col">Immagine</th>
              <th scope="col">#</th>
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
          {data.map((e)=>{
       	return(
            <tr key={e._id}>
              <td>1,001</td>
              <td>{e._id}</td>
              <td>{e.nome}</td>
              <td>{e.categoria}</td>
              <td>{e.marca}</td>
              <td>{e.modello}</td>
              <td>{e.anno}</td>
              <td>{e.peso}</td>
            </tr>
             )})}
                         
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
