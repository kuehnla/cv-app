import { useState } from 'react';
import '../styles/App.css'
export default function DisplayEducation({ school, degree, eduStartDate, eduEndDate, edus }) {
  return (
    <div className="cv-education">
      <h2 id="eduHeader">Education</h2>
      {edus.map((edu) => {
        return (
          <div key={edu.id} className="job">
            <p id="eduSchool">{edu.school}</p>
            <p id="eduDegree">{edu.degree}</p>
            <p id="eduStart">{edu.eduStartDate} {eduStartDate ? "-" : null}</p> &nbsp;
            <p id="eduEnd">{edu.eduEndDate}</p>
          </div>
        )
      })}
      <div className="eduPreview">
        <p>{school}</p>
        <p>{degree}</p>
        <div id="eduDuration">
          <p>{eduStartDate} {eduStartDate ? "-" : null}</p> &nbsp;
          <p>{eduEndDate}</p>
        </div>
      </div>
    </div>
  )
}