import React from 'react'

function StudentCard({ studentInfo}) {
  return (
    <div className="student-card">
      <h6>{studentInfo.preferredName}></h6>
      studentInfo.email
      studentInfo.dob
    </div>
  )
}

export default StudentCard


