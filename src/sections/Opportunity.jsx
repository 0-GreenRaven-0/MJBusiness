import InfiniteCarousel from '../Utility/InfiniteCarousel';
import AppearOnScroll from '../Utility/AppearOnScroll';
import ConverkitForm from '../Utility/ConverkitForm';

const Opportunity = () => {

    const images = [
    "/carousel/s1.png",
    "/carousel/s2.png",
    "/carousel/s3.png",
    "/carousel/s4.png",
    "/carousel/s5.png",
    "/carousel/s6.png",
]

  return (
    <div className=' relative p-0 pt-10 mt-14 overflow-hidden'>
      {/* Content wrapper with higher z-index */}
      <div className='relative z-50'>
        <div className='p-2 flex flex-col justify-center gap-5'>
          <AppearOnScroll 
          retrigger={true}
          >
            <h1 className='text-center'>What If This Was Your Turning Point?</h1>
          </AppearOnScroll>
          <AppearOnScroll
          retrigger={true}
          >
              <p>Right now, most people feel stuck, working hard but never getting ahead, dreaming about financial freedom but not knowing where to start.</p>
          </AppearOnScroll>
          <AppearOnScroll
          retrigger={true}
          >
            <p>But there's a real path forward. A proven way to earn actual income online. A chance to finally live life on your terms.</p>
          </AppearOnScroll>

          <AppearOnScroll
          retrigger={true}
          >
              <h2 className='text-center'>Majd's program has helped dozens break free and earn real money.</h2>
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
            <h2 className='text-center'>This Could be you!</h2>
          </AppearOnScroll>
        </div>

        <div className='flex flex-col gap-5 p-2 pt-5'>
          <AppearOnScroll
          retrigger={true}
          >
            <h1 className='text-center'>Ready to learn how this actually works?</h1>
          </AppearOnScroll>

          <AppearOnScroll
          retrigger={true}
          >
              <p>Enter your email below and we'll send you the complete details, what's inside the program, how it helps you succeed, and how you can join.</p>
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