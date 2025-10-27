const Footer = () => {
  return (
    <footer className="text-gray-400 py-10 px-5 text-xs leading-relaxed">
      <div className="max-w-5xl mx-auto space-y-4">
        
        {/* Copyright */}
        <p className="text-center text-gray-300 font-semibold text-sm">
          MJ Business © 2025. All Rights Reserved.
        </p>

        {/* Disclaimer */}
        <p className="text-center text-xs md:text-lg xl:text-xs">
          This site is not a part of the Facebook, Instagram, YouTube, or any social media platform. 
          Additionally, this site is NOT endorsed by any of these platforms in any way.
        </p>

        {/* Earnings Disclaimer */}
        <div className="pt-4">
          <h3 className="text-gray-300 font-bold mb-3 text-sm text-center">IMPORTANT: Earnings and Legal Disclaimers</h3>
          
          <div>
            <p className="footer-section">
              Earnings and income representations made by Majd Abed Al Salam, MJ Business, and associated 
              testimonials are examples of what is possible, not 100% guaranteed. Results shown are not typical. 
              Individual results vary and depend entirely on your effort, dedication, business skills, experience, 
              and ability to follow the program.
            </p>

            <p className="footer-section">
              MJ Business and Majd Abed Al Salam are not responsible for your actions or results. You are solely 
              responsible for your own decisions and outcomes. The use of this program and its materials is at your 
              own risk.
            </p>

            <p className="footer-section">
              MJ Business may recommend tools, courses, or services. We only recommend resources we believe are 
              valuable. Some recommendations may result in compensation, though this does not affect the price you pay.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer