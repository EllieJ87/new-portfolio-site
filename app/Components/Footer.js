'use client'
import React from 'react'
import { useState } from "react"

import Link from 'next/link';
import Image from 'next/image'

const Footer = () => {
  const [date, setDate] = useState(new Date());
  
  return (
    <footer>
      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/ellie-judge-45b00689" target='_blank' className='footer-icon linkedin-icon'></Link>
        </li>
        <li>
          <Link href="https://github.com/EllieJ87" target='_blank' className='footer-icon github-icon'></Link>
        </li>
        <li>
          <Link href="mailto:ellie_judge@hotmail.co.uk" target='_blank' className='footer-icon email-icon'></Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/elljudge" target='_blank' className='footer-icon instagram-icon'></Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/Lobo.Luna.87" target='_blank' className='footer-icon facebook-icon'></Link>
        </li>
        <li>
          <Link href="https://x.com/Els_Luna87" target='_blank' className='footer-icon x-icon'></Link>
        </li>
        <li>
          <Link href="https://canary.discord.com/users/moonshine874226" target='_blank' className='footer-icon discord-icon'></Link>
        </li>
      </ul>

      <p>A portfolio made by Ellie {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer
