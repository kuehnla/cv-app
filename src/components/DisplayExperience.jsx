import { useState } from 'react';

export default function DisplayExperience(props) {
  return (
    <div className="cv-experience">
      <p>{props.company}</p>
      <p>{props.position}</p>
      <p>{props.expStartDate}</p>
      <p>{props.expEndDate}</p>
      <p>{props.expLocation}</p>
      <p>{props.expDesc}</p>
    </div>
  )
}