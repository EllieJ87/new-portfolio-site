'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathname = usePathname(); // Reactively tracks the current URL
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  useEffect(() => {
    setIsNavExpanded(false);
  }, [pathname]);


  return (
    
    <header className='dashboard-header'>
      <Link href='/' className='main-logo'>
        <span className='sr-only'>Ellie J Logo</span>
        <div className='img-container'>
          <Image
            priority
            src='/images/logo-full.svg'
            alt='Ellie J Logos'
            width={300}
            height={80}
          />
        </div>   
      </Link>
      
      <button 
        className={isNavExpanded ? 'nav-icon expanded' : 'nav-icon'} 
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <span className='sr-only'>Mobile Menu navigation</span>
      </button>

      <div className={isNavExpanded ? 'main-navbar expanded' : 'main-navbar'}>
        <nav className='navbar-menu'>
          <ul className='navbar-links'>
            <li className={pathname === '/' ? 'home-link-active' : 'nav-menu-link'}>
              <Link href="/" title="Take me Home">
                <span className='menu-icon home-icon'></span>
                <p>Home</p>
              </Link>
            </li>
            <li className={pathname === '/about' ? 'about-link-active' : 'nav-menu-link'}>
              <Link href="/about" title="About Me">
                <span className='menu-icon about-icon'></span>
                <p>About</p>              
              </Link>
            </li>
            <li className='nav-menu-link'>
              <Link href="mailto:ellie_judge@hotmail.co.uk" target='_blank' title="Contact me">
                <span className='menu-icon contact-icon'></span>
                <p>Contact Me</p>
              </Link>
            </li>
            <li className={pathname === '/casestudy' ? 'projects-link-active' : 'nav-menu-link'}>
              <Link href="/casestudy" title="See my Projects">
                <span className='menu-icon projects-icon'></span>
                <p>Case Studys</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
