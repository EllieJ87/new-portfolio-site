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
            <div className='about-img-container'>
              <Image
                priority
                src='/images/placeholder-image.png'
                className='about-img'
                alt='Picture of myself'
                width={200}
                height={200}
              />
            </div>
          </li>
          <li>
            <div className='about-img-container'>
              <Image
                priority
                src='/images/placeholder-image.png'
                className='about-img'
                alt='Picture of myself'
                width={200}
                height={200}
              />
            </div>
          </li>
          <li>
            <div className='about-img-container'>
              <Image
                priority
                src='/images/placeholder-image.png'
                className='about-img'
                alt='Picture of myself'
                width={200}
                height={200}
              />
            </div>
          </li>
          <li>
            <div className='about-img-container'>
              <Image
                priority
                src='/images/placeholder-image.png'
                className='about-img'
                alt='Picture of myself'
                width={200}
                height={200}
              />
            </div>
          </li>
          <li>
            <div className='about-img-container'>
              <Image
                priority
                src='/images/placeholder-image.png'
                className='about-img'
                alt='Picture of myself'
                width={200}
                height={200}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Marquee;