import { FaCheckCircle } from "react-icons/fa";
import AppearOnScroll from "../Utility/AppearOnScroll";
import FreeGuideForm from '../Utility/FreeGuideForm';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const FreeValue = () => {
  const {t} = useTranslation()
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  useGSAP(() => {
    if (isDesktop) {
      const guideSection = gsap.timeline({
        scrollTrigger: {
          trigger: '#guide',
          start: 'top top',
          end: 'bottom center',
          scrub: 1.2,
          pin: true
        }
      });
  
      guideSection.from('#will-slide', {
        x: 500,
        duration: 0.2,
        ease: 'power1.out'
      });
    }
  }, [isDesktop]);

  const ConditionalAppear = ({ children, ...props }) => {
    if (isDesktop) {
      return <AppearOnScroll {...props}>{children}</AppearOnScroll>
    }
    return <>{children}</>
  }

  return (
    <div id="guide" className='section p-0 flex flex-col xl:flex-row-reverse overflow-x-hidden'>
      <div id="will-slide" className="xl:bg-darkCyan flex flex-col p-2 items-center justify-center xl:w-[70vw] bg-guide">
          <img src="https://ik.imagekit.io/greenraven/MJ/1761674331.png?updatedAt=1761674791148" className="xl:w-80"/>    
          <h1 className="special-word2">{t('freeValue.imageCaption')}</h1>
      </div>
      
      <div className="flex flex-col justify-center gap-5 p-2">
        <ConditionalAppear 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          delay={0.1}
          retrigger={true}>
          <h1>{t('freeValue.titlePart1')}<span className="special-word2 upp">{t('freeValue.titleHighlight')}</span>{t('freeValue.titlePart2')}</h1>
        </ConditionalAppear>
        
        <ConditionalAppear 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          delay={0.2}
          retrigger={true}>
          <h1 className="special-word">{t('freeValue.value')}</h1>
        </ConditionalAppear>
        
        <ConditionalAppear 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          delay={0.25}
          retrigger={true}>
          <p className="p-0">{t('freeValue.description')}</p>
        </ConditionalAppear>
        
        <ul className='flex flex-col items-start gap-5'>
          <ConditionalAppear 
            animation="fade-up"
            threshold={0.3}
            duration={0.5}
            delay={0.3}
            retrigger={true}>
            <li className='bl-point'>
              <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
              {t('freeValue.bullet1')}
            </li>
          </ConditionalAppear>

          <ConditionalAppear 
            animation="fade-up"
            threshold={0.3}
            duration={0.5}
            delay={0.4}
            retrigger={true}>
            <li className='bl-point'>
              <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
              {t('freeValue.bullet2')}
            </li>
          </ConditionalAppear>

          <ConditionalAppear 
            animation="fade-up"
            threshold={0.3}
            duration={0.5}
            delay={0.5}
            retrigger={true}>
            <li className='bl-point'>
              <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
              {t('freeValue.bullet3')}
            </li>
          </ConditionalAppear>

          <ConditionalAppear 
            animation="fade-up"
            threshold={0.3}
            duration={0.5}
            delay={0.6}
            retrigger={true}>
            <li className='bl-point'>
              <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
              {t('freeValue.bullet4')}
            </li>
          </ConditionalAppear>
        </ul>
        
        <ConditionalAppear 
          animation="fade-up"
          threshold={0.3}
          duration={0.5}
          delay={0.7}
          retrigger={true}> 
          <FreeGuideForm/>
        </ConditionalAppear>
      </div>
    </div>
  )
}

export default FreeValue