import { useRef, useEffect } from 'react'

const InfiniteCarousel = ({ 
  images, 
  direction = 'left', // 'left' or 'right'
  speed = 30, // seconds for one full loop
  height = '200px',
  width = '100%',
  gap = '20px',
  interactive = false, // allow user to pause on hover
  imageWidth = 'auto', // control image width
  imageHeight = '100%', // control image height
  objectFit = 'contain' // 'contain', 'cover', 'fill', 'scale-down'
}) => {
  const trackRef = useRef(null)

  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current
      track.style.setProperty('--speed', `${speed}s`)
      track.style.setProperty('--direction', direction === 'left' ? 'normal' : 'reverse')
    }
  }, [speed, direction])

  return (
    <div 
      className="carousel-container"
      style={{ 
        width: width,
        height: height,
        pointerEvents: interactive ? 'auto' : 'none'
      }}
    >
      <div 
        ref={trackRef}
        className={`carousel-track ${interactive ? 'interactive' : ''}`}
        style={{ gap: gap }}
      >
        {[...images, ...images].map((img, index) => (
          <div key={index} className="carousel-item">
            <img 
              src={img} 
              alt={`slide-${index}`}
              style={{
                width: imageWidth,
                height: imageHeight,
                objectFit: objectFit
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfiniteCarousel