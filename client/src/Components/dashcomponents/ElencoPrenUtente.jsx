import React from 'react'
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { useState, useEffect } from "react"


function ElencoPrenUtente() {

    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    const role = useSelector((state) => state.setRole.value)

    const {user} = UseAuthContext()

    const [data, setData] = useState([]);


    const makeAPICall = async () => {
        try {
          const response = await fetch(`https://pulsefit-server.vercel.app/api/bookings/${user.user_id}`, {mode:'cors'});
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
                        <h1 className='display-2 text-white text-uppercase'>Elenco Prenotazioni</h1>
                    </div>
                </div>
            <section className={"py-3" + " " + bgType + " " + textType}>

                <div className="container">
                    <h1 className="section-title pt-5">Elenco Prenotazioni</h1>
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {data.map((e)=>{
                      return(
                        <div className="col" key={e._id}>
                            <div className="card">
                                <h5 className="card-header">Data Prenotazione: {e.today}</h5>
                                <div className="card-body">
                                    <h5 className="card-title">Giorno scelto: {e.giorno}</h5>
                                    <h5 className="card-title">Mese scelto: {e.mese}</h5>
                                    <h5 className="card-title">Ora scelta: {e.ora} </h5>
                                    <h5 className="card-title">Minuto scelto: {e.minuto}</h5>
                                    <hr/>
                                    <h5 className="card-title">Stato: <span className='text-warning'>{e.status}</span></h5>
                                </div>
                            </div>
                        </div>
                        )})}



                    </div>
                    </div>
                </div>

            </section>

        </React.Fragment>
    )
}

export default ElencoPrenUtente