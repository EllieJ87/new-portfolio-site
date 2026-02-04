'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '../Components/ScrollReveal'

const CaseStudyCard = ({ item, linkLabel, showProjectLinks }) => {

  const cardContent = (
    <>
      <h3>
        <span className='main-text-col'>{item.mainTitle}</span> <span className='coral-text-col'>{item.mainTitleHighlight}</span>
      </h3>
      
      <div className='img-container'>
        <Image
          src={item.mainImage.url}
          alt={item.mainImage.altTitle}
          width={item.mainImage.width}
          height={item.mainImage.height}
        />
      </div>
      
      <div className='cs-info'>
        <p>{item.role}</p>
        <p className='cs-dot'>&#x2022;</p>
        <p>{item.timeLine}</p>
      </div>
      
      {item.overviewPoints?.length > 0 && (
        <ul className='cs-description'>
          {item.overviewPoints.map((summary, idx) => (
            <li key={idx}>
              <h4>{summary.pointTitle}</h4>
              <p>{summary.sectionPara}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  const links = showProjectLinks ? item.ProjectLinks : [{ projectLink: `/work/${item.slug}` }];

    return (
      <ScrollReveal 
        as='li'
        className='case-card'
      >
      {links.map((link, idx) => (
        <Link
          key={`link-${item.id}-${idx}`}
          href={link.projectLink}
          target={showProjectLinks ? '_blank' : undefined}
          className='works-card'
        >
          {cardContent}

          <p className='link-arrow'>
            {showProjectLinks ? 'View Live site' : linkLabel}
          </p>
        </Link>
      ))}
    </ScrollReveal>
  );
}

export default CaseStudyCard
