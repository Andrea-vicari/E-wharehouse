import React from "react";
import { useState, useEffect } from "react"
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

var userID

function SingleUser() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "text-dark" : textType = "text-bg-dark"

  const [data, setData] = useState([]);
  const [work, setWork] = useState([]);
  const {user} = UseAuthContext()

  let clicked = useLocation();

  userID = clicked.state

  console.log(userID)

  const makeAPICall = async () => {
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
       makeAPICall();
    }

  }, [user])

  var filteredList = [];
  let terVar = false

  data.forEach(element => {
    console.log(element)
    element._id == userID  ? filteredList.push(element) : terVar = true
    console.log(filteredList)
    return filteredList
  });



  const makeWORKOUTCall = async () => {
      try {
        const response = await fetch(`https://pulsefit-server.vercel.app/api/workouts/${userID}`, {mode:'cors'});
        const work = await response.json();
        setWork(work)

        console.log({ work })
      }
      catch (e) {
        console.log(e)
      }
    }
    useEffect(() => {
      if(work){
        makeWORKOUTCall();
      }

    }, [user])

    let singleUser = [];
    var userTraining = [];
    let fakVar = false

    data.forEach(element => {
      element._id == userID ? singleUser.push(element) : fakVar = true
    });

    work.forEach(element => {
      element.status == "OPEN" ? userTraining.push(element) : fakVar = true
      return userTraining
    });



    console.log(userTraining)

  return (
    <>
    <div className={'container-fluid mt-5 ' + bgType}>
    <h1 className="section-title pt-5">SINGOLO UTENTE</h1>
      <p className='text-center fs-3'>Vedi dettagli di ogni singolo utente</p>
      <div className="container">
        <div className="row mb-3 py-5">

            {filteredList.map((e)=>{
              var dataIsc = filteredList[0].createdAt
              var split = dataIsc.split('T')
              console.log(split)
              return(
            <div className="col-sm-4 py-3 border mb-2" key={e._id}>
                <img src={`https://pulsefit-server.vercel.app/images/${e.image}`}  style={{width:70,marginBottom:20}}/>
                <h3 className={textType}>Nome Utente: {e.username}</h3>
                <p className={textType}>Data Iscrizione: {split[0]}</p>

            </div>
              )})}
              <div className="col-sm-4 py-3 border mb-2">
              <h3 className={textType}>Aggiungi Training</h3>
              <Link type="button" to={`/newtraining/${userID}`} state={userID} className="btn btn-danger fs-6">
              <i className="bi bi-plus-square fs-4 mx-2"></i>
              Aggiungi
              </Link>
              </div>


            <div className="col-sm-4 py-3 border mb-2">
              <h3 className={textType}>Schede Aperte</h3>
              <ul className="list-unstyled ps-0">
              {userTraining.map((e)=>{
              return(
                  <li key={e.title}>
                    <Link className="icon-link mb-1" state={e._id} to={`/schedatrainerpage/${e._id}`}>
                      <i className="bi bi-arrow-right-circle"></i>
                      {e.title}
                    </Link>
                  </li>

              )})}
               </ul>
            </div>
            <div className="col-sm-4 py-3 border mb-2">
              <h3 className={textType}>Storico Schede</h3>
              <p className={textType}>Elenco delle schede completate</p>
              <ul className="list-unstyled ps-0">
                  <Link className="icon-link mb-1 text-decoration-none text-white" to={`/elencoschedechiusepage/`}
                  state={userID}>
                  <i className="bi bi-arrow-right-circle-fill fs-4 text-danger"></i>
                      <span className={"fs-4" + " " + textType}>Schede Completate</span>
                  </Link>
              </ul>
            </div>
      </div>
    </div>


    </div>


    </>
  )
}

export default SingleUser