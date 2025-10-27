import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {FaCheckCircle, FaYoutube, FaInstagram} from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';


const AboutMajd = () => {

  const isDesktop = useMediaQuery({ minWidth: 768 })

useGSAP(() => {
  let position = isDesktop ? "50% 15%" : "center"
  const maskTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#majd",
      start: 'top top',
      end: 'bottom center',
      scrub: 1.2,
      pin: true,
      anticipatePin: 1, // Prevents premature triggering
      invalidateOnRefresh: true // Recalculates on resize/refresh
    }
  })

  maskTimeline
  .to('.willfade', {
    opacity: 0, stagger: 0.2, ease: 'power1.inOut'
  })
  .to('.masked-img', {
   maskPosition: position, // Fixed: was {position}, should be just position
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


  return (
    <div id='majd' className='min-h-screen relative'>
        <h1 id='majd-name' className='text-5xl md:text-8xl xl:text-5xl absolute top-30 md:top-10 xl:top-25 left-1/2 -translate-x-1/2 willfade'>Who is Majd Abdulsalam?</h1>
        <img src="https://ik.imagekit.io/greenraven/MJ/items/item1.png?updatedAt=1761577963346" className='item willfade floating top-85 left-10 md:top-100 md:left-50 xl:top-60 xl:left-80 d1'/>
        <img src='https://ik.imagekit.io/greenraven/MJ/items/item2.png?updatedAt=1761577963390' className='item willfade floating bottom-85 right-8 md:bottom-135 md:right-45 xl:top-100 xl:right-85 d2'/>
        <img src='https://ik.imagekit.io/greenraven/MJ/items/item3.png?updatedAt=1761577963105' className='item willfade floating top-72 right-13 md:top-95 md:right-50 xl:top-55 xl:right-100 d3'/>
        <img src='https://ik.imagekit.io/greenraven/MJ/items/item4.png?updatedAt=1761577963020' className='item willfade floating bottom-70 left-10 md:bottom-120 xl:top-105 md:left-40 xl:left-90 d4'/>
        <img src='https://ik.imagekit.io/greenraven/MJ/MajdIcon.png?updatedAt=1761577918261' className='absolute top-105! -translate-y-1/2 left-1/2 -translate-x-1/2 w-50 z-100 willfade md:top-170! xl:top-74! md:w-105 xl:w-85 max-md:top-75'/>

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
<div className='flex flex-col gap-3 will-appear'>
<div className='flex items-center gap-4 md:gap-6'>
  <a 
    href='https://www.instagram.com/mjbusinessofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
    target='_blank' 
    rel='noopener noreferrer'
    className='flex items-center gap-2 md:gap-4 xl:gap-2 hover:scale-105 transition-transform'
  >
    <div className='bg-cyan-500/10 p-3 md:p-6 xl:p-3 rounded-full flex items-center justify-center'>
      <FaInstagram className='w-[30px] h-[30px] md:w-[48px] md:h-[48px] xl:w-[30px] xl:h-[30px]' color='cyan'/>
    </div>
    <span className='text-cyan-400 text-base md:text-2xl xl:text-base'>Instagram</span>
  </a>

  <a 
    href='https://youtube.com/@mj.biznes?si=-eCOC_aZf9EaGBhd' 
    target='_blank' 
    rel='noopener noreferrer'
    className='flex items-center gap-2 md:gap-4 xl:gap-2 hover:scale-105 transition-transform'
  >
    <div className='bg-cyan-500/10 p-3 md:p-6 xl:p-3 rounded-full flex items-center justify-center'>
      <FaYoutube className='w-[30px] h-[30px] md:w-[48px] md:h-[48px] xl:w-[30px] xl:h-[30px]' color='cyan'/>
    </div>
    <span className='text-cyan-400 text-base md:text-2xl xl:text-base'>YouTube</span>
  </a>
</div>
</div>
          <div>
            <ul className='flex flex-col items-start gap-2'>
            <li className='bl-point will-appear'>
              <FaCheckCircle size={30} color='cyan' style={{ minWidth: '30px', minHeight: '30px', flexShrink: 0 }}/>
              Founder of Lebanon's 1st Dropshipping Software
            </li>
            <li className='bl-point will-appear'>
              <FaCheckCircle size={30} color='cyan' style={{ minWidth: '30px', minHeight: '30px', flexShrink: 0 }}/>
              Achieved 6 figures+ through E-Commerce
            </li>
            <li className='bl-point will-appear'>
              <FaCheckCircle size={30} color='cyan' style={{ minWidth: '30px', minHeight: '30px', flexShrink: 0 }}/>
              Helped lots of individuals achieve financial freedom
            </li>
          </ul>
          </div>
 
          <p className='will-appear md:w-[90%] md:px-0 pb-10'>
            Majd built his success through trial and error, testing what actually works. After helping dozens of people, he created this program to give you the same proven system, high income skills, and support that led to his success.
          </p>
        </div>
  
      </div>
    </div>
  )
}

export default AboutMajd
