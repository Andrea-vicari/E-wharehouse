import React from 'react'
import ServicesSerPage from '../Components/ServicesSerPage';
import CalltoActionSmall from '../Components/CallToActionSmall';
import NutrizioneIntro from '../Components/NutrizioneIntro';
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/NavbarFixedTop';

function ServicePage() {
  return (
    <>
    <Navbar />
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>I nostri servizi</h1>
      </div>
    </div>
    <ServicesSerPage />
    <CalltoActionSmall />
    <NutrizioneIntro />
      <Footer />
    </>
  )
}

export default ServicePage