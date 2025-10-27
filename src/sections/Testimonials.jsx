import { useState, useEffect, useRef } from "react"
import AppearOnScroll from "../Utility/AppearOnScroll"
import { useMediaQuery } from 'react-responsive'

const Testimonials = () => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const countRef = useRef(null)
  const isDesktop = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let current = 0
          const target = 400
          const duration = 1500
          const increment = target / (duration / 16)

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [hasAnimated])

  const testimonials = [
    "/carousel/s1.png",
    "/carousel/s2.png",
    "/carousel/s3.png",
    "/carousel/s4.png",
    "/carousel/s5.png",
    "/carousel/s6.png",
  ]

  return (
<div className=" overflow-hidden pb-20">
        <AppearOnScroll 
        animation="fade-up"
        threshold={0.5}
        retrigger={true}
        >
            <h1 className="text-center md:text-5xl md:pb-10">
              Over <span ref={countRef} className="headline text-4xl md:text-6xl text-cyan-500">{count}+</span> people joined the program
            </h1>
        </AppearOnScroll>
        <br/>

        {/* Mobile - Single Column */}
        {!isDesktop && (
          <div className="flex flex-col gap-2">
            {testimonials.map((img, index) => (
              <AppearOnScroll 
                key={index}
                retrigger={true} 
                animation={index % 2 === 0 ? "fade-right" : "fade-left"} 
                className={index % 2 === 0 ? "self-end" : ""}
                threshold={0.3}
              >
                <img src={img} className="testo-img" loading="lazy"/>
              </AppearOnScroll>
            ))}
          </div>
        )}

        {/* Desktop - Grid 2 rows x 4 columns */}
{isDesktop && (
  <div className="grid grid-cols-3 grid-rows-2 place-items-center items-start gap-5">
    {testimonials.map((img, index) => (
      <AppearOnScroll 
        key={index}
        retrigger={true} 
        animation="fade-up" 
        threshold={0.3}
        delay={index * 0.1}
      >
        <img src={img} className="testo-img" loading="lazy"/>
      </AppearOnScroll>
    ))}
  </div>
)}
    </div>
  )
}

export default Testimonials