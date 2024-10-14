import React from 'react'
import {useState, useEffect} from 'react'


function Uploader() {

const [image, setImage] = useState(null);

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const formData = new FormData();
    // image is the state which has image details
    formData.append('file', image);
    var name;
    await axios.post("http://localhost:8080/uploads", formData, {
      withCredentials: true,
    })
    .then((response) => {
      toast.success("Image uploaded successfully");
      name = response.data;
    });
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className='container py-5 mt-5'>
		<form onSubmit={handleSubmit} enctype="multipart/form-data">
  			<input type="file" onChange={(event) => setImage(event.target.files[0])} />
  		</form>
    </div>
  )
}

export default Uploader