import React from 'react';
import data from "/libs/case-studies.json";
import Link from 'next/link';
import Image from 'next/image';

import NewCaseLayout from '/app/Components/NewCaseLayout';
import AmendLayout from '/app/Components/AmendLayout';
import CaseNotFound from '/app/Components/CaseNotFound';

export const metadata = {
  title: "EJ : Case Studies",
  description: "Ellie J case studies and projects she has worked on",
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
      
      <nav className='cs-next-prev-container'>
        {randomCase.map((item) => {
          return (
            <div key={item.id} className='random-case-card'>
              <div className='img-container'>
                <Image
                  src={item.mainImage.url}
                  alt={item.mainImage.altTitle}
                  width={200}
                  height={100}
                />
              </div>

              <h3>{item.mainTitle} {item.mainTitleHighlight}</h3>
              <Link href={`/work/${item.slug}`} className='btn'>View Case Study</Link>
            </div>
          );
        })}
      </nav>
    </>
  )
}

export default CaseStudyPage
