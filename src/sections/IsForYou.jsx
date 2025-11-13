import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import AppearOnScroll from '../Utility/AppearOnScroll'

const IsForYou = () => {
    const {t} = useTranslation()

  return (
    <div className="p-2 py-10">
        <h1 className="text-center">{t('isForYou.heading')} <span className="special-word2">{t('isForYou.getRich')}</span> </h1>
        <h2>{t('isForYou.subheading')}</h2>
        <br/>
        <div className="flex flex-col xl:flex-row gap-5">
          <AppearOnScroll animation="fade-right" threshold={0.5} delay={0.4}>
            <div className="border-5 p-2 rounded-4xl">
            <h2 className="pb-2 text-xl">{t('isForYou.forYouTitle')}</h2>
            <ul className='flex flex-col items-start gap-5'>
              {t('isForYou.forYouPoints', { returnObjects: true }).map((point, index) => (
                <li key={index} className='bl-point'>
                  <FaCheckCircle size={25} color='lime' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          </AppearOnScroll>
          <AppearOnScroll animation="fade-left" threshold={0.5} delay={0.4}>
          <div className="border-5 p-2 rounded-4xl">
            <h2 className="pb-2 text-xl">{t('isForYou.notForYouTitle')}</h2>
            <ul className='flex flex-col items-start gap-5'>
              {t('isForYou.notForYouPoints', { returnObjects: true }).map((point, index) => (
                <li key={index} className='bl-point'>
                  <FaTimesCircle size={25} color='red' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          </AppearOnScroll>
        </div>
    </div>
  )
}

export default IsForYou