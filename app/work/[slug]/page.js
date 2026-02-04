import React from 'react';
import data from "/libs/case-studies.json";
import Link from 'next/link';
import Image from 'next/image';

import NewCaseLayout from '/app/Components/NewCaseLayout';
import AmendLayout from '/app/Components/AmendLayout';
import CaseNotFound from '/app/Components/CaseNotFound';

export const metadata = {
  title: "Ellie's Work",
  description: "Ellie' works and projects she has worked on",
};

const allCaseStudies = [
  ...data.caseStudiesAmends.map(cs => ({ ...cs, type: "amend" })),
  ...data.newCaseStudies.map(cs => ({ ...cs, type: "new" })),
];

const CaseStudyPage = async ({ params }) => {

  const { slug } = await params;

  const currentCase = allCaseStudies.find(item => item.slug === slug);

  if (!currentCase) {
    return <CaseNotFound />;
  }

  const randomCase = allCaseStudies
  .filter(item => item.slug !== slug)
  .sort(() => 0.5 - Math.random())
  .slice(0, 2);

  return (
    <>
      {currentCase.type == "amend" ? (
        <AmendLayout data={currentCase} />
      ) : (
        <NewCaseLayout data={currentCase} />
      )}
      
      <nav className='other-works'>
        <h2>More Works</h2>
        {randomCase.map((item) => {
          return (
            <Link key={item.id} href={`/work/${item.slug}`} className='work-card'>
              <div className='img-container'>
                <Image
                  src={item.showImage.url}
                  alt={item.showImage.altTitle}
                  width={item.showImage.width}
                  height={item.showImage.height}
                />
              </div>
              <h3>
                <span className='main-text-col'>{item.mainTitle}</span> <span className='coral-text-col'>{item.mainTitleHighlight}</span>
              </h3>
              <p className='link-arrow'>View Case Study</p>
            </Link>
          );
        })}
      </nav>
    </>
  )
}

export default CaseStudyPage
