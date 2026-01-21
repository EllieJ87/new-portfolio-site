import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudyList = ({ sections }) => (
  <ul className='case-study-list'>
    {sections.map(({ title, items, linkLabel, showProjectLinks }) => (
      
      <React.Fragment key={title}>
        {items.map((item) => (
          <CaseStudyCard
            key={item.id}
            item={item}
            linkLabel={linkLabel}
            showProjectLinks={showProjectLinks}
          />
        ))}
      </React.Fragment>
    ))}
  </ul> 
)

export default CaseStudyList