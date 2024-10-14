import React from 'react'
import ProjectsLink from '../Components/ProjectsLink';
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/NavbarFixedTop';

function NutrizionePage() {
  return (
    <>
    <Navbar />
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>

        <h1 className='display-2 text-white text-uppercase'>Nutrizione</h1>
      </div>
    </div>
    <ProjectsLink />
    <Footer />
    </>
  )
}

export default NutrizionePage