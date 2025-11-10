'use client';
import Link from 'next/link';
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
      <Link href='/' className='main-logo'>Ellie</Link>
      
      <button 
        className={isNavExpanded ? 'nav-icon expanded' : 'nav-icon'} 
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      ></button>

      <div className={isNavExpanded ? 'main-navbar expanded' : 'main-navbar'}>
        <nav className='navbar-menu'>
          <ul className='navbar-links'>
            <li className={pathname === '/' ? 'home-link-active' : 'nav-menu-link'}>
              <Link href="/">
                <span className='menu-icon home-icon'></span>
                <p>Home</p>
              </Link>
            </li>
            <li className={pathname === '/about' ? 'about-link-active' : 'nav-menu-link'}>
              <Link href="/about">
                <span className='menu-icon about-icon'></span>
                <p>About</p>              
              </Link>
            </li>
            <li className='nav-menu-link'>
              <Link href="mailto:ellie_judge@hotmail.co.uk" target='_blank'>
                <span className='menu-icon contact-icon'></span>
                <p>Contact Me!</p>
              </Link>
            </li>
            <li className={pathname === '/casestudy' ? 'projects-link-active' : 'nav-menu-link'}>
              <Link href="/casestudy">
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
