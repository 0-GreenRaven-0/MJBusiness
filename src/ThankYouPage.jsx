import { useTranslation } from "react-i18next";

const ThankYouPage = () => {
    const {t} = useTranslation()

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-black" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-4">
          {t('thankYouPage.heading')}
        </h1>

        <p className="text-xl md:text-2xl text-white mb-6">
          {t('thankYouPage.subheading')}
        </p>



        <div className="mt-12">
          <a 
            href="/" 
            className="inline-block px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
          >
             {t('thankYouPage.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;