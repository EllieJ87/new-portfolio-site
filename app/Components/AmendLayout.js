import React from 'react'
import Image from 'next/image'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const CustomHandle = () => (
  <div className="slider-wrapper">
    <div className="wrapper-line" />
    <div className="wrapper-handle" />
  </div>
);

const AmendLayout = ({ data }) => {
   const images = data.CaseStudyImg;
  if (!images || images.length < 2) return null;
  return (
    <main className='db-container amends-container'>
           
      <section className='amend-header'>
        <h1>Case Study: {data.CaseStudyTitle}</h1>
        
        <div style={{ width: images[0].imgWidth, height: images[0].imgHeight }} className='image-slider'>
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
              width={img.width}
              height={img.height}
            />
          </div>
        ))}
      </section>

      <section className='amend-goals'>
        <h2>Goal</h2>

        {data.GoalPoints?.length > 0 && (
          <ul className='goals-list'>
            {data.GoalPoints?.map((list, index) => (
              <li key={index}>
                <span className='icon-goals'></span>
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
            <h3>{info.title}</h3>

            {info.topSummary?.length > 0 && (
              <div className='process-summary'>
                {info.topSummary?.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            )}
            
            {info.steps?.length > 0 && (
              <ul className='process-list'>                
                {info.steps?.map((list, index) => (
                  <li key={index}>
                    <h4>{list.sectionTitle}</h4>
                    
                    {list.images?.map((img, index) => (
                      <div key={index} className='img-container'>

                        {img.type === "video" ? (
                          <video
                            width={img.width}
                            height={img.height}
                            muted
                            loop
                            autoPlay
                            playsInline
                            className='video-player'
                          >
                            <source src={img.url} type='video/mp4' />
                          </video>
                        ) : (
                          <Image
                            src={img.url}
                            alt={img.altTitle}
                            width={img.width}
                            height={img.height}
                          />
                        )}
                      </div>
                    ))}

                    <div className='process-text'>
                      {list.sectionPara?.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section className='amend-solution'>        
        <h2>The Solution</h2>
        
        {data.solution?.map((card, index) => (
          <ul key={index} className='solution-list'>
            {card.steps?.map((info, index) => (
              <li key={index}>
                <span className='icon-solution'></span>
                <h3>{info.sectionTitle}</h3>
                <p>{info.sectionPara}</p>
              </li>
            ))}
          </ul>
        ))}
      </section>

      <section className='amend-reflection'>
        <h2>Reflection</h2>
        
        {data.Reflection?.length > 0 && (
          <div className='reflection-text'>
            {data.Reflection?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        )}

        {data.ReflectionImgs?.length > 0 && (
          <div className='reflection-imgs'>
            {data.ReflectionImgs?.map((img, index) => (
              <div key={index} className='img-container'>
                <Image
                  key={index}
                  src={img.url}
                  alt={img.altTitle}
                  width={img.width}
                  height={img.height}
                />
              </div>
            ))}
          </div>
        )}        
      </section>
    </main>
  )
}

export default AmendLayout
