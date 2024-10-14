import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

var userID

function ElencoSchedeChiuse(){

    // Dark Theme Logics
    const themeType = useSelector((state) => state.counter.value)
    let bgType, textType;
    themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

    const [data, setData] = useState([]);
    const {user} = UseAuthContext()

    let clicked = useLocation();

    userID = clicked.state

    console.log(userID)


    const makeAPICall = async () => {
        try {
          const response = await fetch(`https://pulsefit-server.vercel.app/api/workouts/closed/closedWorks`, {mode:'cors'});
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

      let singleUserTraining = [];
      let fakeVar = false

      data.forEach(element => {
        element.user == userID ? singleUserTraining.push(element) : fakeVar = true

      });

    console.log(singleUserTraining)

    return(

        <div className="container-fluid pt-5 mt-5">
            <div className="col-md-6 pb-4 mx-auto">
            <div className={"p-3 rounded w-100" + " " + textType + " " + bgType}>
                  <h3 className="text-white">Schede Completate</h3>
                  <hr className="col-3 col-md-2 mb-3"/>

                  <div className="row mb-3 text-center">
                  {singleUserTraining.map((e)=>{
                      return(

                    <div className="col-12" key={e._id}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h6 className="card-title">{e.title}</h6>

                                <p className="card-text mb-0">SERIE: {e.series}</p>
                                <p className="card-text mb-0">REPS: {e.reps}</p>
                                <p className="card-text mb-0">CARICO: {e.loads}</p>
                                <p className="card-text mb-0">RIPOSO: {e.rest}</p>
                            </div>
                            <div className="card-footer">
                            <small className="card-text mb-0">CHIUSA IL: {e.dataChiusura}</small>
                            </div>
                        </div>
                    </div>


                     )})}
                  </div>
                  <Link to={"/dashboardpage"} className="btn btn-outline-danger d-inline-flex align-items-center px-4" type="button">
                 Indietro
                  <i className='fa fa-arrow-circle-left ms-1'></i>
                </Link>
            </div>

            </div>

        </div>
    )

}

export default ElencoSchedeChiuse