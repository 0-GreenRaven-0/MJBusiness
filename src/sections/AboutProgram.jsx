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
       <p>After lots of experiments, testing strategies, using exclusive knowledge from paid courses sold by top high figures entrepreneurs, the key to start dropshipping business in Lebanon has been revealed. All crafted in a single program that contains the exact methods & strategies to start your own.</p>
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