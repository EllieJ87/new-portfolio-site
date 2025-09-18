import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Marquee from '../Components/Marquee';

const About = () => {
  return (
    <div className='db-container'>
      <h1>About Me</h1>

      <p>
        With a strong foundation in front-end development and a creative eye for
        design, I bring digital experiences to life through clean code and
        intuitive interfaces. Front End Developer and Web Designer with hands-on
        experience designing and developing responsive websites for the ATTB
        Group. I focus on creating visually engaging, user-friendly websites
        that prioritize functionality, accessibility, and performance—always
        aligned with best practices and SEO standards.
      </p>
      <p>
        Prior to my current role, I completed a Diploma in Full Stack Software
        Development with Code Institute, where I discovered a strong drive for
        problem-solving and building seamless user experiences. This foundation
        has enabled me to write clean, maintainable, and reusable code using
        HTML, CSS, and JavaScript, and confidently review and optimize front-end
        performance.
      </p>
      <p>
        In my current position, I design visuals, graphics, and user interfaces
        while ensuring mobile responsiveness and W3C compliance. I regularly
        monitor site performance and accessibility, and I use tools like Adobe
        Creative Suite along with basic scripting to enhance functionality.
      </p>
      <p>
        Outside of work, I&apos;m a curious and creative individual with a love
        for Japanese culture, anime, and gaming. I enjoy knitting, drawing, and
        cooking, and I find inspiration in everything from beautifully designed
        interfaces to a great cup of coffee. These passions fuel my creativity
        and attention to detail in everything I build.
      </p>
      <p>
        I&apos;m excited to continue growing as a Front End Developer, bringing
        thoughtful design and clean code together to craft engaging digital
        experiences.
      </p>

      <Image
        priority
        src='/images/me-2.jpg'
        className='Jobdna-logo'
        alt='Picture of myself'
        width={794}
        height={1553}
      />
      <Image
        priority
        src='/images/me-2.jpg'
        className='Jobdna-logo'
        alt='Picture of myself'
        width={794}
        height={1553}
      />
      <Image
        priority
        src='/images/me-2.jpg'
        className='Jobdna-logo'
        alt='Picture of myself'
        width={794}
        height={1553}
      />

      <h2>Skills</h2>
      <ul>
        <li>
          <Image
            priority
            src='/images/social-icons/discord-brands.svg'
            alt='Picture of myself'
            width={30}
            height={30}
          />
        </li>
      </ul>

      <h2>Current Role</h2>

      <h3>Web Designer / Front-End Developer</h3>
      <p>ATTB Group</p>
      <p>Jul 2022 - Present</p>

      <ul>
        <li>
          Designing the visuals, graphics, and functionality of the companies
          websites to reach maximum usability
        </li>
        <li>
          Use an understanding of user interface and user experience to create
          the companies websites
        </li>
        <li>
          Create responsive websites for mobile devices in accordance with W3C
          web standards
        </li>
        <li>
          Understanding and monitoring website performance, accessibility, best
          practice and SEO
        </li>
        <li>
          Use of Adobe suite and basic coding to create and maintain scripts
        </li>
        <li>
          Review HTML, CSS and JavaScript code, ensuring code is reusable and
          identifying improvements to streamline website performance
        </li>
      </ul>

      <h2>Courses</h2>
      <h3>Front-End Developer Course</h3>
      <p>The Learning People</p>
      <p>Jan 2021 - May 2022</p>

      <h2>Past Employment</h2>

      <ul>
        <li>
          <h3>Menswear Garment Technologist</h3>
          <p>Brand Machine International</p>
          <p>Sept 2020 - Jun 2021</p>
        </li>
        <li>
          <h3>Product Developer</h3>
          <p>Fuelled Apparel</p>
          <p>Mar 2020 (1 Month)</p>
        </li>
        <li>
          <h3>Menswear Garment Technologist</h3>
          <p>Lyle & Scott</p>
          <p>Jun 2016 - Mar 2020</p>
        </li>
        <li>
          <h3>Little White Company Assistant Technologist</h3>
          <p>The White Company</p>
          <p>Jun 2014 - Jun 2016</p>
        </li>
        <li>
          <h3>Designer / Product Developer Assistant</h3>
          <p>Supremebeing Ltd</p>
          <p>Feb 2014 - Jun 2014</p>
        </li>
      </ul>

      <h2>Interests</h2>
      <h3>Languages</h3>
      <ul>
        <li>English</li>
        <li>Japanes (basic & learning)</li>
        <li>Danish</li>
      </ul>
      <h3>Hobbies</h3>
      <ul>
        <li>Travelling</li>
        <li>Knitting, Crochet & Crafting</li>
        <li>Drawing by Hand & Computer</li>
        <li>Gaming</li>
        <li>Learning new languages</li>
      </ul>

      <div className='marquee'>
        <Marquee />
      </div>
    </div>
  )
}

export default About
