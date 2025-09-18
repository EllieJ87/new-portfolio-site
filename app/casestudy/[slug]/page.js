import React from 'react';
import data from "@/libs/case-studies.json";
import Link from 'next/link';
import Image from 'next/image';

import NewCaseLayout from '@/app/Components/NewCaseLayout';
import AmendLayout from '@/app/Components/AmendLayout';
import NotFound from '@/app/Components/NotFound';

export const dynamicParams = false;

export async function generateStaticParams(params) {
  const slugsAmends = data.caseStudiesAmends.map(item => ({ slug: item.slug }));
  const slugsNew = data.newCaseStudies.map(item => ({ slug: item.slug }));
  return [...slugsAmends, ...slugsNew];  
}

const CaseStudyPage = async ({ params }) => {

  const { slug } = await params;

  const amendIndex = data.caseStudiesAmends.findIndex(item => item.slug === slug);
  const newIndex = data.newCaseStudies.findIndex(item => item.slug === slug);

  const amend = amendIndex !== -1 ? data.caseStudiesAmends[amendIndex] : null;
  const newCase = newIndex !== -1 ? data.newCaseStudies[newIndex] : null;

  if (!amend && !newCase) {
    return <NotFound />;
  }

  if (amend) {
    const prev = amendIndex > 0 ? data.caseStudiesAmends[amendIndex - 1] : null;
    const next = amendIndex < data.caseStudiesAmends.length - 1 ? data.caseStudiesAmends[amendIndex + 1] : null
    return (
      <>
        <AmendLayout data={amend} />

        <div style={{ marginTop: "2rem"}}>
          {prev && 
            <Link href={`/casestudy/${prev.slug}`}>
              <Image
                src={prev.CaseStudyImg[1].url}
                alt={prev.CaseStudyImg[1].altTitle}
                width={150}
                height={100}
              />
              Previous : {prev.CaseStudyTitle}
            </Link>
          }

          {next && 
            <Link href={`/casestudy/${next.slug}`} style={{marginLeft: "1rem"}}>
              <Image
                src={next.CaseStudyImg[1].url}
                alt={next.CaseStudyImg[1].altTitle}
                width={150}
                height={100}
              />
              next : {next.CaseStudyTitle}
            </Link>
          }
        </div>
      </>
    )
  }

  if (newCase) {
    const prev = newIndex > 0 ? data.newCaseStudies[newIndex - 1] : null;
    const next = newIndex < data.newCaseStudies.length - 1 ? data.newCaseStudies[newIndex + 1] : null

    return (
      <>
        <NewCaseLayout data={newCase} />
         
        <div style={{ marginTop: "2rem"}}>
          {prev && 
            <Link href={`/casestudy/${prev.slug}`}>
              <Image
                src={prev.CaseStudyImg[0].url}
                alt={prev.CaseStudyImg[0].altTitle}
                width={150}
                height={100}
              />
              Previous : {prev.CaseStudyTitle}
            </Link>
          }

          {next && 
            <Link href={`/casestudy/${next.slug}`} style={{marginLeft: "1rem"}}>
              <Image
                src={next.CaseStudyImg[0].url}
                alt={next.CaseStudyImg[0].altTitle}
                width={150}
                height={100}
              />
              next : {next.CaseStudyTitle}
            </Link>
          }
        </div>    
      </>
    )
  }
}

export default CaseStudyPage
