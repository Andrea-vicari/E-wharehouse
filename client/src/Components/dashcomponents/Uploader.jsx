import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'


function Uploader() {

const [file, setFile] = useState(null);

const handleSubmit =  (event) => {
  event.preventDefault(event);
  	const formdata = new FormData()
  	formdata.append('file', file)
	axios.post('http://localhost:8080/upload', formdata)
	 .then(res=>console.log(res))
	 .catch(err=>console.log(err))
  
};


  return (
    <div className='container py-5 mt-5'>
		
  			<input type="file" onChange={(event) => setFile(event.target.files[0])} />
  			<button type="button" className="btn btn-primary" onClick={handleSubmit}>Upload</button>
  	</div>
  )
}

export default Uploader