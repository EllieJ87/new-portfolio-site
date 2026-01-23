'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import TypewriterComponent from 'typewriter-effect';

const Navbar = () => {
  const pathname = usePathname();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  useEffect(() => {
    setIsNavExpanded(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsNavExpanded(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
    <header className='dashboard-header'>
      <h2>
        <TypewriterComponent options={{
            strings: ["Ellie's Portfolio", 'UI Developer', 'Web Designer', 'Front-End Developer'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <button 
        className={isNavExpanded ? 'nav-icon expanded' : 'nav-icon'} 
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        X
        {/* <span className='sr-only'>Mobile Menu navigation</span> */}
      </button>

      <div className={isNavExpanded ? 'main-navbar expanded' : 'main-navbar'}>
        <nav className='navbar-menu'>
          <ul className='navbar-links'>
            <li className={pathname === '/' ? 'home-link-active' : 'nav-menu-link'}>
              <Link href='/' title='Take me Home'>Home</Link>
            </li>
            <li className={pathname === '/about' ? 'about-link-active' : 'nav-menu-link'}>
              <Link href='/about' title='About Me'>About</Link>
            </li>
            <li className={pathname === 'work' ? 'projects-link-active' : 'nav-menu-link'}>
              <Link href='/work' title='See my Projects'>Work</Link>
            </li>
            <li className='nav-menu-link contact-link'>
              <Link href='mailto:ellie_judge@hotmail.co.uk' target='_blank' title='Contact me'>Get in touch</Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
