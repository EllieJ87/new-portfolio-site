'use client'
import React, { useEffect, useRef } from 'react';

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
      {/* <h2>エリーは大好き</h2> */}
      <h2>엘리는 사랑한다</h2>
      <div className="inner-scroll" ref={scrollRef}>
        <ul>
          <li>Korea</li>
          <li>Code</li>
          <li>Anime</li>
          <li>Coffee</li>
          <li>Gaming</li>
          <li>K Drama</li>
          <li>Knitting</li>
          {/* <li>Japan</li> */}
          {/* <li>Korea</li> */}
          <li>Asia</li>
          <li>Design</li>
          <li>Cooking</li>
          <li>Travelling</li>
          <li>Korean</li>
          <li>Drawing</li>
          <li>Food</li>
        </ul>
      </div>
    </div>
  );
};

export default Marquee;