import React from 'react'
import StudentCard from './StudentCard'

function StudentList({ studentList }) {
  return (
    <div className='student-list'>
        <h1>All Students List</h1>
        {/* map through the studentList  */}
        {/* <StudentCard studentInfo={studentInfo} /> */}
    </div>
  )
}

export default StudentList
