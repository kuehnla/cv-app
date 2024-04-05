import { useState } from 'react';
import '../styles/App.css'

export default function DisplayEducation(props) {
  return (
    <div className="cv-education">
      <p>{props.school}</p>
      <p>{props.degree}</p>
      <p>{props.eduStartDate}</p>
      <p>{props.eduEndDate}</p>
    </div>
  )
}