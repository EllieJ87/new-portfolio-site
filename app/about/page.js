import React from 'react';
import ImageMarquee from '../Components/ImageMarquee';
// import Link from 'next/link';
import ScrollReveal from '../Components/ScrollReveal'

export const metadata = {
  title: "About Ellie",
  description: "About Ellie and her life as a UI Developer",
};

const About = () => {
  return (
    <div className='about-container'>
      <section className='about-header'>
        
        <div className='marquee'>
          <ImageMarquee />
        </div>

        <div className='about-top'>
          <p className='spaced-text-lrg'>Cafting Engaging Digital Experiences</p>
        
          <h1>
            <span className='main-text-col'>UI Developer</span>
            <span className='coral-text-col'>& Design Enthusiast</span>
          </h1>

          <div className='about-text'>
            <p>I combine front-end development with a <span className='contrast-col'>creative eye</span> for design to build responsive, user-friendly websites that balance functionality, accessibility, and visual appeal. At ATTB Group, I <span className='contrast-col'>craft clean, maintainable code</span> using HTML, CSS, JavaScript, and React, while optimizing performance and enhancing usability.</p>
            <p><span className='contrast-col'>Inspired</span> by everything from <span className='contrast-col'>beautifully designed interfaces</span> to Asian culture, anime and gaming, I bring curiosity and attention to detail to every project. My goal is to create <span className='contrast-col'>digital experiences</span> that are intuitive, engaging, and visually compelling.</p>
          </div>
          
          <a href='/images/placeholder-image.png' download='placeholder-image.png' className='download-link'>Download Resume</a> 
        </div>

      </section>

      <section className='about-roles'>

        <ScrollReveal 
          as='article'
          className='roles-container sub-container'
        >
          <h2>Current Work</h2>
          
          <div className='inner-container'>
            <div className='roles-header'>
              <h3>Web Designer / Front-End Developer</h3>
              <p className='work-title'>AllTheTopBananas Group</p>
              <p className='work-date'>Jul 2022 - Present</p>
            </div>

            <div className='work-container'>
              <p className='sub-header'>Key Achievements & Responsibilities</p>
              
              <ul className='current-work'>
                <li>Designed and implemented responsive websites, improving mobile usability and driving a 70% increase in mobile engagement.</li>
                <li>Optimised website performance and accessibility, reducing page load times by 1 second and ensuring 100% accessibility.</li>
                <li>Developed reusable HTML, CSS, JavaScript, SCSS, jQuery and React components, cutting new page development time by 25%.</li>
                <li>Enhance website visuals, graphics, and UI elements, boosting user engagement with core site features.</li>
                <li>Created landing pages with strategic CTA&apos;s, increasing conversions by 15%.</li>
                <li>Redesigned corporate websites, raising user engagement by 45% and enhancing overall user experience.</li>
                <li>Improved page load speeds by 35% through efficient coding and optimisation.</li>
                <li>Supported SEO campaigns, improving search engine visibility performance by 30%.</li>
                <li>Increased email click rates, through re-design and catering for dark screen users, and improving mobile usability by 80%.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal 
          as='article'
          className='roles-container sub-container'
        >
          <h2>Courses</h2>

          <div className='inner-container'>
            
            <div className='roles-header'>
              <h3>Front-End Developer Course</h3>
              <p className='work-title'>The Learning People</p>
              <p className='work-date'>Jan 2021 - May 2022</p>
            </div>

            <div className='work-container'>
              <ul className='course-work'>
                <li className='role-course'>
                  <p className='job-title'>EllChan_Anime</p>
                  <p>Developed a responsive web portfolio using HTML, CSS, and Bootstrap to showcase original artwork. An interactive gallery with compressed, responsive images and artwork descriptions, and implemented a validated contact form integrated with a third-party email service. Improved performance and mobile usability by resolving layout and navigation issues, including horizontal scrolling caused by banner imagery, and managed version control and deployment via GitHub.</p>
                </li>
                <li className='role-course'>
                  <p className='job-title'>Ranger Game</p>
                  <p>Developed a choice-based space adventure game using JavaScript, HTML, CSS, and Bootstrap. Utilised DOM manipulation and object-driven logic to dynamically update imagery, text, and user options based on player decisions. Implemented gameplay mechanics for health, ammo, and fuel that trigger branching scenarios and seven distinct endings. Enhanced engagement with CSS animations and JavaScript-controlled sound functionality</p>
                </li>
                <li className='role-course'>
                  <p className='job-title'>E-commerce Product Page</p>
                  <p>Developed an E-commerce product page for “Sneakers” using JavaScript, HTML, and SCSS. Built a mobile-friendly image carousel for browsing thumbnails and a desktop product modal with active thumbnails and carousel navigation. Implemented shopping cart functionality allowing users to add, remove, and checkout items, with toast pop-ups providing real-time feedback on interactions.</p>
                </li>
              </ul>
            </div>

          </div>

        </ScrollReveal>

        <ScrollReveal
          as='article'
          className='roles-container sub-container'
        >
          <h2>Past Experience</h2>
          <ul className='previous-work'>
            <li>
              <div className='roles-header'>
                <h3>Menswear Garment Technologist</h3>
                <p className='work-title'>Brand Machine International</p>
                <p className='work-date'>Sept 2020 - Jun 2021</p>
              </div>
            </li>
            <li>
              <div className='roles-header'>
                <h3>Product Developer</h3>
                <p className='work-title'>Fuelled Apparel</p>
                <p className='work-date'>Mar 2020 (1 Month)</p>
              </div>
            </li>
            <li>
              <div className='roles-header'>
                <h3>Menswear Garment Technologist</h3>
                <p className='work-title'>Lyle & Scott</p>
                <p className='work-date'>Jun 2016 - Mar 2020</p>
              </div>
            </li>
            <li>
              <div className='roles-header'>
                <h3>Little White Company Assistant Technologist</h3>
                <p className='work-title'>The White Company</p>
                <p className='work-date'>Jun 2014 - Jun 2016</p>
              </div>
            </li>
            <li>
              <div className='roles-header'>
                <h3>Designer / Product Developer Assistant</h3>
                <p className='work-title'>Supremebeing Ltd</p>
                <p className='work-date'>Feb 2014 - Jun 2014</p>
              </div>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal 
          as='article'
          className='roles-container'
        >
          <h2>My Enjoyment</h2>

          <ul className='current-interests'>
            <li>
              <div className='interests-header'>
                <h3>Knitting & Crafting</h3>
                <span className='interests-icon knitting-icon'></span>
              </div>
              <p>I enjoy working with my hands through knitting, crochet, and other crafts, which encourages patience, precision, and an appreciation for structure. Creating something from scratch—stitch by stitch—mirrors how I approach building interfaces and refining details in my design work.</p>
            </li>

            <li>
              <div className='interests-header'>
                <h3>Languages</h3>
                <span className='interests-icon languages-icon'></span>
              </div>
              <p>I have a strong interest in learning languages and exploring different cultures. I&apos;ve studied Danish and Japanese and am currently learning Korean, driven by curiosity around communication, cultural nuance, and how people interact across different contexts—both digitally and in everyday life.</p>
            </li>

            <li>
              <div className='interests-header'>
                <h3>Drawing</h3>
                <span className='interests-icon drawing-icon'></span>
              </div>
              <p>Drawing both by hand and digitally allows me to explore composition, form, and visual storytelling outside of code. It&apos;s a creative outlet that helps sharpen my eye for layout, balance, and detail, which naturally feeds back into my UI and design work.</p>
            </li>

            <li>
              <div className='interests-header'>
                <h3>Travelling</h3>
                <span className='interests-icon travel-icon'></span>
              </div>
              <p>Travelling across Asia and Europe has given me exposure to diverse cultures, design styles, and ways of thinking. Experiencing different environments and perspectives continually influences how I approach accessibility, usability, and user-centred design.</p>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      <ScrollReveal 
        as='section'
        className='ending-quote'
      >
        <h2>
          <span className='main-text-col'>I craft digitial experiences that are intuitive as they are visually engaging,</span> <span className='coral-text-col'>blending clean code with thoughtful design.</span>
        </h2>
        
        <a href='/images/placeholder-image.png' download='placeholder-image.png' className='download-link'>Download Resume</a>

      </ScrollReveal>

    </div>
  )
}

export default About
