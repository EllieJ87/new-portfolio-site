'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '', 
  threshold = 0.2, 
  transitionDelay,
  as: Component = 'div', 
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {

        // This keeps the in-view class 
        if (entry.isIntersecting) {
          setInView(true);
        }

        // this toggles the view so also has the fade and removes the in-view class
        // setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={ref}
      className={`${className} ${inView ? 'in-view' : ''}`}
      style={{ 
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out', 
        transitionDelay 
      }}
    >
      {children}
    </Component>
  );
}
