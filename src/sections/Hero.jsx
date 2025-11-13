import AppearOnScroll from '../Utility/AppearOnScroll';
import {FaCheckCircle} from 'react-icons/fa';
import ConverkitForm from '../Utility/ConverkitForm';
import { useTranslation } from 'react-i18next';
import Header from './Header';

const Hero = () => {
  const {t} = useTranslation()

  return (
    <div className='section bg-primary relative'>
      <Header/>
        <div className='flex-center relative z-50'>

            <h2>{t('hero.subtitle')}</h2>
            <h1 className='text-center md:w-[65%] md:text-4xl'>
                {t('hero.titlePart1')}<span className='special-word'>{t('hero.titleHighlight1')}</span>{t('hero.titlePart2')}<span className='special-word'>{t('hero.titleHighlight2')}</span>{t('hero.titlePart3')}<span className='special-word'>{t('hero.titleHighlight3')}</span>{t('hero.titlePart4')}
            </h1>
           
            <br/>

            <div className='flex flex-col xl:flex-row md:p-10 justify-center md:items-center gap-5'>
                <AppearOnScroll 
                  animation="fade-up"
                  threshold={0.1}
                  duration={0.5}
                  delay={0.2}
                  >
                  <img src='https://ik.imagekit.io/greenraven/MJ/majdHero.png?updatedAt=1761577920517' className="md:w-170 xl:w-140"/>
                </AppearOnScroll>

                <div className='flex flex-col items-center gap-5'>
                    <h3 className='text-center -mb-5'>{t('hero.broughtBy')}</h3>

                    <AppearOnScroll 
                      animation="fade-up"
                      threshold={0.3}
                      duration={0.5}
                      delay={0.2}
                      >
                        <h2 className='name'>Majd Abdulsalam</h2>
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
                              {t('hero.bullet1')}
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
                              {t('hero.bullet2')}
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
                              {t('hero.bullet3')}
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
                              {t('hero.bullet4')}
                            </li>
                        </AppearOnScroll>
                    </ul>

                    <AppearOnScroll 
                      animation="fade-up"
                      threshold={0.3}
                      duration={0.5}
                      delay={0.7}
                      >
                        <ConverkitForm/>
                    </AppearOnScroll>
                    <AppearOnScroll>
                     <h2 className='w-120'>{t('hero.smallCTA')}</h2>
                    </AppearOnScroll>
                    
                </div>
            </div>
            <br/>
        </div>

        {/* Background patterns - BELOW content */}
        <div className='bg-patterns w-full h-[50%] hero-asset absolute inset-0 z-0 opacity-30'/>
        <div className='bg-patterns w-full h-[50%] hero-asset2 absolute bottom-0 right-0 z-0 opacity-30'/>
    </div>
  )
}

export default Hero