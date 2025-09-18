import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CaseStudyItem = ({ item, type}) => {
  return (
    <li className='cs-list'>
      <article className='cs-card'>
        <h3>{item.CaseStudyTitle}</h3>

        <div className='card-image'>
          {item.CaseStudyImg?.map((imgs, index) => (
            <Image
              key={index}
              src={imgs.url}
              alt={imgs.altTitle}
              width={imgs.imgWidth}
              height={imgs.imgHeight}
            />
          ))}
          
          <div className='tech-images'>
            {item.Techimages?.map((techImg, index) => (
              <Image
                key={index}
                src={techImg.url}
                alt={techImg.altTitle}
                width={30}
                height={30}
              />
            ))}
          </div>
        </div>

        <div className='card-info'>
          <p>{item.Summary}</p>
          
          {type === 'mini' && item.ProjectLinks ? (
            item.ProjectLinks.map((link, index) => (
              <div key={`link-${item.id}-${index}`} className='mini-links'>
                <Link href={link.githubTitle} className='mini-link link-github'>View GitHub Code</Link>
                <Link href={link.projectLink} className='mini-link link-website'>View Live Project</Link>
              </div>
            ))
          ) : (
            <div className='cs-links'>
              <Link href={`/casestudy/${item.slug}`}>
                {type === 'amend' ? 'View Case Study' : 'View Full Project Details'}
              </Link>
            </div>
          )}
        </div>
      </article>

    </li>
  )
}

export default CaseStudyItem
