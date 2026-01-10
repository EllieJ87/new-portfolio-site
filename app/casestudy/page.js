import React from 'react'
import data from '/libs/case-study-list.json'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "EJ : Case Studies",
  description: "Ellie J case studies and projects she has worked on",
};

const CaseStudyCard = ({ item, linkLabel, showProjectLinks }) => (
  <div className="case-card" key={item.id}>

    <h3>{item.CaseStudyTitle}</h3>

    <div className='cs-img-container'>
      <Image
        src={item.CaseStudyImg.url}
        alt={item.CaseStudyImg.altTitle}
        width={item.CaseStudyImg.width}
        height={item.CaseStudyImg.height}
        className='cs-img'
      />
    </div>

    {item.Techimages?.length > 0 && (
      <div className="tech-imgs">
        {item.Techimages.map((tech, idx) => (
          <Image
            key={`tech-${item.id}-${idx}`}
            src={tech.url}
            alt={tech.altTitle}
            width={20}
            height={20}
          />
        ))}
      </div>
    )}

    <p>{item.Summary}</p>

    {showProjectLinks ? (
      item.ProjectLinks?.map((link, idx) => (
        <div key={`link-${item.id}-${idx}`} className='cs-mini-links'>
          <Link href={link.githubTitle} className='link-github' target='_blank'>View GitHub</Link>
          <Link href={link.projectLink} className='link-live' target='_blank'>View Live site</Link>
        </div>
      ))
    ) : (
      <Link href={`/casestudy/${item.slug}`} className='link-arrow'>{linkLabel}</Link>
    )}
  </div>
)

const CaseStudy = () => {
    const sections = [
    { title: 'Case Studies', items: data.caseStudiesAmends, linkLabel: 'View Full Project Details' },
    { title: 'New Projects', items: data.newProjectsCaseStudies, linkLabel: 'View Case Study' },
    { title: 'Mini Projects', items: data.miniProjects, showProjectLinks: true },
  ]

  return (
    <div className='db-container case-study-list'>
      <h1 className='sr-only'>All Case Studies</h1>
      {sections.map(({ title, items, linkLabel, showProjectLinks }) => (
        <section key={title} className='cs-list-container'>
          <h2>{title}</h2>
          <div className="case-grid">
            {items.map((item) => (
              <CaseStudyCard
                key={item.id}
                item={item}
                linkLabel={linkLabel}
                showProjectLinks={showProjectLinks}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
    
  )
}

export default CaseStudy
