import { useState } from 'react';
import '../styles/App.css'

export default function Display (props) {
  return (
    <div className="cv-contact">
      <h3 id="fullName">{props.fullName}</h3>
      <p id="email">{props.email}</p>
      <p id="phone">{props.phone}</p>
      <p id="linkedIn">{props.linkedIn}</p>
      <p id="website">{props.website}</p>
    </div>
  )
}