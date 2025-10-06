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
            <li className={pathname === '/' ? 'account-link-active' : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname === '/about' ? 'account-link-active' : ''}>
              <Link href="/about">About</Link>
            </li>
            <li className={pathname === '/casestudy' ? 'account-link-active' : ''}>
              <Link href="/casestudy">Case Studys</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
