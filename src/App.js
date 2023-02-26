import React from "react";
import CohortClassList from "./Components/CohortClassList";
import StudentList from "./Components/StudentList";
import data from "./data/data.json";
import { useState } from "react";

function App() {
  const [studentList, setStudentList] = useState(data);
  const [typeCohort, setTypeCohort] = useState("All Students");

  function displayAllStudents() {
    setTypeCohort("All Students");
    setStudentList((studentList) => [...data]);
  }

  function sortCohort(cohortCode) {
    setStudentList(
      data.filter(
        (student) =>
          student.cohort.cohortCode === cohortCode.split(" ").join("")
      )
    );
    setTypeCohort(cohortCode);
  }

  // function onTrack()

  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <CohortClassList
        displayAllStudents={displayAllStudents}
        sortCohort={sortCohort}
      />
      <StudentList studentList={studentList} typeCohort={typeCohort} />
    </div>
  );
}

export default App;
