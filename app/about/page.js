import React from 'react';
import Image from 'next/image';
import Marquee from '../Components/Marquee';

export const metadata = {
  title: "EJ : About",
  description: "About Ellie J and her life as a Web Designer / Front-End Developer",
};

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
              src='/images/me-kimono.webp'
              className='about-img'
              alt='Me in a kimono in a Japanes garden'
              width={768}
              height={1020}
            />
          </div>
          <div className='img-container img-two'>
            <Image
              priority
              src='/images/me-shiho.webp'
              className='about-img'
              alt='Me and my friend Shiho posing for the camera'
              width={720}
              height={959}
            />
          </div>
          <div className='img-container img-three'>
            <Image
              priority
              src='/images/me-blue.webp'
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
          <li className='skill-item'>
            <span className='skills-icon adobe-icon'></span>
            <span className='skill-text'>Adobe</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon figma-icon'></span>
            <span className='skill-text'>Figma</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon uxui-icon'></span>
            <span className='skill-text'>UX / UI</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon responsive-icon'></span>
            <span className='skill-text'>Responsive</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon concept-icon'></span>
            <span className='skill-text'>Concept Art</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon illustration-icon'></span>
            <span className='skill-text'>Illustrations</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon web-design-icon'></span>
            <span className='skill-text'>Web Design</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon html-icon'></span>
            <span className='skill-text'>HTML</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon css-icon'></span>
            <span className='skill-text'>CSS</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon scss-icon'></span>
            <span className='skill-text'>SCSS</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon js-icon'></span>
            <span className='skill-text'>JavaScript</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon bootstrap-icon'></span>
            <span className='skill-text'>Bootstrap</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon react-icon'></span>
            <span className='skill-text'>React</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon nextjs-icon'></span>
            <span className='skill-text'>Next.JS</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon jquery-icon'></span>
            <span className='skill-text'>jQueryp</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon net-icon'></span>
            <span className='skill-text'>. Net</span>
          </li>
          <li className='skill-item'>
            <span className='skills-icon git-icon'></span>
            <span className='skill-text'>Git</span>
          </li>
        </ul>
      </section>

      <section className='about-roles'>
        <article>
          <h2>Current Role</h2>

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

          <div className='role-container'>
            <p className='job-title'>Technical Skills</p>

            <div className='role-ul-container'>
              <div className="role-ul-contents">
                <div className="vertical-line"></div>              
                <ul>
                  <li>Front-End Development: HTML, CSS, SCSS, JavaScript, jQuery, React, .NET, Git, command line.</li>
                  <li>UI / UX: Wireframes, user journeys, interface design, usability testing, accessibility compliance.</li>
                  <li>Design & Graphics: Adobe Suite, iconography, typography, image editing, social & marketing assets.</li>
                  <li>Website Management: WordPress development, content updates, site optimisation.</li>
                  <li>Collaboration: Worked with sales, marketing teams to deliver business-aligned solutions.</li>
                </ul>
              </div> 
            </div>
          </div>

          <div className='role-container'>
            <p className='job-title'>Projects & Platform</p>

            <div className='role-ul-container'>
              <div className="role-ul-contents">
                <div className="vertical-line"></div>              
                <ul>
                  <li>Full website development: JobDNA (React, Next.js, TypeScript), TheBIGJobsite, Disrupted Cloud, Niche Sites.</li>
                  <li>Marketing assets: Brochures, social graphics, email designs, promotional materials.</li>
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
