import React from 'react'



function CohortClassList({ displayAllStudents, sortCohort }) {
  return (
  
    
    <div className='cohort-list'>
      <aside>
        <h2 className='choose'>Choose a class by start date</h2>
        {/* map through cohort data */}
        <h4 onClick={displayAllStudents}>All Students</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Winter2026")}>Winter 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Fall2026")}>Fall 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Summer2026")}>Summer 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Spring2026")}>Spring 2026</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Winter2025")}>Winter 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Fall2025")}>Fall 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Summer2025")}>Summer 2025</h4>
        <hr></hr>
        <h4 onClick={() => sortCohort("Spring2025")}>Spring 2025</h4>
        <hr></hr>
      </aside>
    </div>
  )
}

export default CohortClassList
