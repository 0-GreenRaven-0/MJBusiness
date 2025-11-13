import { useTranslation } from 'react-i18next';

const FreeGuideForm = () => {
  const {t} = useTranslation()
  
  return (
    <>
      <style>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          50% {
            left: 150%;
          }
          100% {
            left: 150%;
          }
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 30%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shine 4s ease-in-out infinite;
          transform: skewX(-20deg);
        }
      `}</style>
      
      <form 
        action="https://app.kit.com/forms/8722589/subscriptions" 
        className="seva-form formkit-form" 
        method="post" 
        data-sv-form="8722589" 
        data-uid="1c96c60bf4" 
        data-format="modal" 
        data-version="5" 
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"This is a test from the form that will send the free guide. Please check your spam folder","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"exit","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}' 
        style={{ backgroundColor: 'transparent' }}
      >
        <div data-style="clean">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields flex flex-col md:flex-row gap-3 items-center md:gap-6">
            <div className="formkit-field flex-1 w-full">
              <input 
                className="formkit-input w-full px-4 py-3 md:px-8 md:py-6 xl:px-4 xl:py-3 placeholder-cyan-300 md:text-2xl xl:text-xl" 
                name="email_address" 
                aria-label="Email Address" 
                placeholder={t('form.emailPlaceholder')}
                required 
                type="email" 
                style={{
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '2px solid cyan',
                  borderRadius: '8px',
                  fontWeight: 400,
                }}
              />
            </div>
            <button 
              data-element="submit" 
              className="uppercase formkit-submit shine-effect px-8 py-3 md:px-16 md:py-6 xl:px-8 xl:py-3 font-bold cursor-pointer transition-transform duration-300 hover:scale-105 md:text-2xl xl:text-xl" 
              style={{
                color: 'black',
                background: 'linear-gradient(135deg, #00ffff, #00d4ff, #00ffff)',
                borderRadius: '8px',
                fontWeight: 700,
                border: 'none',
                boxShadow: '0 4px 15px rgba(0, 255, 255, 0.4)'
              }}
            >
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>{t('form.freeguide')}</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default FreeGuideForm