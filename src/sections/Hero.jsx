import AppearOnScroll from '../Utility/AppearOnScroll';
import {FaCheckCircle} from 'react-icons/fa';
import ConverkitForm from '../Utility/ConverkitForm';

const Hero = () => {
  return (
    <div className='section bg-primary relative'>
        
        {/* Content wrapper - MUST be above patterns */}
        <div className='flex-center relative z-50'>
            <img src='/dropvault.png' className='w-15'/>
            <h2>Build Your Business. Earn Real Money Online</h2>
            <h1 className='text-center md:w-[80%] md:text-6xl'>
                A complete roadmap to <span className='special-word'>financial freedom</span>, backed by <span className='special-word'>proven strategies</span>, <span className='special-word'>real results</span>, and a community that supports your <span className='special-word'>success</span>.
            </h1>
            <br/>

            <div className='flex flex-col xl:flex-row md:p-10 justify-center md:items-center gap-5'>
                <AppearOnScroll 
                  animation="fade-up"
                  threshold={0.1}
                  duration={0.5}
                  delay={0.2}
                  retrigger={true}>
                  <img src='/majdHero.png' className="md:w-170 xl:w-140"/>
                </AppearOnScroll>

                <div className='flex flex-col items-center gap-5'>
                    <h3 className='text-center -mb-5'>Brought to you by</h3>

                    <AppearOnScroll 
                      animation="fade-up"
                      threshold={0.3}
                      duration={0.5}
                      delay={0.2}
                      retrigger={true}>
                        <h2 className='name'>Majd Abdulsalam</h2>
                    </AppearOnScroll>

                    <ul className='flex flex-col items-start gap-5'>
                        <AppearOnScroll 
                          animation="fade-up"
                          threshold={0.3}
                          duration={0.5}
                          delay={0.3}
                          retrigger={true}>
                            <li className='bl-point'>
                              <FaCheckCircle size={25} color='cyan' style={{ minWidth: '25px', minHeight: '25px', flexShrink: 0 }}/>
                              Earn real income online in dollars from anywhere!
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
                              Master the skills that actually pay
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
                              Join dozens who've already transformed their financial future
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
                              Get proven strategies + real support every step
                            </li>
                        </AppearOnScroll>
                    </ul>

                    <AppearOnScroll 
                      animation="fade-up"
                      threshold={0.3}
                      duration={0.5}
                      delay={0.7}
                      retrigger={true}>
                        <ConverkitForm/>
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