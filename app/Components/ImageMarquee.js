'use client'
import React, { useEffect, useRef } from 'react';
// import TypewriterComponent from 'typewriter-effect';

import Image from 'next/image';

const Marquee = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const scroller = scrollRef.current;
    const ul = scroller.querySelector('ul');
    const clone = ul.cloneNode(true);
    scroller.appendChild(clone);
  }, []);

  return (
    <div className='marquee-container'>

      <div className='inner-scroll' ref={scrollRef}>
        <ul>
          <li>
            <div className='about-img-container me-blue'></div>
          </li>
          <li>
            <div className='about-img-container me-heart'></div>
          </li>
          <li>
            <div className='about-img-container me-kimono'></div>
          </li>
          <li>
            <div className='about-img-container me-shiho'></div>
          </li>
          <li>
            <div className='about-img-container me-korea'></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Marquee;