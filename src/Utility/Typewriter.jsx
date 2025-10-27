import { useEffect, useRef, useState } from 'react';

const Typewriter = ({ 
  text,
  speed = 50,
  threshold = 0.5,
  className = '',
  onComplete = () => {}
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
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
  }, [threshold, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 1;
    setDisplayedText(text.charAt(0));

    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        onComplete();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [hasStarted, text, speed]);

  return (
    <span ref={elementRef} className={className}>
      {displayedText}
      {hasStarted && displayedText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default Typewriter;