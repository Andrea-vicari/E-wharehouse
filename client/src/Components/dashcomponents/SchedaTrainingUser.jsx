import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import { UseAuthContext } from "../../hooks/UseAuthContext"
import logo from "../../assets/images/pulseFit_logo.svg";
import { useSelector } from 'react-redux'
import Cronometro from './Cronometro';

function SchedaTraining(){

    let clicked = useLocation();
    var title = clicked.state;

    console.log(title)


    const [data, setData] = useState([]);
    const {user} = UseAuthContext()



    const makeAPICall = async () => {
        try {
          const response = await fetch(`https://pulsefit-server.vercel.app/api/workouts/${user.user_id}`, {mode:'cors'});
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


      let singleTraining = [];
      let terVar = false

      data.forEach(element => {
        element._id == title ? singleTraining.push(element) : terVar = true
      });

      console.log(singleTraining)
      var registered = new Date().toDateString()

      const [error, setError] = useState(null)
      const [dataEx, setDataEx] = useState(registered)

      const handleSubmit = async (e) =>{

        e.preventDefault()

        const workout = {registered}

        const response = await fetch(`https://pulsefit-server.vercel.app/api/workouts/close/${title}`, {

            method: 'PATCH',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
              }
        })


        const json = await response.json()

        if(!response.ok){
            setError(json.error)
         }

        if(response.ok){
            setDataEx(registered)
            setError(null)
            openModal()
            console.log('Modificato', json)
          }

        }


    function closeModal(){
      document.getElementById('modale_workout').classList.remove("d-block")
    }
    function openModal(){
      document.getElementById('modale_workout').classList.add("d-block")
    }


    function openCrono(){
      document.getElementById('cronometro').classList.add("d-block")
    }


    return(


        <div className="container-fluid bg-fitness pt-5 mt-4">

            <div className="d-flex justify-content-center align-items-center pb-5 mx-auto">
            {singleTraining.map((e)=>{
            return(
              <div className='container mx-auto' key={e._id}>
                <div className="card border-none mb-3 rounded-3 w-75 border-0 mx-auto" key={e._id}>
                  <div className="card-header py-3 text-bg-danger">
                    <h1 className="my-0 fs-1">{e.title}</h1>
                   </div>
                  <div className="card-body bg-dark">
                    <h6 className="text-white card-title pricing-card-title">Data Emissione<small className="text-white fw-light"> {e.today}</small></h6>
                    <ul className="list-unstyled mt-3 mb-2 text-white">
                      <li className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                        <h5 className="mb-3">Serie: {e.series}</h5>
                        </div>
                      </div>
                      </li>
                      <li className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                        <h5 className="mb-3">Ripetizioni: {e.reps}</h5>
                        </div>
                      </div>
                      </li>
                      <li className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                        <h5 className="mb-3">Riposo: {e.rest} sec</h5>
                        </div>
                      </div>
                      </li>
                      <li className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                        <h5 className="mb-3">Carico: {e.loads} KG</h5>
                        </div>
                      </div>
                      </li>
                    </ul>
                    <button onClick={()=>openCrono()} className="btn btn-outline-danger d-inline-flex align-items-center px-4" type="button">
                        Cronometro
                        <i className='bi bi-alarm fs-1 ms-1'></i>
                    </button>
                    <hr className="col-3 col-md-2 mb-3 w-100 text-danger"/>
                    <h3 className='text-white'>Eseguita il:</h3>
                    {e.registered.map((e)=>{
                  return(
                    <ul className='list-group'>
                    <li className='list-group-item mb-3'>{e.registered}</li>
                    </ul>
                  )})}
                   <hr className="col-3 col-md-2 mb-3 w-100 text-danger"/>
                   <h3 className='text-white'>Registra esecuzione:</h3>

                    <button onClick={(e)=>handleSubmit(e)} className="btn btn-success d-inline-flex align-items-center" type="button">
                    Allenamento Eseguito
                    <i className='bi bi-hand-thumbs-up ms-1'></i>
                    </button>
                    <hr className="col-3 col-md-2 w-100 text-danger"/>

                  <Link to="/elencoschedeapertepage" className="btn btn-outline-danger d-inline-flex align-items-center px-4" type="button">
                  Torna alla scheda
                    <i className='bi bi-arrow-left-circle ms-1'></i>
                  </Link>

                  </div>

                </div>
              </div>



            )})}


          {/** MODALE */}
          <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_workout">
            <div className="modal-dialog-centered large-modal bg-dark" role="document">
              <div className="modal-content rounded-4 shadow bg-dark" >
                <div className="modal-header d-flex justify-content-between">
                <img src={logo} className='img-fluid'></img>
                  <h2 className="modal-title text-white text-center">ALLENAMENTO REGISTRATO</h2>

                </div>
                <div className="modal-body py-3 text-white">

                <h4 className="text-white mt-3 fw-bold">Allenamento registrato correttamente!</h4>
                  </div>

                <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                  <div className="modal-footer">
                    <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                    <i className='bi bi-alarm px-2 fs-4'></i>Chiudi
                      </button>
                  </div>
                </div>
            </div>
          </div>
          </div>
          {/** FINE MODALE */}

        <Cronometro />


            </div>
        </div>
    )

}

export default SchedaTraining