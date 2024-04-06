import { useState } from 'react';
import '../styles/App.css'

export default function DisplayExperience(props) {
  return (
    <div className="cv-experience">
      <h2 id="expHeader">Experience</h2>
      {/* <p>{props.company}</p>
      <p>{props.position}</p>
      <p>{props.expStartDate}</p>
      <p>{props.expEndDate}</p>
      <p>{props.expLocation}</p>
      <p>{props.expDesc}</p> */}
      {props.jobs.map((job) => {
        return (
          <div key={job.id}>
            <p>{job.company}</p>
            <p>{job.position}</p>
            <p>{job.expStartDate}</p>
            <p>{job.expEndDate}</p>
            <p>{job.expLocation}</p>
            <p>{job.expDesc}</p>
          </div>
        )
      })}
      <p>{props.company}</p>
      <p>{props.position}</p>
      <p>{props.expStartDate}</p>
      <p>{props.expEndDate}</p>
      <p>{props.expLocation}</p>
      <p>{props.expDesc}</p>
    </div>
  )
}

// function Company({company}) {

// }