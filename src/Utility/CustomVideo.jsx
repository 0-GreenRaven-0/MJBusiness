import { useState, useRef } from 'react';

export default function CustomVideo() {
  const [showOverlay, setShowOverlay] = useState(true);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setShowOverlay(false);
    if (videoRef.current) {
      videoRef.current.controls = true;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative md:w-170 xl:w-140">
      <video
        ref={videoRef}
        className="w-full h-auto rounded-3xl"
        poster="https://ik.imagekit.io/greenraven/MJ/majdHero.png?updatedAt=1761577920517"
      >
        <source src="https://ik.imagekit.io/greenraven/MJ/intro%20(1)%20(1).mp4?updatedAt=1763150579167" type="video/mp4"/>
      </video>
      
      {showOverlay && (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handlePlay}
        >
          <div className="w-20 h-20 bg-cyan-500/35 border-white border-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
            <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-2" />
          </div>
        </div>
      )}
    </div>
  );
}