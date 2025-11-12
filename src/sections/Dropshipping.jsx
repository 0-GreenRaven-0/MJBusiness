import DropshippingCircle from "../Utility/DropshippingCircle"
import AppearOnScroll from '../Utility/AppearOnScroll';
import {FaDotCircle} from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Dropshipping = () => {

  const {t} = useTranslation()
  
  return (
    <div className='px-2 pt-10 pb-20 text-darkCyan'>
      <AppearOnScroll 
        animation="fade-up"
        threshold={0.3}
        duration={0.5}
        >
        <h1 className="text-center font-bold text-white md:py-5 xl:py-0">{t('dropshipping.title')}<span className="text-blue-300">{t('dropshipping.titleHighlight')}</span>?</h1>
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
          >
          <p className="px-0">{t('dropshipping.description')}</p>
        </AppearOnScroll>
       <div>
       <br/>
        <AppearOnScroll 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          >
          <h2 className="md:text-4xl xl:text-2xl">{t('dropshipping.howItWorksTitle')}</h2>
        </AppearOnScroll>
        <br/>
          <ul className='flex flex-col items-start gap-5 text-white'>
                        <AppearOnScroll 
                          animation="fade-up"
                          threshold={0.3}
                          duration={0.5}
                          >
                            <li className='bl-point'>
                              <FaDotCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
                              {t('dropshipping.bullet1')}
                            </li>
                        </AppearOnScroll>

                        <AppearOnScroll 
                          animation="fade-up"
                          threshold={0.3}
                          duration={0.5}
                          >
                            <li className='bl-point'>
                              <FaDotCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
                              {t('dropshipping.bullet2')}
                            </li>
                        </AppearOnScroll>

                        <AppearOnScroll 
                          animation="fade-up"
                          threshold={0.3}
                          duration={0.5}
                          >
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
          >
          <p className="px-0">{t('dropshipping.closing')}</p>
        </AppearOnScroll>
       </div>
      </div>
      </div>


    </div>
  )
}

export default Dropshipping