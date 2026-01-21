import React from 'react';
import Image from 'next/image';
import ImageMarquee from '../Components/ImageMarquee';
import Link from 'next/link';

export const metadata = {
  title: "EJ : About",
  description: "About Ellie J and her life as a Web Designer / Front-End Developer",
};

const About = () => {
  return (
    <div className='db-container about-container'>
      <section className='about-header'>
        
        <div className='marquee'>
          <ImageMarquee />
        </div>

        <p>Cafting Engaging Digital Experiences</p>

        <h1>UI Developer <span>& Design Enthusiast</span></h1>

        <div className='about-text'>
          <p>I combine front-end development with a <span>creative eye</span> for design to build responsive, user-friendly websites that balance functionality, accessibility, and visual appeal. At ATTB Group, I <span>craft clean, maintainable code</span> using HTML, CSS, JavaScript, and React, while optimizing performance and enhancing usability.</p>
          <p><span>Inspired</span> by everything from <span>beautifully designed interfaces</span> to Asian culture, anime and gaming, I bring curiosity and attention to detail to every project. My goal is to create <span>digital experiences</span> that are intuitive, engaging, and visually compelling.</p>
        </div>

        <a href="/images/placeholder-image.png" download="placeholder-image.png">Download Resume</a>
      </section>

      <section className='about-roles'>
        <article>
          <h2>Current Work</h2>

          <div className='roles-header'>
            <h3>Web Designer / Front-End Developer</h3>
            <p className='job-title'>AllTheTopBananas Group</p>
            <p className='job-date'>Jul 2022 - Present</p>
          </div>

          <div className='role-container'>
            <p className='job-title'>Key Achievements & Responsibilities</p>

            <div className='role-ul-container'>
              <div className="role-ul-contents">
                <div className="vertical-line"></div>              
                <ul>
                  <li>Designed and implemented responsive websites, improving mobile usability and driving a 70% increase in mobile engagement.</li>
                  <li>Optimised website performance and accessibility, reducing page load times by 1 second and ensuring 100% accessibility.</li>
                  <li>Developed reusable HTML, CSS, JavaScript, SCSS, jQuery and React components, cutting new page development time by 25%.</li>
                  <li>Enhance website visuals, graphics, and UI elements, boosting user engagement with core site features.</li>
                  <li>Created landing pages with strategic CTA’s, increasing conversions by 15%.</li>
                  <li>Redesigned corporate websites, raising user engagement by 45% and enhancing overall user experience.</li>
                  <li>Improved page load speeds by 35% through efficient coding and optimisation.</li>
                  <li>Supported SEO campaigns, improving search engine visibility performance by 30%.</li>
                  <li>Increased email click rates, through re-design and catering for dark screen users, and improving mobile usability by 80%.</li>
                </ul>
              </div> 
            </div>
          </div>
        </article>

        <article>
          <h2>Courses</h2>
          <div className='roles-header'>
            <h3>Front-End Developer Course</h3>
            <p className='job-title'>The Learning People</p>
            <p className='job-date'>Jan 2021 - May 2022</p>
          </div>

          <div className='role-ul-container'>
            <div className="role-ul-contents">
              <div className="vertical-line"></div>              
              <ul className='role-course-container'>
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
        </article>

        <article>
          <h2>Past Experience</h2>
          <ul>
            <li>
              <div className='roles-header'>
                <h3>Menswear Garment Technologist</h3>
                <p className='job-title'>Brand Machine International</p>
                <p className='job-date'>Sept 2020 - Jun 2021</p>
              </div>
            </li>
            <li>
              <div className='roles-header'>
                <h3>Product Developer</h3>
                <p className='job-title'>Fuelled Apparel</p>
                <p className='job-date'>Mar 2020 (1 Month)</p>
              </div>
            </li>
            <li>
              <div className='roles-header'>
                <h3>Menswear Garment Technologist</h3>
                <p className='job-title'>Lyle & Scott</p>
                <p className='job-date'>Jun 2016 - Mar 2020</p>
              </div>
            </li>
            <li>
              <div className='roles-header'>
                <h3>Little White Company Assistant Technologist</h3>
                <p className='job-title'>The White Company</p>
                <p className='job-date'>Jun 2014 - Jun 2016</p>
              </div>
            </li>
            <li>
              <div className='roles-header'>
                <h3>Designer / Product Developer Assistant</h3>
                <p className='job-title'>Supremebeing Ltd</p>
                <p className='job-date'>Feb 2014 - Jun 2014</p>
              </div>
            </li>
          </ul>
        </article>

        <article className='interests-container'>
          <h2>My Enjoyment</h2>

          <ul>
            <li>
              <h2>Knitting & Crafting</h2>
              <p>I enjoy working with my hands through knitting, crochet, and other crafts, which encourages patience, precision, and an appreciation for structure. Creating something from scratch—stitch by stitch—mirrors how I approach building interfaces and refining details in my design work.</p>
            </li>
            <li>
              <h2>Languages</h2>
              <p>I have a strong interest in learning languages and exploring different cultures. I&apos;ve studied Danish and Japanese and am currently learning Korean, driven by curiosity around communication, cultural nuance, and how people interact across different contexts—both digitally and in everyday life.</p>
            </li>
            <li>
              <h2>Drawing</h2>
              <p>Drawing both by hand and digitally allows me to explore composition, form, and visual storytelling outside of code. It&apos;s a creative outlet that helps sharpen my eye for layout, balance, and detail, which naturally feeds back into my UI and design work.</p>
            </li>
            <li>
              <h2>Travelling</h2>
              <p>Travelling across Asia and Europe has given me exposure to diverse cultures, design styles, and ways of thinking. Experiencing different environments and perspectives continually influences how I approach accessibility, usability, and user-centred design.</p>
            </li>
          </ul>
        </article>
      </section>

      <section className='about-header'>
        <h2>I craft digitial experiences that are intuitive as they are visually engaging, <span>blending clean code with thoughtful design.</span></h2>
        
        <a href="/images/placeholder-image.png" download="placeholder-image.png">Download Resume</a>

      </section>

    </div>
  )
}

export default About
