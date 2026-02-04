import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from './BackButton'
import ScrollReveal from '../Components/ScrollReveal'

const AmendLayout = ({ data }) => {

  return (

    <main className={`works-container ${data.ccsClass}`}>
      <BackButton />
           
      <section className='works-header' >
        <h1>
          <span className='main-text-col'>{data.mainTitle}</span> <span className='coral-text-col'>{data.mainTitleHighlight}</span>           
        </h1>

        <div className='img-container'>
          <Image
            priority
            src={data.mainImage.url}
            alt={data.mainImage.altTitle}
            width={data.mainImage.width}
            height={data.mainImage.height}
          />
        </div>

        <ul className='sub-info'>
          <li>
            <p className='sub-title'>Role</p>
            <p className='sub-text'>{data.role}</p>
          </li>
          <li>
            <p className='sub-title'>Expertise</p>
            <p className='sub-text'>{data.expertise}</p>
          </li>
          <li>
            <p className='sub-title'>Tools</p>
            <p className='sub-text'>{data.tools}</p>
          </li>
          <li>
            <p className='sub-title'>Time Line</p>
            <p className='sub-text'>{data.timeLine}</p>
          </li>
        </ul>
      </section>

      <ScrollReveal 
        as='section'
        className='works-overview'
      >
        <h2>{data.summary.title}</h2>
        <p className='summary-overview'>{data.summary.mainSummary}</p>

        {data.summary.overviewPoints?.length > 0 && (
          <div className='overview-info'>
            {data.summary.overviewPoints.map((point) => (
              <div key={point.id} className='overview-point'>
                <h3>{point.pointTitle}</h3>
                <p>{point.pointPara}</p>
              </div>
            ))}
          </div>
        )}

        <div className='overview-images'>
          {data.showCaseImages?.map((img, idx) => (
            <div key={idx} className={`img-container ${img.ccsClass}`}>
              <Image
                priority
                src={img.url}
                alt={img.altTitle}
                width={img.width}
                height={img.height}
              />
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal 
        as='section'
        className='works-enhance'
      >
        <h2>{data.evaluateEnhance.title}</h2>
        <p>{data.evaluateEnhance.evaluateEnhanceSummary}</p>

        <div className='enhance-images'>
          {data.evaluateEnhance.evaluateEnhanceImages?.map((img, idx) => (
            <div key={idx} className='img-container'>
              <Image
                priority
                src={img.url}
                alt={img.altTitle}
                width={img.width}
                height={img.height}
              />
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal 
        as='section'
        className='works-improvements'
      >
        <h2>{data.improvements.title}</h2>
        <p>{data.improvements.mainSummary}</p>
        
        {data.improvements.points?.length > 0 && (
          <ul className='improvements-points'>
            {data.improvements.points.map((point) => (
              <li key={point.id}>
                <h3>{point.sectionTitle}</h3>
                <p>{point.sectionPara}</p>
              </li>
            ))}
          </ul>
        )}
      </ScrollReveal>

      <ScrollReveal 
        as='section'
        className='works-wireframe'
      >
        <h2>{data.wireframe.title}</h2>
        <div className='img-container'>
          <Image
            priority
            src={data.wireframe.wireframeImage.url}
            alt={data.wireframe.wireframeImage.altTitle}
            width={data.wireframe.wireframeImage.width}
            height={data.wireframe.wireframeImage.height}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal 
        as='section'
        className='works-outcome'
      >
        <h2>{data.outcome.title}</h2>
        <p>{data.outcome.outcomeSummary}</p>

        <Link href={data.outcome.outcomeLink} className='live-link' target='_blank'>Live Preview</Link>
      </ScrollReveal>

    </main>
  )
}

export default AmendLayout
