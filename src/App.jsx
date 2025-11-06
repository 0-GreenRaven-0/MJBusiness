import MainPage from './MainPage';
import ThankYouPage from './ThankYouPage';
import ConfirmationPage from './ConfirmationPage';
import {ScrollTrigger, SplitText} from 'gsap/all'
import gsap from "gsap";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router';


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
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/thank-you' element={<ThankYouPage/>}/>
      <Route path='/confirmed' element={<ConfirmationPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App