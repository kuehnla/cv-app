import { useState } from 'react';
import '../styles/App.css'
export default function DisplayEducation({ school, degree, eduStartDate, eduEndDate, edus, isPreview }) {
  return (
    <div className="cv-education">
      <h2 id="eduHeader">Education</h2>
      {edus.map((edu) => {
        return (
          <div key={edu.id} className="edu">
            <p id="eduSchool">{edu.school}</p>
            <p id="eduDegree">{edu.degree}</p>
            <div id="eduDuration">
              <p id="eduStart">{edu.eduStartDate} {edu.eduStartDate ? "-" : null}</p> &nbsp;
              <p id="eduEnd">{edu.eduEndDate}</p>
            </div>
          </div>
        )
      })}
      {isPreview ?
        <div className="eduPreview">
          <p id="eduSchool">{school}</p>
          <p id="eduDegree">{degree}</p>
          <div id="eduDuration">
            <p id="eduStart">{eduStartDate} {eduStartDate ? "-" : null}</p> &nbsp;
            <p id="eduEnd">{eduEndDate}</p>
          </div>
        </div>
        : null
      }
    </div>
  )
}