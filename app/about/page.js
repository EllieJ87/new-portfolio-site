import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Marquee from '../Components/Marquee';

const About = () => {
  return (
    <div className='db-container about-container'>
      <section className='about-header'>
        <h1>About Me</h1>

        <div className='about-text'>
          <p>With a strong foundation in front-end development and a creative eye for design, I bring digital experiences to life through clean code and intuitive interfaces. Front End Developer and Web Designer with hands-on experience designing and developing responsive websites for the ATTB Group. I focus on creating visually engaging, user-friendly websites that prioritize functionality, accessibility, and performance—always aligned with best practices and SEO standards.</p>
          <p>Prior to my current role, I completed a Diploma in Full Stack Software Development with Code Institute, where I discovered a strong drive for problem-solving and building seamless user experiences. This foundation has enabled me to write clean, maintainable, and reusable code using HTML, CSS, and JavaScript, and confidently review and optimize front-end performance.</p>
          <p>In my current position, I design visuals, graphics, and user interfaceswhile ensuring mobile responsiveness and W3C compliance. I regularlymonitor site performance and accessibility, and I use tools like Adobe Creative Suite along with basic scripting to enhance functionality.</p>
          <p>Outside of work, I&apos;m a curious and creative individual with a love for Japanese culture, anime, and gaming. I enjoy knitting, drawing, and cooking, and I find inspiration in everything from beautifully designed interfaces to a great cup of coffee. These passions fuel my creativity and attention to detail in everything I build.</p>
          <p>I&apos;m excited to continue growing as a Front End Developer, bringing thoughtful design and clean code together to craft engaging digital experiences.</p>
        </div>

        <div className='about-imgs'>
          <div className='img-container img-one'>
            <Image
              priority
              src='/images/me-kimono.jpg'
              className='about-img'
              alt='Me in a kimono in a Japanes garden'
              width={768}
              height={1020}
            />
          </div>
          <div className='img-container img-two'>
            <Image
              priority
              src='/images/me-shiho.jpg'
              className='about-img'
              alt='Me and my friend Shiho posing for the camera'
              width={720}
              height={959}
            />
          </div>
          <div className='img-container img-three'>
            <Image
              priority
              src='/images/me-blue.jpg'
              className='about-img'
              alt='Me and a tour guide called Blue posing for the camera'
              width={912}
              height={684}
            />
          </div>
        </div>
      </section>

      <section className='about-skills'>
        <h2>Skills</h2>
        <ul className='skills-container'>
          <li>
            <span className='skills-icon adobe-icon'></span>
          </li>
          <li>
            <span className='skills-icon figma-icon'></span>
          </li>
          <li>
            <span className='skills-icon responsive-icon'></span>
          </li>
          <li>
            <span className='skills-icon uxui-icon'></span>
          </li>
          <li>
            <span className='skills-icon html-icon'></span>
          </li>
          <li>
            <span className='skills-icon bootstrap-icon'></span>
          </li>
          <li>
            <span className='skills-icon css-icon'></span>
          </li>
          <li>
            <span className='skills-icon scss-icon'></span>
          </li>
          <li>
            <span className='skills-icon js-icon'></span>
          </li>
          <li>
            <span className='skills-icon jquery-icon'></span>
          </li>
          <li>
            <span className='skills-icon react-icon'></span>
          </li>
        </ul>
      </section>

      <section className='about-roles'>
        <article>
          <h2>Current Role</h2>

          <div className='roles-header'>
            <h3>Web Designer / Front-End Developer</h3>
            <p className='job-title'>ATTB Group</p>
            <p className='job-date'>Jul 2022 - Present</p>
          </div>

          <div className='role-ul-container'>
            <div className="role-ul-contents">
              <div className="vertical-line"></div>
              
              <ul>
                <li>Designing the visuals, graphics, and functionality of the companies websites to reach maximum usability.</li>
                <li>Use an understanding of user interface and user experience to create the companies websites.</li>
                <li>Create responsive websites for mobile devices in accordance with W3C web standards.</li>
                <li>Understanding and monitoring website performance, accessibility, best practice and SEO.</li>
                <li>Use of Adobe suite and basic coding to create and maintain scripts.</li>
                <li>Review HTML, CSS and JavaScript code, ensuring code is reusable and identifying improvements to streamline website performance.</li>
              </ul>
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
        </article>

        <article>
          <h2>Past Employment</h2>
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
          <h2>Interests</h2>

          <div className='ih-container'>
            <h3>Languages</h3>
            <div className='role-ul-container'>
              <div className="role-ul-contents">
                <div className="vertical-line"></div>
                <ul>
                  <li>English</li>
                  <li>Japanes (basic & learning)</li>
                  <li>Danish</li>
                </ul>
              </div> 
            </div>
          </div>
          
          <div className='ih-container'>
            <h3>Hobbies</h3>
            <div className='role-ul-container'>
              <div className="role-ul-contents">
                <div className="vertical-line"></div>
                <ul>
                  <li>Travelling</li>
                  <li>Knitting, Crochet & Crafting</li>
                  <li>Drawing by Hand & Computer</li>
                  <li>Gaming</li>
                  <li>Learning new languages</li>
                </ul>
              </div> 
            </div>
          </div>
        </article>
      </section>
      
      <div className='marquee'>
        <Marquee />
      </div>
    </div>
  )
}

export default About
