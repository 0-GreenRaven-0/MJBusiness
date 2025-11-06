import DropshippingCircle from "../Utility/DropshippingCircle"
import AppearOnScroll from '../Utility/AppearOnScroll';
import {FaDotCircle} from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Dropshipping = () => {

  const {t} = useTranslation()
  
  return (
    <div className='px-2 pt-10 pb-20 bg-gray-500 text-darkCyan'>
      <AppearOnScroll 
        animation="fade-up"
        threshold={0.3}
        duration={0.5}
        retrigger={true}>
        <h1 className="text-center font-bold text-white md:py-5 xl:py-0">What exactly is drop<span className="text-blue-300">shipping</span>?</h1>
      </AppearOnScroll>
      <div className="flex flex-col xl:flex-row xl:pt-10 ">
           <div className="xl:px-20">
             <DropshippingCircle/>
           </div>
          <div>
        <AppearOnScroll 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          retrigger={true}>
          <p className="px-0">Dropshipping is an online business model where you sell different kinds of products through an online Shopify store, similar to e-commerce, except you don't have to manage inventory.</p>
        </AppearOnScroll>
       <div>
       <br/>
        <AppearOnScroll 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          retrigger={true}>
          <h2 className="md:text-4xl xl:text-2xl">How does it work?</h2>
        </AppearOnScroll>
        <br/>
          <ul className='flex flex-col items-start gap-5 text-white'>
                        <AppearOnScroll 
                          animation="fade-up"
                          threshold={0.3}
                          duration={0.5}
                          retrigger={true}>
                            <li className='bl-point'>
                              <FaDotCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
                              {t('dropshipping.bullet1')}
                            </li>
                        </AppearOnScroll>

                        <AppearOnScroll 
                          animation="fade-up"
                          threshold={0.3}
                          duration={0.5}
                          retrigger={true}>
                            <li className='bl-point'>
                              <FaDotCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
                              {t('dropshipping.bullet2')}
                            </li>
                        </AppearOnScroll>

                        <AppearOnScroll 
                          animation="fade-up"
                          threshold={0.3}
                          duration={0.5}
                          retrigger={true}>
                            <li className='bl-point'>
                              <FaDotCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
                              {t('dropshipping.bullet3')}
                            </li>
                        </AppearOnScroll>
          </ul>
          <br/>
        <AppearOnScroll 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          retrigger={true}>
          <p className="px-0">Based on this model, Majd was able to develop his dropshipping software that contains the tools, knowledge, strategies, and all his experience so you never have to start from scratch.</p>
        </AppearOnScroll>
       </div>
      </div>
      </div>


    </div>
  )
}

export default Dropshipping