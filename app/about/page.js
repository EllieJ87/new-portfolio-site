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
          <p className='spaced-text-lrg'>Crafting Engaging Digital Experiences</p>
        
          <h1>
            <span className='main-text-col'>UX/UI Designer</span>
            <span className='coral-text-col'>with Front-End Expertise</span>
          </h1>

          <div className='about-text'>
            <p>I design intuitive, accessible, and <span className='contrast-col'>visually engaging</span> digital experiences, combining UX/UI design with front-end development to bring <span className='contrast-col'>ideas to life</span>. My work focuses on creating <span className='contrast-col'>responsive interfaces</span> that balance user needs, usability, and visual clarity.</p>
            
            <p>At ATTB Group, I design and implement interfaces using Figma, HTML, CSS, JavaScript, and React, collaborating closely with developers and marketing teams to <span className='contrast-col'>improve usability, performance, and user engagement</span>.</p>
            
            <p><span className='contrast-col'>Inspired</span> by thoughtfully crafted interfaces and influences from Asian culture, anime, and gaming, I bring curiosity, attention to detail, and a user-first mindset to every project. My goal is to <span className='contrast-col'>create digital experiences</span> that feel intuitive, engaging, and meaningful for users.</p>
          </div>
          
          <a href='/images/ellie-j-cv.pdf' download='ellie-j-cv.pdf' className='download-link'>Download Resume</a> 
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
              <ul className='current-work'>
                <li>Redesigned websites and landing pages, improving user engagement by 45% and enhancing overall usability.</li>
                <li>Implemented responsive, accessible UI components, boosting mobile engagement by 70%.</li>
                <li>Conducted light user research using heatmaps and A/B tests to inform interface improvements and optimize conversion paths.</li>
                <li>Developed reusable UI components to accelerate prototyping and maintain design consistency.</li>
                <li>Improved navigation and interaction design across key features, increasing task completion efficiency.</li>
                <li>Supported marketing campaigns with visually compelling assets and strategic CTAs, improving conversions by 15%.</li>
              </ul>
              
              <p className='sub-header'>Key Projects</p>              
              <ul className='current-work'>
                <li><span className='contrast-col'>Full website development:</span> JobDNA (React, Next.js, TypeScript), TheBIGJobsite, Disrupted Cloud.</li>
                <li><span className='contrast-col'>Marketing & UX assets:</span> wireframes, prototypes, social graphics, email designs, interactive landing pages.</li>
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
              <p className='course-header'>Focused on responsive web development, JavaScript interactivity, and UX/UI best practices.</p>
              <ul className='course-work'>
                <li className='role-course'>
                  <p className='job-title'>EllChan_Anime - Responsive Web Portfolio</p>
                  <ul className='current-work'>
                    <li>Designed an interactive gallery showcasing artwork, optimized for mobile usability and navigation.</li>
                    <li>Implemented validated contact form and managed deployment via GitHub.</li>
                  </ul>
                </li>
                <li className='role-course'>
                  <p className='job-title'>Ranger Game - Interactive Choice-Based Game</p>
                  <ul className='current-work'>
                    <li>Developed interactive branching scenarios and multiple outcomes.</li>
                    <li>Enhanced engagement through intuitive decision-making mechanics, CSS animations, and sound interactions.</li>
                  </ul>
                </li>
                <li className='role-course'>
                  <p className='job-title'>E-commerce Product Page - “Sneakers”</p>
                  <ul className='current-work'>
                    <li>Designed mobile-first product page with image carousel and desktop modal interactions.</li>
                    <li>Implemented interactive shopping cart with real-time feedback.</li>
                    <li>Optimised layout and task flow for seamless user experience on mobile and desktop.</li>
                  </ul>
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
        
        <a href='/images/ellie-j-cv.pdf' download='ellie-j-cv.pdf' className='download-link'>Download Resume</a>

      </ScrollReveal>

    </div>
  )
}

export default About
