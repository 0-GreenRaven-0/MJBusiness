import AppearOnScroll from "../Utility/AppearOnScroll";
import ConvertKitForm from "../Utility/ConverkitForm";

const AboutProgram = () => {
  return (
    <div className='section flex flex-col gap-5 items-center py-20'>
      <AppearOnScroll animation="fade-up" threshold={0.3} retrigger={true}>
        <h1 className='text-center'>Dropshipping has proven to be possible in Lebanon</h1>
      </AppearOnScroll>


        <div className='video-container'>
          <iframe
            width="50%"
            height="50%"
            src="https://www.youtube.com/embed/iXjG_Cy-mMw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
    

      <AppearOnScroll animation="fade-up" threshold={0.3} retrigger={true} delay={0.3}>
        <p>Majd earned his success the hard way. He studied, tested, and learned from top entrepreneurs until he found what works. This program gives you the complete system and all the steps for you to get started.</p>
      </AppearOnScroll>

      <AppearOnScroll animation="fade-up" threshold={0.3} retrigger={true} delay={0.4}>
        <p>Join to access this knowledge!</p>
      </AppearOnScroll>

      <AppearOnScroll animation="fade-up" threshold={0.3} retrigger={true} delay={0.5}>
       <ConvertKitForm/>
      </AppearOnScroll>
    </div>
  )
}

export default AboutProgram