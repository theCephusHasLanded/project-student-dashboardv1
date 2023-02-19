import React from 'react'

function CohortClassList({ displayAllStudents }) {
  return (
    <div className='cohort-list'>
      <aside>
        <h2>Choose a class by start date</h2>
        {/* map through cohort data */}
        <h4 onClick={displayAllStudents}>All Students</h4>
        <hr></hr>
        <h4>Winter 2026</h4>
        <hr></hr>
        <h4>Fall 2026</h4>
        <hr></hr>
        <h4>Summer 2026</h4>
        <hr></hr>
        <h4>Spring 2026</h4>
        <hr></hr>
        <h4>Winter 2025</h4>
        <hr></hr>
        <h4>Fall 2025</h4>
        <hr></hr>
        <h4>Summer 2025</h4>
        <hr></hr>
      </aside>
    </div>
  )
}

export default CohortClassList
