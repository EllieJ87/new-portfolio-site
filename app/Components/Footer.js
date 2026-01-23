'use client'
import React from 'react'
import { useState } from "react"

import Link from 'next/link';
import Marquee from './Marquee';

const Footer = () => {
  const [date, setDate] = useState(new Date());
  
  return (
    <footer>
      <div className='marquee'>
        <Marquee />
      </div>

      <div className='footer-inner'>
        <nav className='footer-navigation'>
          <ul className='footer-nav-links'>
            <li className='footer-links'>
              <Link href='/' title='Take me Home'>Home</Link>
            </li>
            <li className='footer-links'>
              <Link href='/about' title='About Me'>About</Link>
            </li>
            <li className='footer-links'>
              <Link href='/work' title='See my Projects'>Work</Link>
            </li>
          </ul>
        </nav>

        <div className='footer-contact-info'>
          <h2>
            <span className='main-text-col'>Crafting Experiences</span>
            <span className='coral-text-col'>Together.</span>
          </h2>
          <ul>
            <li>
              <Link href='https://www.linkedin.com/in/ellie-judge-45b00689' target='_blank' className='footer-icon linkedin-icon'>
                <span className='sr-only'>Ellie J Linkedin profile</span>
              </Link>
            </li>
            <li>
              <Link href='https://github.com/EllieJ87' target='_blank' className='footer-icon github-icon'>
                <span className='sr-only'>Ellie J Github profile</span>
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/elljudge' target='_blank' className='footer-icon instagram-icon'>
                <span className='sr-only'>Ellie J Instagram profile</span>
              </Link>
            </li>
          </ul>
          
          <Link href='mailto:ellie_judge@hotmail.co.uk' target='_blank' title='Contact me' className='contact-link'>Get in touch</Link>
        </div>

        <p className='copy-name'>© {date.getFullYear()} EJ.Design</p>

      </div>
    </footer>
  )
}

export default Footer
