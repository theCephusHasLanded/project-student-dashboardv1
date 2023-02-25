import React from "react";
import { useState } from "react";
//import ya state cephus
function StudentCard({ student }) {
  const [toggleMore, setToggleMore] = useState(false);
  function showMore() {
    setToggleMore(!toggleMore);
  }

  // lets replace dem images
  const BASE_URL= "https://robohash.org/"
  const roboNum = Math.floor(Math.random() * 1000)
  const srcPhoto = `${BASE_URL}${roboNum}`
  const cwScore = ((student.codewars.current.total)/(student.codewars.goal.total/100)).toFixed(0)
  //change the state for toggleMore and negate it  -- setting changes state

  return (
    <div className="student-card">
      <img className="img" src={srcPhoto} alt={student.username} />
      <h5 className="track">{cwScore > 65 ? "On Track to Graduate" : "Not On Track to Graduate"}</h5>
      {/* <h2>{on track/off track}</h2> */}
      <h2>
        <strong>
          {student.names.preferredName}{" "}
          {student.names.middleName[0].toUpperCase()}. {student.names.surname}
        </strong>
      </h2>
      <p>{student.username}</p>
      <p className="birthday"><span>Birthday:</span> {student.dob}</p>
      <br></br>
      <p onClick={() => showMore()}>{toggleMore ? "Show Less..." : "Show More..."}</p>
      {toggleMore ? (
        <div className="info">
          <div className="codewars">
            <h4><strong>Codewars</strong></h4>
            <p className="current">Current Total: {student.codewars.current.total}</p>
            <p className="last">Last Week: {student.codewars.current.lastWeek}</p>
            <p className="goal">Goal: {student.codewars.goal.total}</p>
            <h6>
              {/* ({cwScore >= 100 ? style={green} }) */}
            </h6>
            <p>
              Percent of Goal Achieved:
               {Math.round(
                (student.codewars.current.total / student.codewars.goal.total) *
                  100
              )}
              %
            </p>
          </div>

          <div className="scores">
          <h4><strong>Scores</strong></h4>
            <p>Assignments: {student.cohort.scores.assignments * 100} %</p>
            <p>Projects: {student.cohort.scores.projects * 100} %</p>
            <p>Assessments: {student.cohort.scores.assessments * 100} %</p>
            
          </div>

          <div className="certifications">
          <h4><strong>Certifications</strong></h4>

            <p>Resume: {student.certifications.resume ? " ✔" : " ✗" }</p>
            <p>LinkedIn: {student.certifications.linkedin ? " ✔" : " ✗"}</p>
            <p>Mock Interview: {student.certifications.mockInterview ? " ✔" : " ✗"}</p>
            <p>Github: {student.certifications.github ? " ✔" : " ✗"}</p>
          </div>
        </div>
      ) : null }
    </div>
  );
}

//* add infinite scroll ?? PAGINATION ----> nah just basic CSS float
//* get into habit of defining each level of functionality ----> absolutely Cephus.

export default StudentCard;
