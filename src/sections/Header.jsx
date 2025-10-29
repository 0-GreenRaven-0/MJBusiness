import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className='flex items-center justify-center px-4 py-2 relative z-100'>
      <img 
        src='https://ik.imagekit.io/greenraven/MJ/dropvault.png?updatedAt=1761577922501' 
        className='w-15'
      />
      
      <button
        onClick={toggleLanguage}
        className='absolute right-4 bg-transparent text-cyan-400 border border-cyan-400 rounded px-4 py-1 md:px-8 md:py-3 md:text-2xl xl:px-4 xl:py-1 xl:text-base cursor-pointer hover:bg-cyan-400 hover:text-black transition-colors'
      >
        {t('header.languageToggle')}
      </button>
    </header>
  )
}

export default Header