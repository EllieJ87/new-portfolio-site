import React from 'react'
import Image from 'next/image'


const NewCaseLayout = ({ data }) => {
  return (
    <div className='db-container new-cs-container'>

      <section className='new-cs-header'>
        <h1>{data.CaseStudyTitle}</h1>
        
        {data.CaseStudyImg?.map((img, index) => (
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

      <section className='new-cs-summary'>
        <h2>Summary</h2>

        {data.Summary?.length > 0 && (
          <div className='sumary-text'>
            {data.Summary?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        )}        

      </section>

      <section className='new-cs-overview'>
        <h2>Project Overview</h2>
        
        {data.projectOverview?.map((info, index) => (
          <article key={index} className='overview-container'> 

            {info.topSummary?.length > 0 && (
              <div className='overview-text'>
                {info.topSummary?.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            )}

            {info.topImages?.length > 0 && (
              <div className='overview-images'>
                {info.topImages?.map((img, index) => (
                  <div key={index} className='img-container'>
                    <Image
                      src={img.url}
                      alt={img.altTitle}
                      width={img.width}
                      height={img.height}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className='overview-footer'>
              <h3>{info.subTitle}</h3>
              
              {info.subSummary?.length > 0 && (
                <ul>
                  {info.subSummary?.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul>
              )}

              {info.subImages?.length > 0 && (
                <div className='additional-imgs'>
                  {info.subImages?.map((img, index) => (
                    <div key={index} className='img-container'>
                      <Image
                        src={img.url}
                        alt={img.altTitle}
                        width={img.width}
                        height={img.height}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className='new-cs-colours'>
        <h2>Colour Palette</h2>

        {data.colours?.length > 0 && (
          <ul>
            {data.colours?.map((col, index) => (
              <li key={index}>
                <div style={{ backgroundColor: col }} className='colours-dot'></div>
                <p>{col}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className='new-cs-role'>
        <h2>My Role & Tech Stack</h2>
        
        {data.roleTech?.map((info, index) => (
          <article key={index} className='role-container'>
            <p>Role: {info.role}</p>

            <div className='role-reponsibility'>
              <p>Responsibilities</p>

              {info.responsibilities?.length > 0 && (
                <ul>
                  {info.responsibilities?.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul>
              )}
            </div>

            {info.images?.length > 0 && (
              <div className='role-tech-imgs'>
                <h3>Tech Used</h3>

                <div className='role-images'>
                  {info.images?.map((img, index) => (
                    <div key={index} className='img-container'>
                      <Image
                        src={img.url}
                        alt={img.altTitle}
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>

              </div>
            )}
          </article>
        ))}
      </section>

      <section className='new-cs-goals'>
        <h2>Key Goals / Design Priorities</h2>
        
        {data.keyGoals?.map((info, index) => (
          <article key={index} className='goals-container'>

            {info.summary?.length > 0 && (
              <ul className='goals-text'>
                {info.summary?.map((li, index) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
            )}

            {info.images?.length > 0 && (
              <div className='goal-imgs-container'>
                {info.images?.map((img, index) => (
                  <div key={index} className='img-container'>
                    <Image
                      src={img.url}
                      alt={img.altTitle}
                      width={img.width}
                      height={img.height}
                    />
                  </div>
                ))}                
              </div>
            )}
          </article>
        ))}
      </section>

      <section className='new-cs-highlights'>
        <h2>Core Features / Highlights</h2>

        {data.highlights?.length > 0 && (
          <ul className='highlights-list'>
            {data.highlights?.map((li, index) => (
              <li key={index}>
                <span className='icon-highlights'></span>
                <p>{li}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className='new-cs-reflection'>
        <h2>Reflection</h2>

        <div className='reflection-text'>
          {data.Reflection?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className='reflection-imgs'>
          {data.ReflectionImgs?.map((img, index) => (
            <div key={index} className='img-container'>
              <Image
                src={img.url}
                alt={img.altTitle}
                width={img.width}
                height={img.height}
              />
            </div>
          ))}

        </div>        

      </section>
    </div>
  )
}

export default NewCaseLayout
