import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CaseStudyCard = ({ item, linkLabel, showProjectLinks }) => (
  <li className="case-card" key={item.id}>

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
      <p>&#x2022;</p>
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

    {showProjectLinks ? (
      item.ProjectLinks?.map((link, idx) => (
        <Link key={`link-${item.id}-${idx}`} href={link.projectLink} className='link-arrow' target='_blank'>View Live site</Link>
      ))
    ) : (
      <Link href={`/work/${item.slug}`} className='link-arrow'>{linkLabel}</Link>
    )}
  </li>
)

export default CaseStudyCard
