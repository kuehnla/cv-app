import emailLogo from '../assets/mail-outline.svg'
import phoneLogo from '../assets/call-outline.svg'
import linkedInLogo from '../assets/logo-linkedin.svg'
import '../styles/App.css'

type DisplayPersonalProps = {
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
}

export const DisplayPersonal = (props: DisplayPersonalProps) => {
  const { fullName, email, phone, linkedIn } = props;
  return (
    <div className="cv-personal">
      <h3 id="fullName">{fullName}</h3>
      <div className="cv-contact">
        <Contact type="email" content={email} logo={emailLogo} />
        <Contact type="phone" content={phone} logo={phoneLogo} />
        <Contact type="linkedIn" content={linkedIn} logo={linkedInLogo} />
      </div>
    </div>
  )
};

type ContactProps = {
  type: string;
  content: string;
  logo: string;
}

function Contact (props: ContactProps) {
  const { type, content, logo } = props;

  return content != "" ? (
    <div className={type}>
      <img src={logo} />
      <p id={type}>{content}</p>
    </div>
  ) : null;
};

export default DisplayPersonal;