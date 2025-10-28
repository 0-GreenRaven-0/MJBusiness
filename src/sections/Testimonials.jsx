import { useState, useEffect, useRef } from "react"
import AppearOnScroll from "../Utility/AppearOnScroll"
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const {t} = useTranslation()
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hasAnimated2, setHasAnimated2] = useState(false)
  const countRef = useRef(null)
  const countRef2 = useRef(null)
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated2) {
          setHasAnimated2(true)
          let current = 0
          const target = 200
          const duration = 1500
          const increment = target / (duration / 16)

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount2(target)
              clearInterval(timer)
            } else {
              setCount2(Math.floor(current))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef2.current) {
      observer.observe(countRef2.current)
    }

    return () => {
      if (countRef2.current) {
        observer.unobserve(countRef2.current)
      }
    }
  }, [hasAnimated2])

  const testimonials = [
    "https://ik.imagekit.io/greenraven/MJ/carousel/s1.png?updatedAt=1761577625794",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s2.png?updatedAt=1761577626034",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s3.png?updatedAt=1761577625825",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s4.png?updatedAt=1761577626066",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s5.png?updatedAt=1761577625796",
    "https://ik.imagekit.io/greenraven/MJ/carousel/s6.png?updatedAt=1761577625776",
  ]

  const caseStudies = [
    "https://ik.imagekit.io/greenraven/MJ/carousel/cs1.png?updatedAt=1761677736737",
    "https://ik.imagekit.io/greenraven/MJ/carousel/cs2.png?updatedAt=1761677737142",
    "https://ik.imagekit.io/greenraven/MJ/carousel/cs3.png?updatedAt=1761677736721",
    "https://ik.imagekit.io/greenraven/MJ/carousel/cs4.png?updatedAt=1761677736856",
    "https://ik.imagekit.io/greenraven/MJ/carousel/cs5.png?updatedAt=1761677738124",
    "https://ik.imagekit.io/greenraven/MJ/carousel/cs6.png?updatedAt=1761677737118",
    "https://ik.imagekit.io/greenraven/MJ/carousel/cs7.png?updatedAt=1761677737116"
  ]

  return (
<div className=" overflow-hidden pb-20">
        <AppearOnScroll 
        animation="fade-up"
        threshold={0.5}
        retrigger={true}
        >
            <h1 className="text-center md:text-5xl md:pb-10">
              {t('testimonials.studentsCountPrefix')}<span ref={countRef} className="headline text-4xl md:text-6xl text-cyan-500 inline-block min-w-[100px] tabular-nums">{count}</span>{t('testimonials.studentsCountSuffix')}
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
<br/>

        <AppearOnScroll 
        animation="fade-up"
        threshold={0.5}
        retrigger={true}
        >
            <h1 className="text-center md:text-5xl md:pb-10">
            {t('testimonials.businessesCountPrefix')}<span ref={countRef2} className="headline text-4xl md:text-6xl text-cyan-500 inline-block min-w-[100px] tabular-nums">{count2}</span>{t('testimonials.businessesCountSuffix')}
            </h1>
            <br/>
        </AppearOnScroll>

        {/* Mobile - Single Column for Case Studies */}
        {!isDesktop && (
          <div className="flex flex-col gap-2">
            {caseStudies.map((img, index) => (
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

        {/* Desktop - First image alone, then rest in 2 columns */}
        {isDesktop && (
          <div className="flex flex-col gap-5 max-w-7xl mx-auto">
            {/* First image - centered and same size */}
            <div className="grid grid-cols-2 gap-5">
              <div className="col-start-1 col-end-2 mx-auto w-full">
                <AppearOnScroll 
                  retrigger={true} 
                  animation="fade-up" 
                  threshold={0.3}
                  delay={0}
                >
                  <img src={caseStudies[0]} className="testo-img w-full" loading="lazy"/>
                </AppearOnScroll>
              </div>
            </div>

            {/* Rest of images - 2 columns */}
            <div className="grid grid-cols-2 gap-5">
              {caseStudies.slice(1).map((img, index) => (
                <AppearOnScroll 
                  key={index + 1}
                  retrigger={true} 
                  animation="fade-up" 
                  threshold={0.3}
                  delay={(index + 1) * 0.1}
                >
                  <img src={img} className="testo-img w-full" loading="lazy"/>
                </AppearOnScroll>
              ))}
            </div>
          </div>
        )}

    </div>
  )
}

export default Testimonials