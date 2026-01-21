import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BackButton from './BackButton'

const NewCaseLayout = ({ data }) => {
  return (
    <div className='db-container new-cs-container'>
      <BackButton />

      <section className='amend-header'>
        <h1>{data.mainTitle} {data.mainTitleHighlight}</h1>

        <div className='img-container'>
          <Image
            priority
            src={data.mainImage.url}
            alt={data.mainImage.altTitle}
            width={data.mainImage.width}
            height={data.mainImage.height}
          />
        </div>

        <h2>Role</h2>
        <p>{data.role}</p>

        <h2>Expertise</h2>
        <p>{data.expertise}</p>

        <h2>Tools</h2>
        <p>{data.tools}</p>

        <h2>Time Line</h2>
        <p>{data.timeLine}</p>
      </section>

      <section className='amend-summary'>
        <h2>{data.summary.title}</h2>
        <p>{data.summary.mainSummary}</p>

        {data.summary.overviewPoints?.length > 0 && (
          <div className='summary-text'>
            {data.summary.overviewPoints.map((point) => (
              <div key={point.id}>
                <h3>{point.pointTitle}</h3>
                <p>{point.pointPara}</p>
              </div>
            ))}
          </div>
        )}
        
        {data.showCaseImages?.map((img, idx) => (
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
      </section>
      
      <section className='amend-summary'>
        <h2>{data.validationNextSteps.title}</h2>
        <p>{data.validationNextSteps.validationSummary}</p>

        {data.validationNextSteps.validationImages?.map((img, idx) => (
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
      </section>
      
      <section className='amend-summary'>
        <h2>{data.improvements.title}</h2>
        <p>{data.improvements.mainSummary}</p>
        
        {data.improvements.points?.length > 0 && (
          <div className='summary-text'>
            {data.improvements.points.map((point) => (
              <div key={point.id}>
                <h3>{point.sectionTitle}</h3>
                <p>{point.sectionPara}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className='amend-summary'>
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
      </section>
      
      <section className='amend-summary'>
        <h2>{data.outcome.title}</h2>
        <p>{data.outcome.outcomeSummary}</p>

        <Link href={data.outcome.outcomeLink} className='link-live' target='_blank'>Live preview</Link>
      </section>

    </div>
  )
}

export default NewCaseLayout
