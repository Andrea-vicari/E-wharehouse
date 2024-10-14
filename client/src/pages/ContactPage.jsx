import React from 'react'
import Contact from '../Components/Contact'
import { useSelector} from 'react-redux'
import Footer from '../Components/Common/Footer';
import Navbar from '../Components/Common/NavbarFixedTop';

function ContactPage() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType, textColor;

  themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"

  return (
    <>
    <Navbar />
    <div className={'container-fluid pt-5 mt-5' + " " + bgType + " " + textType}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.1582951985947!2d9.264702276443382!3d45.60746282386834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bbd722952ddb%3A0xa1816325db013253!2sVia%20Achille%20Grandi%2C%206-18%2C%2020854%20Vedano%20al%20Lambro%20MB!5e0!3m2!1sit!2sit!4v1712903964058!5m2!1sit!2sit" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className={'container-fluid'  + " " + bgType + " " + textType}>
      <div className='container'>
        <div className="row">

          <div className="col-md-8 pt-4">
          <h1 className="mb-0 fw-bolder text-uppercase">Contact us</h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident minima expedita commodi doloribus ad ipsum ex autem consequatur repellendus aut ipsam animi, eaque quibusdam quasi iusto excepturi distinctio dicta placeat.</p>


            <Contact />
          </div>
          <div className="col-md-4 d-flex flex-column pt-4 justify-content-center">
            <div className="col-sm-4 text-center contact-item mx-auto">
              <a className="icon" href="http://goo.gl/maps/0m7WQ" target="_blank"><i className="bi bi-geo-fill fa-fw text-primary"></i></a>
              <h2>Our Location</h2>
              <p>123 Your City, ST, 12345</p>
            </div>
            <div className="col-sm-4 text-center contact-item mx-auto">
              <a className="icon" href="mailto:mail@example.com"><i className="bi bi-envelope text-primary"></i></a>
              <h2>Send a mail</h2>
              <p>mail@example.com</p>
            </div>
            <div className="col-sm-4 text-center contact-item mx-auto mb-4">
              <a className="icon" href="telto:01 234-56789"><i className="bi bi-phone fa-fw text-primary"></i></a>
              <h2>Call us</h2>
              <p>+01 234-56789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />

    </>
  )
}

export default ContactPage