import emailLogo from '../assets/mail-outline.svg'
import phoneLogo from '../assets/call-outline.svg'
import linkedInLogo from '../assets/logo-linkedin.svg'
import '../styles/App.css'

export default function DisplayPersonal (props) {
  return (
    <div className="cv-personal">
      <h3 id="fullName">{props.fullName}</h3>
      <div className="cv-contact">
        <Contact type="email" content={props.email} logo={emailLogo} />
        <Contact type="phone" content={props.phone} logo={phoneLogo} />
        <Contact type="linkedIn" content={props.linkedIn} logo={linkedInLogo} />
      </div>
    </div>
  )
}

function Contact ({type, content, logo}) {
  return content != "" ? (
    <div className={type}>
      <img src={logo} />
      <p id={type}>{content}</p>
    </div>
  ) : null;
}