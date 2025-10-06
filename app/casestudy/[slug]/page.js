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

        <div className={`cs-next-prev-container ${prev && next ? "both" : next ? "only-next" : "only--prev"}`}>
          {prev && 
            <Link href={`/casestudy/${prev.slug}`} className='link-prev'>
              <div className='img-container'>
                <Image
                  src={prev.CaseStudyImg[1].url}
                  alt={prev.CaseStudyImg[1].altTitle}
                  width={prev.CaseStudyImg[1].width}
                  height={prev.CaseStudyImg[1].height}
                />
              </div>              
              <p>{prev.CaseStudyTitle}</p>
              <span className='icon-arrow prev-arrow'></span>   
            </Link>
          }

          {next && 
            <Link href={`/casestudy/${next.slug}`} className=' link-next'>
              <div className='img-container'>
                <Image
                  src={next.CaseStudyImg[1].url}
                  alt={next.CaseStudyImg[1].altTitle}
                  width={next.CaseStudyImg[1].width}
                  height={next.CaseStudyImg[1].height}
                />
              </div>              
              <p>{next.CaseStudyTitle}</p>
              <span className='icon-arrow next-arrow'></span>              
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
         
        <div className={`cs-next-prev-container ${prev && next ? "both" : next ? "only-next" : "only--prev"}`}>
          {prev && 
            <Link href={`/casestudy/${prev.slug}`} className=' link-prev'>
              <div className='img-container'>
                <Image
                  src={prev.CaseStudyImg[0].url}
                  alt={prev.CaseStudyImg[0].altTitle}
                  width={prev.CaseStudyImg[0].width}
                  height={prev.CaseStudyImg[0].height}
                />
              </div>
              <p>{prev.CaseStudyTitle}</p>
              <span className='icon-arrow prev-arrow'></span>              
            </Link>
          }

          {next && 
            <Link href={`/casestudy/${next.slug}`} className=' link-next'>
              <div className='img-container'>
                <Image
                  src={next.CaseStudyImg[0].url}
                  alt={next.CaseStudyImg[0].altTitle}
                  width={next.CaseStudyImg[0].width}
                  height={next.CaseStudyImg[0].height}
                />
              </div>
              <p>{next.CaseStudyTitle}</p>
              <span className='icon-arrow next-arrow'></span>              
            </Link>
          }
        </div>    
      </>
    )
  }
}

export default CaseStudyPage
