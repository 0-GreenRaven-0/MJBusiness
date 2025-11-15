import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation()
  
  return (
    <footer className="relative text-gray-400 py-10 px-5 text-xs leading-relaxed">
      <div className='bg-patterns w-full h-full hero-asset2 absolute bottom-0 right-0 z-0 opacity-30'/>
      <div className="max-w-5xl mx-auto space-y-4">
        
        {/* Copyright */}
        <p className="text-center text-gray-300 font-semibold text-sm">
          {t('footer.copyright')}
        </p>

        {/* Disclaimer */}
        <p className="text-center text-xs md:text-lg xl:text-xs">
          {t('footer.disclaimer')}
        </p>

        {/* Earnings Disclaimer */}
        <div className="pt-4">
          <h3 className="text-gray-300 font-bold mb-3 text-sm text-center">{t('footer.earningsTitle')}</h3>
          
          <div>
            <p className="footer-section">
              {t('footer.earnings1')}
            </p>

            <p className="footer-section">
              {t('footer.earnings2')}
            </p>

            <p className="footer-section">
              {t('footer.earnings3')}
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer