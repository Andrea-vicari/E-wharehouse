import DashNav from '../Components/Common/DashNav';
import Footer from '../Components/Common/Footer';
import Slider from '../Components/Slider';
import CalltoActionSmall from '../Components/CallToActionSmall';
import Prices from '../Components/Prices';
import CallToAction from '../Components/CallToAction';
import Blog from '../Components/Blog';
import Services from '../Components/Services';
import Features from '../Components/Features';

function HomepageOne() {


  return (
    <>
    <DashNav />
    <Slider />
    <Services />
    <CallToAction />
    <Features/>
    <CalltoActionSmall />
    <Blog />
    <Footer />

    </>

  )
}

export default HomepageOne
