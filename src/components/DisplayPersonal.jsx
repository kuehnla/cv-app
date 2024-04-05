import { useState } from 'react';
import emailLogo from '../assets/mail-outline.svg'
import phoneLogo from '../assets/call-outline.svg'
import linkedInLogo from '../assets/logo-linkedin.svg'
import '../styles/App.css'

export default function Display (props) {
  return (
    <div className="cv-personal">
      <h3 id="fullName">{props.fullName}</h3>
      <div className="cv-contact">
        <div className="email">
          <Email email={props.email} />
        </div>
        <div className="phone">
          <Phone phone={props.phone} />
        </div>
        <div className="linkedIn">
          <LinkedIn linkedIn={props.linkedIn} />
        </div>
      </div>
    </div>
  )
}

function Email ({email}) {
  return email != "" ? (
    <>
      <img src={emailLogo} />
      <p id="email">{email}</p>
    </>
  ) : null;
}

function Phone ({phone}) {
  return phone != "" ? (
    <>
      <img src={phoneLogo} />
      <p id="phone">{phone}</p>
    </>
  ) : null;
}

function LinkedIn ({linkedIn}) {
  return linkedIn != "" ? (
    <>
      <img src={linkedInLogo} />
      <p id="phone">{linkedIn}</p>
    </>
  ) : null;
}