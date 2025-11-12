import { FaCheckCircle } from "react-icons/fa";
import AppearOnScroll from "../Utility/AppearOnScroll";
import FreeGuideForm from '../Utility/FreeGuideForm';
import { useTranslation } from 'react-i18next';

const FreeValue = () => {
  const {t} = useTranslation()

  return (
    <div id="guide" className='section p-0 flex flex-col xl:flex-row-reverse overflow-hidden!'>
      <div className="xl:bg-darkCyan flex flex-col p-2 items-center justify-center xl:w-[70vw] bg-guide">
          <img src="https://ik.imagekit.io/greenraven/MJ/1761674331.png?updatedAt=1761674791148" className="md:w-80 max-md:w-65  xl:w-80"/>    
          <AppearOnScroll 
            animation="fade-up"
            threshold={0.3}
            duration={0.5}
            delay={0.1}
            >
            <h1 className="special-word2 hidden xl:block">{t('freeValue.imageCaption')}</h1>
          </AppearOnScroll>
      </div>
      
      <div className="flex flex-col justify-center gap-5 p-2">
        <AppearOnScroll 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          delay={0.1}
          >
          <h1>{t('freeValue.titlePart1')}<span className="special-word2 upp">{t('freeValue.titleHighlight')}</span>{t('freeValue.titlePart2')}</h1>
        </AppearOnScroll>
        
        <AppearOnScroll 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          delay={0.2}
          >
          <h1 className="special-word">{t('freeValue.value')}</h1>
        </AppearOnScroll>
        
        <AppearOnScroll 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          delay={0.25}
          >
          <p className="p-0">{t('freeValue.description')}</p>
        </AppearOnScroll>
        
        <ul className='flex flex-col items-start gap-5'>
          <AppearOnScroll 
            animation="fade-up"
            threshold={0.3}
            duration={0.5}
            delay={0.3}
            >
            <li className='bl-point'>
              <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
              {t('freeValue.bullet1')}
            </li>
          </AppearOnScroll>

          <AppearOnScroll 
            animation="fade-up"
            threshold={0.3}
            duration={0.5}
            delay={0.4}
            >
            <li className='bl-point'>
              <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
              {t('freeValue.bullet2')}
            </li>
          </AppearOnScroll>

          <AppearOnScroll 
            animation="fade-up"
            threshold={0.3}
            duration={0.5}
            delay={0.5}
            >
            <li className='bl-point'>
              <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
              {t('freeValue.bullet3')}
            </li>
          </AppearOnScroll>

          <AppearOnScroll 
            animation="fade-up"
            threshold={0.3}
            duration={0.5}
            delay={0.6}
            >
            <li className='bl-point'>
              <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
              {t('freeValue.bullet4')}
            </li>
          </AppearOnScroll>
        </ul>
        
        <AppearOnScroll 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          delay={0.7}
          > 
          <FreeGuideForm/>
        </AppearOnScroll>
      </div>
    </div>
  )
}

export default FreeValue