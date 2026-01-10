import React from 'react'
import data from "/libs/case-study-list.json"
import Link from 'next/link';
import Image from 'next/image'

import Marquee from './Components/Marquee';


function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const allProjects = [
  ...data.caseStudiesAmends,
  ...data.newProjectsCaseStudies,
  // ...data.miniProjects
];

const App = () => {
  const randomProjects = getRandomItems(allProjects, 6);
  // const randomAmends = getRandomItems(data.caseStudiesAmends, 2);
  // const randomMini = getRandomItems(data.miniProjects, 1);

  return (
    <div className='db-container home-container'>
      <section className='home-about'>
        <div className='about-intro'>
          <h1>About Me</h1>
          <div className='about-text'>
            <p>Creative problem-solver with a passion for thoughtful design and front-end development.  A Front End Developer and Web Designer with hands-on experience crafting responsive, user-focused websites for the ATTB Group. I specialize in building visually engaging, accessible digital experiences that meet modern performance and SEO standards.</p>
            <p>Currently, I design interfaces and graphics, ensure mobile responsiveness, and enhance functionality using Adobe Creative Suite and basic scripting—always with a focus on usability and best practice.</p>
            <p>Outside of work, creativity continues to drive me. I&apos;m inspired by Japanese culture, anime, and gaming, and spend my spare time knitting, drawing, and cooking—all of which sharpen my eye for design and detail.</p>
          </div>

          <div className='about-img-container'>
            <Image
              priority 
              src='/images/me-2.webp'
              className='about-img'
              alt='Picture of myself'
              width={751}
              height={896}
            />
          </div>
        </div>
        
        <div className='marquee'>
          <Marquee />
        </div>
      </section>

      <section className='home-skills'>
        <ul>
          <li>
            <h3 className='wd-icon'>Web Designer</h3>
            <div className="heading-container">
              <div className="vertical-line"></div>
              <p>Designing responsive website wireframes in Figma for both desktop and mobile platforms.</p>
            </div>
          </li>
          <li>
            <h3 className='fed-icon'>Front-End Developer</h3>
            <div className="heading-container">
              <div className="vertical-line"></div>
              <p>Building and maintaining website front-ends using HTML, CSS, SCSS, JavaScript, React, and Next.js.</p>
            </div>            
          </li>
          <li>
            <h3 className='di-icon'>Digital Illustrator</h3>
            <div className="heading-container">
              <div className="vertical-line"></div>
              <p>Creating custom imagery and iconography to enhance website storytelling and meet business needs.</p>
            </div>            
          </li>
        </ul>
      </section>

      <section className='home-case-studies'>
        <h2>Case Studies</h2>

        {randomProjects?.length ? (
          <ul>
            {randomProjects.map((item, index) => (
              <li key={index} className='cs-cards'>
                <Link href={`/casestudy/${item.slug}`} className='cs-cards-container'>
                  <div className='img-container'>
                    <Image
                      priority
                      src={item.CaseStudyImg.url}
                      alt={item.CaseStudyImg.altTitle}
                      width={item.CaseStudyImg.width}
                      height={item.CaseStudyImg.height}
                      className='card-img'
                    />
                  </div>                
                  <h3>{item.CaseStudyTitle}</h3>
                  <p className='link-arrow'>View Project</p>    
                </Link>
              </li>
            ))}
          </ul>
        ) : null }

        <Link href='/casestudy' className='btn btn-main project-btn'>See What I&apos;ve Done ^_^</Link>
        {/* <button href='/casestudy' className='btn btn-main'>See What I&apos;ve Done ^_^</button> */}
      </section>
    </div>
  )
}

export default App

