import { useState } from 'react';
import '../styles/App.css'

export default function DisplayExperience({ company, position, expStartDate, expEndDate, expLocation, expDesc, jobs, isPreview }) {
  return (
    <div className="cv-experience">
      <h2 id="expHeader">Experience</h2>
      {jobs.map((job) => {
        return (
          <div key={job.id} className="job">
            <p id="jobCompany">{job.company}</p>
            <p id="jobPosition">{job.position}</p>
            <div id="jobDuration">
              <p id="jobStart">{job.expStartDate} -</p> &nbsp;
              <p id="jobEnd">{job.expEndDate}</p>
            </div>
            <p id="jobLoc">{job.expLocation}</p>
            <p id="jobDesc">{job.expDesc}</p>
          </div>
        )
      })}
      {isPreview ?
        <div className="jobPreview">
          <p id="jobCompany">{company}</p>
          <p id="jobPosition">{position}</p>
          <div id="jobDuration">
            <p id="jobStart">{expStartDate} {expStartDate ? "-" : null}</p> &nbsp;
            <p id="jobEnd">{expEndDate}</p>
          </div>
          <p id="jobLoc">{expLocation}</p>
          <p id="jobDesc">{expDesc}</p>
        </div>
        : null
      }
    </div>
  )
}

// function Company({company}) {

// }