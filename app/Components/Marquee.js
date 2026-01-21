'use client'
import React, { useEffect, useRef } from 'react';
// import TypewriterComponent from 'typewriter-effect';

const Marquee = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const scroller = scrollRef.current;
    const ul = scroller.querySelector('ul');
    const clone = ul.cloneNode(true);
    scroller.appendChild(clone);
  }, []);

  return (
    <div className="marquee-container">
      {/* <h2>
        <TypewriterComponent options={{
            strings: ['Ellie likes...', 'エリーは大好き...', '엘리는 사랑한다...'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2> */}

      {/* <h2>Ellie likes</h2>
      <h2>エリーは大好き</h2>
      <h2>엘리는 사랑한다</h2> */}
      <div className="inner-scroll" ref={scrollRef}>
        <ul>
          <li>Prototyping</li>
          <li>Web Design</li>
          <li>UX / UI</li>
          <li>Concept Art</li>
          <li>Responsive</li>
          <li>UI Developer</li>
          <li>Illustrations</li>
          <li>UI Design</li>
          <li>Branding</li>
          <li>UX Design</li>
          <li>Front-End Developer</li>
          <li>Icongraphics</li>
          <li>Digital Designs</li>
        </ul>
      </div>
    </div>
  );
};

export default Marquee;