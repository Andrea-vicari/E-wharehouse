import React from 'react'
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { Link } from 'react-router-dom';
import axios from 'axios'

function UserProfile() {

    // Dark Ligth Logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()
    var singleID = user.user_id
    console.log(singleID)

    const makeUSERCall = async () => {
        try {
          const response = await fetch('https://pulsefit-server.vercel.app/api/users/');
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
           makeUSERCall();
        }

      }, [user])

      var singleUser = [];
      let terVar = false

      data.forEach(element => {
        console.log(element)
        element._id == singleID  ? singleUser.push(element) : terVar = true
        return singleUser
      });


      const [file, setFile ] = useState()
      const [error, setError] = useState(null)
      const [good, setGood] = useState(null)



      const handleUpload = () =>{

        const formdata = new FormData()
        formdata.append('file', file)
        axios.patch(`https://pulsefit-server.vercel.app/api/users/${singleID}`, formdata)
        .then(res=> res.status == 200 ? alert('Immagine caricata correttamente') : false)
         .catch(err => setError(err))
        console.log(error)
        console.log(file)
      }






      function closeModal(){
        document.getElementById('modale_workout').classList.remove("d-block")

      }
      function openModal(){
        document.getElementById('modale_workout').classList.add("d-block")

      }


  return (
    <>
    {singleUser.map((e)=>{

      var dataIsc = singleUser[0].createdAt
      var split = dataIsc.split('T')
      console.log(split)

    return(
    <div className="col" key={e._id}>
            <div className={bgType}>
                <div className=''>
                    <img src={`https://pulsefit-server.vercel.app/images/${e.image}`} style={{width:270}}/>
                </div>

                <div className="card-body">
                    <h4 className="card-title mb-4 mt-2">{e.username}</h4>
                    <hr></hr>
                    <p className="card-text">Data Iscrizione: {split[0]}</p>
                    <button className='btn btn-primary mt-1' onClick={()=>openModal()}>Aggiungi Immagine Profilo</button>
                </div>
            </div>

              <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_workout">
              <div className='container'>
                <div className='px-5'>
                  <div className="modal-dialog-centered bg-dark" role="document">
                    <div className="modal-content rounded-4 shadow bg-dark" >
                      <div className="modal-header d-flex justify-content-between">

                        <h2 className="modal-title text-white text-center">CARICA IMMAGINE</h2>

                      </div>
                      <div className="modal-body py-3 text-white">
                      <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">Seleziona il file e clicca CARICA</label>
                          <input className="form-control" type="file" required={true} id="formFile" onChange={(e)=> setFile(e.target.files[0])}/>
                          <button className='btn btn-primary mt-3' onClick={handleUpload}>CARICA</button>
                        {error && <p className='fs-3 text-danger mt-3'>Prego, Seleziona un immagine</p>}

                      </div>

                      </div>

                      <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                        <div className="modal-footer">
                          <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                          <i className='fa fa-times px-2 fs-4'></i>OK, Chiudi
                          </button>
                        </div>
                      </div>
                  </div>
                  </div>
                </div>

              </div>
              </div>



     </div>
     )})}
    </>
  )
}

export default UserProfile
