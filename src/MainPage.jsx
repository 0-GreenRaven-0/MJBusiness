import Hero from "./sections/Hero"
import AboutMajd from "./sections/AboutMajd"
import AboutSaas from "./sections/AboutSaas"
import Testimonials from "./sections/Testimonials"
import FreeValue from "./sections/FreeValue"
import Opportunity from "./sections/Opportunity"
import Footer from "./sections/Footer"
import Dropshipping from "./sections/Dropshipping"
import IsForYou from "./sections/IsForYou"

const MainPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <AboutMajd/>
      <AboutSaas/>
      <Testimonials/>
      <IsForYou/>
      <Dropshipping/>
      <FreeValue/>
      <Opportunity/>
      <Footer/>
    </div>
  )
}

export default MainPage
