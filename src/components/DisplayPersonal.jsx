import { useState } from 'react';

export default function Display (props) {
  return (
    <div className="cv-name">
      <p>{props.fullName}</p>
      <p>{props.email}</p>
    </div>
  )
}