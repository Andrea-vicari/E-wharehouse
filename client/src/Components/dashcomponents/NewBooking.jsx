import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/pulseFit_logo.svg";
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";



var userID

const NewBooking = () =>{

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-light" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  // let clicked = useLocation();



  const {user} = UseAuthContext()
  userID = user

  console.log("userID===")
  console.log(userID)

  var today = new Date().toDateString()

  const elencoMesi = [
    "Gennaio","Febbraio","Marzo","Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];
  const elencoGiorni = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
  ];
  const elencoOre = [
    8,9,10,11,12,13,14,15,16,17,18,19,20,21
  ];
  const elencoMinuti = [
    0,30
  ];
  const elencoAnni = [
    2024,2025,2026,2027,2028,2029,2030,2031
  ];

  console.log(today)
    const [utente, setUser] = useState('')
    const [giorno, setGiorno] = useState('')
    const [mese, setMese] = useState('')
    const [anno, setAnno] = useState('')
    const [ora, setOra] = useState('')
    const [minuto, setMinuto] = useState('')

    const [date, setToday] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setemptyFields] = useState([])

    const handleSubmit = async (e) =>{

        e.preventDefault()

        setUser(userID)
        setToday(today)
        openModal()
        const booking = {today, user, giorno, mese, anno, ora, minuto}

        const response = await fetch('https://pulsefit-server.vercel.app/api/bookings', {

            method: 'POST',
            body: JSON.stringify(booking),
            headers:{
                'Content-Type': 'application/json'
              }
        })


        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setemptyFields(json.emptyFields)
        }

        if(response.ok){
            console.log('Aggiunto', json)
            setToday('')
            setGiorno('')
            setMese('')
            setAnno('')
            setOra('')
            setMinuto('')
            setUser('')
            setError(null)
            setemptyFields([])
        }


    }

    function closeModal(){
      document.getElementById('modale_workout').classList.remove("d-block")
    }
    function openModal(){
      document.getElementById('modale_workout').classList.add("d-block")
    }


    return (
      <div className={"container-fluid py-5 " + bgType}>
      <div className={"container py-5 " + bgType}>

        <div className="d-flex justify-content-center align-items-center py-5">
          <div className={"p-3 rounded w-100 " + bgType + textType}>
            <h2 className={textType}>Prenota la tua prossima lezione</h2>
            <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="title">
                  <strong>Giorno</strong>
                </label>

                <select className="form-select" onChange={(e) => setGiorno(e.target.value)}>
                <option>Scegli il giorno</option>
                {elencoGiorni.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>

              <div className="mb-3">
              <label htmlFor="title">
                  <strong>Mese</strong>
                </label>

                <select className="form-select" onChange={(e) => setMese(e.target.value)}>
                <option>Scegli il mese</option>
                {elencoMesi.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>

              <div className="mb-3">
              <label htmlFor="title">
                  <strong>Anno</strong>
                </label>

                <select className="form-select" onChange={(e) => setAnno(e.target.value)}>
                <option>Scegli l'annno</option>
                {elencoAnni.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>
              <div className="mb-3">
              <label htmlFor="title">
                  <strong>Ora</strong>
                </label>

                <select className="form-select" onChange={(e) => setOra(e.target.value)}>
                <option>Scegli l'ora</option>
                {elencoOre.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>

              <div className="mb-3">
              <label htmlFor="title">
                  <strong>Minuto</strong>
                </label>

                <select className="form-select" onChange={(e) => setMinuto(e.target.value)}>
                <option>Scegli minuto</option>
                {elencoMinuti.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                </select>
              </div>

              <button type="submit" className="btn btn-danger w-100 rounded-0 mt-3" onClick={()=>setUser(userID)}>
                Inserisci
              </button>

              <Link to={`/dashboardpage`} type="submit" className="btn btn-outline-danger w-100 rounded-0 mt-3">
                Torna Indietro
              </Link>
              {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
            </form>

            {/** MODALE */}
            <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_workout">
              <div className="modal-dialog-centered modal-xl bg-dark" role="document">
                <div className="modal-content rounded-4 shadow bg-dark" >
                  <div className="modal-header d-flex justify-content-between">
                  <img src={logo} style={{width: 100}} className='img-fluid'/>
                    <h2 className="modal-title text-white text-center">LEZIONE PRENOTATA</h2>

                  </div>
                  <div className="modal-body py-3 text-white">

                  <h4 className="text-white mt-3 fw-bold">Controlla la sezione PRENOTAZIONI per verificarne l'approvazione</h4>
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

  );

}

export default NewBooking