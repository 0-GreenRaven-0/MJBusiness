import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";
import AboutMajd from "./sections/AboutMajd";
import Opportunity from "./sections/Opportunity";
import AboutProgram from './sections/AboutProgram';
import Footer from "./sections/Footer";
import FreeValue from "./sections/FreeValue";

import {ScrollTrigger, SplitText} from 'gsap/all'
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  
  useEffect(() => {
    // Wait for ALL content (images, fonts, etc.) to load
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('load', handleLoad)

    // Backup refresh after a short delay
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(timeout)
      // Cleanup all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div>
      <Hero/>
      <Testimonials/>
      <AboutMajd/>
      <FreeValue/>
      <Opportunity/>
      <Footer/>
    </div>
  )
}

export default App