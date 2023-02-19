import React from 'react'
import CohortClassList from './Components/CohortClassList';
import StudentList from './Components/StudentList';
import data from './data/data.json'
import { useState } from 'react'

//const cohortStudents = []
  // const [studentCard, setStudentCard] = useState([])


function App() {
  // (console.log("lkhn"))
  const [studentList, setStudentList] = useState([])

   function displayAllStudents() {
   setStudentList(studentList => [...studentList, ...data])
  }

  
  return (
    <div className='App'>
      <header>
      <h1>Student Dashboard</h1>
      </header>
       <CohortClassList displayAllStudents={displayAllStudents} />
       <StudentList studentList={studentList} />
     
    </div>
  );
}


export default App;
