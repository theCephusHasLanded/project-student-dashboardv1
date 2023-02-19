import React from 'react'
import CohortClassList from './Components/CohortClassList';
import StudentList from './Components/StudentList';
import data from './data/data.json'
import { useState } from 'react'

//const cohortStudents = []


function App() {
  const [studentList, setStudentList] = useState([])
  
  // const oneStudent = [
  //   preferredName: "preferredName + surname",
  //   email: "username",
  //   birthdate: "dob",
  // ]

  function displayAllStudents() {
 
    setStudentList(studentList => [...studentList, data])
  }
  console.log(studentList)
  
  return (
    <div className='App'>
      <header>
      <h1>Student Dashboard</h1>
      </header>
      <StudentList studentList={studentList} />
      <CohortClassList displayAllStudents={displayAllStudents} />
    </div>
  );
}


export default App;
