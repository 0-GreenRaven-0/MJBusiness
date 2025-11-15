import Hero from "./sections/Hero"
import AboutMajd from "./sections/AboutMajd"
import AboutSaas from "./sections/AboutSaas"
import Testimonials from "./sections/Testimonials"
import FreeValue from "./sections/FreeValue"
import Opportunity from "./sections/Opportunity"
import Footer from "./sections/Footer"
import Dropshipping from "./sections/Dropshipping"
import IsForYou from "./sections/IsForYou"
import ParticleBackground from "./Utility/ParticleBackground"

const MainPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <AboutMajd/>
      <AboutSaas/>
      <Testimonials/>
      <div className="bg3">
      <IsForYou/>
      <Dropshipping/>
      </div>
      <FreeValue/>
      <Opportunity/>
      <Footer/>
    </div>
  )
}

export default MainPage

/* <div className="relative overflow-hidden">
 <ParticleBackground /> */