import React from 'react'
import Image from 'next/image'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const CustomHandle = () => (
  <div className="handleWrapper">
    <div className="handleLine" />
    <div className="handleCircle" />
  </div>
);

const AmendLayout = ({ data }) => {
   const images = data.CaseStudyImg;
  if (!images || images.length < 2) return null;
  return (
    <div className='db-container amends-container'>
      
      <section className='amend-header'>
        <h1>{data.CaseStudyTitle}</h1>
        
        <div style={{ width: images[0].imgWidth, height: images[0].imgHeight }}>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={images[0].url} alt={images[0].altTitle} />}
            itemTwo={<ReactCompareSliderImage src={images[1].url} alt={images[1].altTitle} />}
            handle={<CustomHandle />}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>

      <section className='amend-summary'>
        <h2>Summary</h2>

        {data.Summary?.length > 0 && (
          <div className='summary-text'>
            {data.Summary?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        )}
      </section>

      <section className='amend-issues'>
        <h2>Current Issues</h2>

        {data.CurrentIssues?.length > 0 && (
          <div className='issues-text'>
            {data.CurrentIssues?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        )}
        
        {data.CurrentIssuesImgs?.map((img, index) => (
          <div key={index} className='img-container'>
            <Image
              priority
              src={img.url}
              alt={img.altTitle}
              width={250}
              height={150}
            />
          </div>
        ))}
      </section>

      <section className='amend-goals'>
        <h2>Goal</h2>

        {data.GoalPoints?.length > 0 && (
          <ul>
            {data.GoalPoints?.map((list, index) => (
              <li key={index}>
                <Image
                  priority
                  src='/images/site-icons/cs-goal.svg'
                  alt=''
                  width={50}
                  height={50}
                />
                <p>{list}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className='amend-process'>
        <h2>Process</h2>
        
        {data.process?.map((info, index) => (
          <article key={index} className='process-container'>
            
            {info.topSummary?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            
            {info.steps?.length > 0 && (
              <ul className='process-list'>
                
                {info.steps?.map((list, index) => (
                  <li key={index}>
                    <h3>{list.sectionTitle}</h3>
                    {list.sectionPara?.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </li>
                ))}
              </ul>
            )}
            
            {info.images?.map((img, index) => (
              <div key={index} className='img-container'>
                <Image
                  src={img.url}
                  alt={img.altTitle}
                  width={250}
                  height={150}
                />
              </div>
            ))}
          </article>
        ))}
      </section>

      <section className='amend-solution'>        
        <h2>The Solution</h2>
        
        {data.solution?.map((card, index) => (
          <ul key={index} className='solution-list'>
            {card.steps?.map((info, index) => (
              <li key={index}>
                <Image
                  priority
                  src='/images/site-icons/cs-solution.svg'
                  alt='Picture of myself'
                  width={30}
                  height={30}
                />
                <h3>{info.sectionTitle}</h3>
                <p>{info.sectionPara}</p>
              </li>
            ))}
          </ul>
        ))}
      </section>

      <section className='amend-reflection'>
        <h2>Reflection</h2>
        
        {data.Reflection?.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        
        {data.ReflectionImgs?.map((img, index) => (
          <div key={index} className='img-container'>
            <Image
              key={index}
              src={img.url}
              alt={img.altTitle}
              width={250}
              height={150}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default AmendLayout
