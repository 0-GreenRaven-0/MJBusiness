import ConvertKitForm from "../Utility/ConverkitForm";
import AppearOnScroll from "../Utility/AppearOnScroll";
import { useTranslation } from 'react-i18next';

const AboutSaas = () => {
  const {t} = useTranslation()

  return (
    <div className='section flex flex-col gap-5 py-5 bg-guide2'>
      <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
        <h1 className="text-center">{t('aboutSaas.title')}</h1>
      </AppearOnScroll>

      <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
        <p>{t('aboutSaas.description')}</p>
      </AppearOnScroll>

      <div>
        <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
          <h2>{t('aboutSaas.subtitle')}</h2>
        </AppearOnScroll>

        <div className='cards-container'>
          <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
            <div className='card bg-darkCyan'>
              <img src='https://ik.imagekit.io/greenraven/MJ/system-update.png?updatedAt=1761725579002' className='card-img'/>
              <h2 className='card-desc'>{t('aboutSaas.card1')}</h2>
            </div>
          </AppearOnScroll>

          <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
            <div className='card bg-darkCyan'>
              <img src='https://ik.imagekit.io/greenraven/MJ/artificial-intelligence.png?updatedAt=1761725579307' className='card-img'/>
              <h2 className='card-desc'>{t('aboutSaas.card2')}</h2>
            </div>
          </AppearOnScroll>

          <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
            <div className='card bg-darkCyan'>
              <img src='https://ik.imagekit.io/greenraven/MJ/marketing-agent.png?updatedAt=1761725579274' className='card-img'/>
              <h2 className='card-desc'>{t('aboutSaas.card3')}</h2>
            </div>
          </AppearOnScroll>

          <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
            <div className='card bg-darkCyan'>
              <img src='https://ik.imagekit.io/greenraven/MJ/strategy.png?updatedAt=1761725578959' className='card-img'/>
              <h2 className='card-desc'>{t('aboutSaas.card4')}</h2>
            </div>
          </AppearOnScroll>
        </div>

        <div className="flex flex-col gap-2 md:gap-5 xl:gap-2 xl:px-80">
          <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
            <h1 className="text-center">{t('aboutSaas.moreInside')}</h1>
          </AppearOnScroll>

          <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
            <h2>{t('aboutSaas.ctaQuestion')}</h2>
          </AppearOnScroll>

          <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
            <ConvertKitForm/>
          </AppearOnScroll>

          <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
            <h2 className='text-center'>{t('aboutSaas.pride')}</h2>
          </AppearOnScroll>

          <AppearOnScroll animation="fade-up" threshold={0.3}  retrigger={true}>
            <h2 className='text-center'>{t('aboutSaas.testimonialIntro')}</h2>
          </AppearOnScroll>
        </div>
      </div>
    </div>
  )
}

export default AboutSaas