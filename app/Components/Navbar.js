'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import TypewriterComponent from 'typewriter-effect';

const Navbar = () => {
  const pathname = usePathname();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Close menu on route change
  useEffect(() => {
    setIsNavExpanded(false);
  }, [pathname]);

  // Detect Mobile vs Desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 840);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll-up hide header
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isNavExpanded && isMobile) {
        setShowHeader(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      }

      lastScrollY = currentScrollY
    };

    window.addEventListener('scroll', handleScroll, {passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavExpanded, isMobile]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      setIsNavExpanded(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isNavExpanded ? 'hidden' : '';
  }, [isNavExpanded]);

  // Menu Links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: 'mailto:ellie_judge@hotmail.co.uk', label: 'Get in Touch', isContact: true },
  ];

  // Render Menu
  const renderMenu = () => (
    <div className={isNavExpanded || !isMobile ? 'main-navbar expanded' : 'main-navbar'}>
      <nav className='navbar-menu'>
        <ul className='navbar-links'>
          {navLinks.map((link, idx) => (
            <li
              key={link.href}
              className={`${link.isContact ? 'contact-link' : ''} ${
                pathname === link.href ? `${link.label.toLocaleLowerCase()}-link-active` : 'nav-menu-link'}`}
            >
              <Link
                href={link.href}
                target={link.isContact ? '_blank' : '_self'}
                title={link.label}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <header className={`dashboard-header ${showHeader ? 'visible' : 'hidden'}`}>
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
          <span className='sr-only'>Mobile Menu navigation</span>
        </button>

        {/* Desktop menu: render inside header */}
        {!isMobile && renderMenu()}
      </header>

      {/* Mobile menu: render outside header */}
      {isMobile && renderMenu()}

    </>   

  )
}

export default Navbar
