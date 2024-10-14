import React from 'react'
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { UseAuthContext } from "../../hooks/UseAuthContext"
import { Link } from 'react-router-dom';

function UsersList() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  const [data, setData] = useState([]);
  const {user} = UseAuthContext()


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
      element.email !== user.email  ? filteredList.push(element) : terVar = true
      return filteredList
    });

  return (
    <>
    <div className={'container-fluid mt-5 ' + bgType}>
    <h1 className="section-title pt-5">USER LIST</h1>
      <p className='text-center fs-3'>Start with us your next training!</p>

    <div className={'container ' + bgType}>

      <div className="row mb-3">
      {filteredList.map((e)=>{
       return(
        <div className="col-sm-4 mb-3" key={e._id}>
          <div className="list-group">
            <Link to={`/singleuser/${e._id}`} state={e._id} className="list-group-item list-group-item-action d-flex gap-3 py-3 align-items-center" aria-current="true">
            <img src={`https://pulsefit-server.vercel.app/images/${e.image}`}  style={{width:70}}/>
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>

                  <h4 className="mb-0">{e.username}</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>

    )})}
    </div>
    </div>
    </div>


    </>
  )
}

export default UsersList