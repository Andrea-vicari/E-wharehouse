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



  return (
    <>
    {singleUser.map((e)=>{

      var dataIsc = singleUser[0].createdAt
      var split = dataIsc.split('T')
      console.log(split)

    return(
    <div className="col" key={e._id}>
            <div className={bgType}>

                <div className="card-body">
                    <h4 className="card-title mb-4 mt-2">{e.username}</h4>
                    <hr></hr>
                    <p className="card-text">Data Iscrizione: {split[0]}</p>

                </div>
            </div>





     </div>
     )})}
    </>
  )
}

export default UserProfile