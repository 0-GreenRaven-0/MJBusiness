import { useEffect, useRef, useState } from 'react';

const AppearOnScroll = ({ 
  children, 
  animation = 'fade-up',
  threshold = 0.1,
  duration = 0.6,
  delay = 0,
  retrigger = false,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (retrigger) {
          // Retrigger mode: animate in/out based on visibility
          setIsVisible(entry.isIntersecting);
        } else {
          // Single trigger mode: only animate once when entering
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, retrigger]);

  const animations = {
    'fade-up': {
      initial: { opacity: 0, transform: 'translateY(40px)' },
      visible: { opacity: 1, transform: 'translateY(0)' }
    },
    'fade-down': {
      initial: { opacity: 0, transform: 'translateY(-40px)' },
      visible: { opacity: 1, transform: 'translateY(0)' }
    },
    'fade-left': {
      initial: { opacity: 0, transform: 'translateX(40px)' },
      visible: { opacity: 1, transform: 'translateX(0)' }
    },
    'fade-right': {
      initial: { opacity: 0, transform: 'translateX(-40px)' },
      visible: { opacity: 1, transform: 'translateX(0)' }
    },
    'fade': {
      initial: { opacity: 0 },
      visible: { opacity: 1 }
    },
    'scale': {
      initial: { opacity: 0, transform: 'scale(0.8)' },
      visible: { opacity: 1, transform: 'scale(1)' }
    },
    'rotate': {
      initial: { opacity: 0, transform: 'rotate(-10deg)' },
      visible: { opacity: 1, transform: 'rotate(0)' }
    }
  };

  const currentAnimation = animations[animation] || animations['fade-up'];
  const style = isVisible ? currentAnimation.visible : currentAnimation.initial;

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        transition: `all ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AppearOnScroll;