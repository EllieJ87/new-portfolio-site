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

          <div className='overview-header'>
            {info.topSummary?.length > 0 && (
              <div className='overview-text'>
                {info.topSummary?.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            )}

            {info.topImages?.length > 0 && (
              <>
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
              </>
            )}
            </div>

            <div className='overview-footer'>
              <h3>{info.subTitle}</h3>
              {info.subSummary?.length > 0 && (
                <ul className='sub-summary'>
                  {info.subSummary?.map((list, index) => (
                    <li key={index}>
                      <p>{list.title}</p>
                      {list.subImage?.map((img, index) => (
                        <div key={index} className='img-container'>
                          <Image
                            src={img.url}
                            alt={img.altTitle}
                            width={img.width}
                            height={img.height}
                          />
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
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
            
            {info.additionalImages?.length > 0 && (
              <ul className='additional-images'>
                  {info.additionalImages?.map((info, index) => (
                    <li key={index}>
                      <p>{info.title}</p>
                      {info.subImage?.map((img, index) => (
                        <div key={index}  className='img-container'>
                          <Image
                            src={img.url}
                            alt={img.altTitle}
                            width={img.width}
                            height={img.height}
                          />
                        </div>
                      ))}
                    </li>                    
                  ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section className='new-cs-goals'>
        <h2>Key Goals / Design Priorities</h2>

        {data.keyGoals?.length > 0 && (
          <>
            {data.keyGoals?.map((info, index) => (
              <ul key={index} className='goals-container'>
                {info.summary?.map((li, index) => (
                  <li key={index}>
                    <p>{li.title}</p>
                    {li.images?.map((img, index) => (
                      <div key={index} className='img-container'>
                        <Image
                          src={img.url}
                          alt={img.altTitle}
                          width={img.width}
                          height={img.height}
                        />
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            ))}
          </>
        )}
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
