import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ studentList }) {
  return (
    <div className="student-list">
      <main>
        <h2>All Students</h2>
        {/* <p>Total Students {studentList.length}</p> */}
        <ul>
          {
          studentList.map((student, index) => {
            console.log(student)
            return (
              <li>
                <StudentCard student={student} key={index} />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default StudentList;
