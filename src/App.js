import React from 'react'
import CohortClassList from './Components/CohortClassList';
import StudentList from './Components/StudentList';
import data from './data/data.json'
import { useState } from 'react'



function App() {
  const [studentList, setStudentList] = useState([])

   function displayAllStudents() {
   setStudentList(studentList => [...data])
  }

  function sortCohort(cohortCode) {
    setStudentList(data.filter(student => student.cohort.cohortCode === cohortCode))
  }

  
  return (
    <div className='App'>
      <header><h1>Student Dashboard</h1></header>
       <CohortClassList displayAllStudents={displayAllStudents} sortCohort={sortCohort}/>
       <StudentList studentList={studentList} />
    </div>
  );
}


export default App;
