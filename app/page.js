import React from 'react'
import data from "/libs/case-study-list.json"
import Image from 'next/image'


import CaseStudyList from './Components/CaseStudyList'

const App = () => {

  const sections = [
    { title: 'Case Studies', items: data.caseStudiesAmends, linkLabel: 'View Case Study' },
    { title: 'New Projects', items: data.newProjectsCaseStudies, linkLabel: 'View Case Study' },
    { title: 'Mini Projects', items: data.miniProjects, showProjectLinks: true },
  ]

  return (
    <div className='home-container'>

      <section className='home-about'>        
        <div className='about-text'>
          <p className='spaced-text-lrg'>Hi I&apos;m Ellie, and I create... </p>
          <h1>
            <span className='main-text-col'>Design Driven &</span>
            <span className='coral-text-col'>Engaging Interfaces</span>
          </h1>
          <p className='text-body'>I transform ideas into visually compelling, <span>user-friendly</span> user-friendly digital experiences. Combining a designer&apos;s eye with a developer&apos;s precision, I create responsive websites and <span>interactive interfaces</span> that are as functional as they are beautiful. Every project I touch prioritises accessibility, performance, and intuitive usability. Crafting experiences that <span>users enjoy</span> and remember.</p>
        </div>
        
        <div className='img-container'>
          <Image
            priority 
            src='/images/placeholder-image.png'
            alt='Picture of myself'
            width={1200}
            height={800}
          />
        </div>
      </section>
      
      <section className='about-skills'>
        <h2>My Focus</h2>
        <ul className='skills-container'>
          <li className='skill-item'>
            <span className='skills-icon adobe-icon'></span>
            <p className='skill-text'>Adobe</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon figma-icon'></span>
            <p className='skill-text'>Figma</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon responsive-icon'></span>
            <p className='skill-text'>Responsive</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon uxui-icon'></span>
            <p className='skill-text'>UX / UI</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon illustration-icon'></span>
            <p className='skill-text'>Illustrations</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon digital-icon'></span>
            <p className='skill-text'>Digital Design</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon web-design-icon'></span>
            <p className='skill-text'>Web Design</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon concept-icon'></span>
            <p className='skill-text'>Concept Art</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon html-icon'></span>
            <p className='skill-text'>HTML</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon css-icon'></span>
            <p className='skill-text'>CSS</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon scss-icon'></span>
            <p className='skill-text'>SCSS</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon js-icon'></span>
            <p className='skill-text'>JavaScript</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon react-icon'></span>
            <p className='skill-text'>React</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon net-icon'></span>
            <p className='skill-text'>. Net</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon nextjs-icon'></span>
            <p className='skill-text'>Next.JS</p>
          </li>
          <li className='skill-item'>
            <span className='skills-icon git-icon'></span>
            <p className='skill-text'>Git</p>
          </li>
        </ul>
      </section>

      <section className='home-case-studies'>
        <h2>My Featured Works</h2>

        <CaseStudyList sections={sections} /> 

      </section>
    </div>
  )
}

export default App

