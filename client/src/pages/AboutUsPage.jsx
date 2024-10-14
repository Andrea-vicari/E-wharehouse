import React from 'react'
import FeaturesAbout from '../Components/FeaturesAbout';
import Team from '../Components/Team';
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/NavbarFixedTop';


function AboutUsPage() {
  return (
    <>
    <Navbar />
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>Chi siamo</h1>
      </div>
    </div>
    <FeaturesAbout />
    <Team />
    <Footer />
    </>
  )
}

export default AboutUsPage