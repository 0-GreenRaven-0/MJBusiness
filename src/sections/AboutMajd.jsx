import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {FaCheckCircle, FaYoutube, FaInstagram} from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';


const AboutMajd = () => {
  const {t, i18n} = useTranslation()
  const isDesktop = useMediaQuery({ minWidth: 768 })
  const isArabic = i18n.language === 'ar'

useGSAP(() => {
  let position = isDesktop ? "50% 15%" : "center"
  
  // Wait for images to have dimensions before creating ScrollTrigger
  const images = document.querySelectorAll('#majd img')
  let loadedCount = 0
  
  const checkAllLoaded = () => {
    loadedCount++
    if (loadedCount === images.length) {
      ScrollTrigger.refresh()
    }
  }
  
  images.forEach(img => {
    if (img.complete) {
      checkAllLoaded()
    } else {
      img.addEventListener('load', checkAllLoaded)
    }
  })
  
  let ctx = gsap.context(() => {
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#majd",
        start: 'top top',
        end: 'bottom center',
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })

    maskTimeline
    .to('.willfade', {
      opacity: 0, stagger: 0.2, ease: 'power1.inOut'
    })
    .to('.masked-img', {
     maskPosition: position,
     maskSize: '500%', 
     duration: 1, 
     ease: 'power1.inOut'
    })
    .from('.will-appear', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power1.out'
    })
  })
  
  return () => ctx.revert()
}, [isDesktop])


  return (
    <div id='majd' className='min-h-screen relative'>
<h1 id='majd-name' className={`text-5xl md:text-8xl xl:text-5xl absolute ${isArabic ? 'top-20 md:top-35 xl:top-20' : 'top-30 md:top-10 xl:top-25'} left-1/2 -translate-x-1/2 willfade ${isArabic ? 'md:w-[90%] xl:w-[70%]' : ''} text-center`}>{t('aboutMajd.title')}</h1>
        <img src="https://ik.imagekit.io/greenraven/MJ/items/item1.png?updatedAt=1761577963346" className='item willfade floating top-85 left-10 md:top-100 md:left-20 xl:top-60 xl:left-80 d1'/>
        <img src='https://ik.imagekit.io/greenraven/MJ/items/item2.png?updatedAt=1761577963390' className='item willfade floating bottom-85 right-8 md:bottom-135 md:right-25 xl:top-100 xl:right-85 d2'/>
        <img src='https://ik.imagekit.io/greenraven/MJ/items/item3.png?updatedAt=1761577963105' className='item willfade floating top-72 right-13 md:top-155 md:right-30 xl:top-55 xl:right-100 d3'/>
        <img src='https://ik.imagekit.io/greenraven/MJ/items/item4.png?updatedAt=1761577963020' className='item willfade floating bottom-70 left-10 md:bottom-80 xl:top-105 md:left-20 xl:left-90 d4'/>
<img src='https://ik.imagekit.io/greenraven/MJ/MajdIcon.png?updatedAt=1761577918261' className={`absolute ${isArabic ? 'top-100! md:top-170! xl:top-77!' : 'top-108! md:top-170! xl:top-76!'} -translate-y-1/2 left-1/2 -translate-x-1/2 w-50 z-100 willfade md:w-105 xl:w-85 ${isArabic ? 'max-md:top-65' : 'max-md:top-75'}`}/>

        {/* Content */}
      <div className={`p-1 bg-cyan-800 ${isDesktop ? 'majdds' : 'majdmb'} masked-img relative md:[mask-position:50%_50%] md:[mask-size:40%] xl:[mask-position:50%_34%] xl:[mask-size:25%]`}>
        <div className='flex flex-col justify-center items-center gap-4 bg-black/60 rounded-2xl p-1 h-full'>
        <img   src='https://ik.imagekit.io/greenraven/MJ/majd2.png?updatedAt=1761577918178' 
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            imageRendering: 'auto', 
            WebkitFontSmoothing: 'antialiased',
            willChange: 'transform'
          }}
          className='will-appear md:w-160 xl:w-100'
          />
          <h2 className='name will-appear'>Majd Abdulsalam</h2>
          <h3 className='font-bold -mt-3 will-appear'>{t('aboutMajd.role')}</h3>

          <div>
            <ul className='flex flex-col items-start gap-2'>
            <li className='bl-point will-appear'>
              <FaCheckCircle size={30} color='cyan' style={{ minWidth: '30px', minHeight: '30px', flexShrink: 0 }}/>
              {t('aboutMajd.bullet1')}
            </li>
            <li className='bl-point will-appear'>
              <FaCheckCircle size={30} color='cyan' style={{ minWidth: '30px', minHeight: '30px', flexShrink: 0 }}/>
              {t('aboutMajd.bullet2')}
            </li>
            <li className='bl-point will-appear'>
              <FaCheckCircle size={30} color='cyan' style={{ minWidth: '30px', minHeight: '30px', flexShrink: 0 }}/>
              {t('aboutMajd.bullet3')}
            </li>
          </ul>
          </div>
 
 <div className='flex items-center gap-6 will-appear' style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}>
  <button
    onClick={() => window.open('https://www.instagram.com/mjbusinessofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
    className='flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors'
    style={{ 
      pointerEvents: 'auto', 
      background: 'none', 
      border: 'none', 
      cursor: 'pointer', 
      padding: '12px',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent'
    }}
  >
    <FaInstagram className='w-15 h-auto xl:w-6'/>
    <span className='underline md:text-4xl xl:text-lg'>{t('aboutMajd.instagram')}</span>
  </button>

  <button
    onClick={() => window.open('https://youtube.com/@mj.biznes?si=-eCOC_aZf9EaGBhd', '_blank')}
    className='flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors'
    style={{ 
      pointerEvents: 'auto', 
      background: 'none', 
      border: 'none', 
      cursor: 'pointer', 
      padding: '12px',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent'
    }}
  >
    <FaYoutube className='w-15 h-auto xl:w-6' />
    <span className='underline md:text-4xl xl:text-lg'>{t('aboutMajd.youtube')}</span>
  </button>
</div>
          <p className='will-appear md:w-[90%] md:px-0 pb-10'>
            {t('aboutMajd.description')}
          </p>
          
        </div>
  
      </div>
    </div>
  )
}

export default AboutMajd