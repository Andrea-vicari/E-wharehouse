import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


function ElencoSchedeAperte(){

    // Dark Theme Logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

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

      let openTraining = [];
      let fakeVar = false

      data.forEach(element => {
        element.status == "OPEN" ? openTraining.push(element) : fakeVar = true

      });

    console.log(openTraining)



    return(

        <div className="container-fluid pt-5 mt-5">
            <div className="col-md-6 pb-4 mx-auto">
            <div className={"p-3 rounded w-100 mx-auto" + " " + textType + " " + bgType}>
                  <h3 className={textType}>Scheda Allenamento</h3>
                 <div className="list-unstyled">
                  {openTraining.map((e)=>{
                      return(
                      <Link key={e._id} to={`/schedautentepage/${e._id}`} state={e._id} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <i className="bi bi-arrow-right-circle-fill fs-4 text-success"></i>
                       <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>

                            <h5 className="mb-0">{e.title}</h5>

                          </div>

                        </div>
                      </Link>
                       )})}
                  </div>

                <hr className="col-3 col-md-2 mb-3"/>
                <h3 className="text-white">Storico schede</h3>
                <p>Elenco delle schede completate</p>
                <ul className="list-unstyled">
                <Link className="list-group-item list-group-item-action d-flex gap-3" to="/elencoschedechiusepage">
                <i className="bi bi-arrow-right-circle-fill fs-4 text-danger"></i>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                          <div>
                            <h5 className="mb-0">Schede Completate</h5>
                          </div>
                      </div>
                </Link>

                </ul>
                <hr className="col-3 col-md-2 mb-3"/>
                <Link to="/" className="btn btn-outline-danger d-inline-flex align-items-center px-4" type="button">
                 Home
                  <i className='fa fa-arrow-circle-left ms-1'></i>
                </Link>

            </div>

            </div>

        </div>
    )

}

export default ElencoSchedeAperte