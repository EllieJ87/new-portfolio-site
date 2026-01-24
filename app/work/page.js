import React from 'react'
import data from '/libs/case-study-list.json'

import CaseStudyList from '../Components/CaseStudyList'

export const metadata = {
  title: "EJ : Case Studies",
  description: "Ellie J case studies and projects she has worked on",
};

const CaseStudy = () => {
    const sections = [
    { title: 'Case Studies', items: data.caseStudiesAmends, linkLabel: 'View Case Study' },
    { title: 'New Projects', items: data.newProjectsCaseStudies, linkLabel: 'View Case Study' },
    { title: 'Mini Projects', items: data.miniProjects, showProjectLinks: true },
  ]

  return (    
    <section className='home-case-studies case-study-page'>
      <h2>My Featured Works</h2>
      <CaseStudyList sections={sections} /> 
    </section>
  )
}

export default CaseStudy
