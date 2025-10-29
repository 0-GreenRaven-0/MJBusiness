import InfiniteCarousel from '../Utility/InfiniteCarousel';
import AppearOnScroll from '../Utility/AppearOnScroll';
import ConverkitForm from '../Utility/ConverkitForm';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Opportunity = () => {
  const {t} = useTranslation()

  const images = [
    "https://ik.imagekit.io/greenraven/MJ/carousel/s1.png?updatedAt=1761577625794",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s2.png?updatedAt=1761577626034",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s3.png?updatedAt=1761577625825",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s4.png?updatedAt=1761577626066",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s5.png?updatedAt=1761577625796",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s6.png?updatedAt=1761577625776",
  ]

  return (
    <div className=' relative p-0 pt-10 mt-14 overflow-hidden'>
      {/* Content wrapper with higher z-index */}
      <div className='relative z-50'>
        <div className='p-2 flex flex-col justify-center gap-5'>
          <AppearOnScroll 
          retrigger={true}
          >
            <h1 className='text-center'>{t('opportunity.title')}
          </h1>
          </AppearOnScroll>
          <AppearOnScroll
          retrigger={true}
          >
              <p>{t('opportunity.description')}</p>
          </AppearOnScroll>
<ul className='flex flex-col items-start justify-center w-full gap-5 max-w-3xl mx-auto'>
  <AppearOnScroll 
    animation="fade-up"
    threshold={0.3}
    duration={0.5}
    delay={0.3}
    retrigger={true}>
    <li className='bl-point'>
      <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
      {t('opportunity.bullet1')}
    </li>
  </AppearOnScroll>

  <AppearOnScroll 
    animation="fade-up"
    threshold={0.3}
    duration={0.5}
    delay={0.4}
    retrigger={true}>
    <li className='bl-point'>
      <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
      {t('opportunity.bullet2')}
    </li>
  </AppearOnScroll>

  <AppearOnScroll 
    animation="fade-up"
    threshold={0.3}
    duration={0.5}
    delay={0.5}
    retrigger={true}>
    <li className='bl-point'>
      <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
      {t('opportunity.bullet3')}
    </li>
  </AppearOnScroll>

  <AppearOnScroll 
    animation="fade-up"
    threshold={0.3}
    duration={0.5}
    delay={0.6}
    retrigger={true}>
    <li className='bl-point'>
      <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
      {t('opportunity.bullet4')}
    </li>
  </AppearOnScroll>

  <AppearOnScroll 
    animation="fade-up"
    threshold={0.3}
    duration={0.5}
    delay={0.7}
    retrigger={true}>
    <li className='bl-point'>
      <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
      {t('opportunity.bullet5')}
    </li>
  </AppearOnScroll>

  <AppearOnScroll 
    animation="fade-up"
    threshold={0.3}
    duration={0.5}
    delay={0.8}
    retrigger={true}>
    <li className='bl-point'>
      <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
      {t('opportunity.bullet6')}
    </li>
  </AppearOnScroll>
</ul>

          <AppearOnScroll
          retrigger={true}
          >
              <h2 className='text-center'>{t('opportunity.socialProof')}</h2>
          </AppearOnScroll>

          <InfiniteCarousel 
          images={images}
          imageWidth="250px"
          imageHeight="150px"
          speed={30}
          objectFit="contain"
          height="150px"
          gap={"0"}
          />
          <AppearOnScroll
          retrigger={true}
          >
            <h2 className='text-center'>{t('opportunity.couldBeYou')}</h2>
          </AppearOnScroll>
        </div>

        <div className='flex flex-col gap-5 p-2 pt-5'>
          <AppearOnScroll
          retrigger={true}
          >
            <h1 className='text-center'>{t('opportunity.ctaTitle')}</h1>
          </AppearOnScroll>

          <AppearOnScroll
          retrigger={true}
          >
              <p>{t('opportunity.ctaDescription')}</p>
          </AppearOnScroll>

          <AppearOnScroll
          retrigger={true}
          >
            <div className=' flex items-center justify-center'>
          <ConverkitForm/>
            </div>

          </AppearOnScroll>
        </div>
      </div>

      {/* Background pattern - below content */}
      <div className='bg-patterns w-full h-[50%] hero-asset absolute inset-0 z-0 opacity-30'/>
    </div>
  )
}

export default Opportunity