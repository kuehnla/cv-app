import { useState } from 'react';
import '../styles/App.css'

export default function Display (props) {
  return (
    <div className="cv-name">
      <p>{props.fullName}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.linkedIn}</p>
      <p>{props.website}</p>
    </div>
  )
}