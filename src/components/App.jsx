import { useState } from 'react';
import DisplayPersonal from './DisplayPersonal'
import DisplayExperience from './DisplayExperience'
import DisplayEducation from './DisplayEducation'
import CollapedSection from './CollapedSection'
import Education from './Education'
import Experience from './Experience'
import Personal from './Personal'
import eduLogo from '../assets/school.svg'
import expLogo from '../assets/briefcase.svg'
import personLogo from '../assets/person.svg'
import dropdown from '../assets/chevron-down.svg'
import '../styles/App.css'


export default function App() {

  /*
   * Text states used to re-render the preview upon an input value changing.
   */
  const [fullName, setFullName] = useState("Kimberly Wexler");
  const [email, setEmail] = useState("kwexler@hhm.com");
  const [phone, setPhone] = useState("555-555-5555");
  const [linkedIn, setLinkedIn] = useState("/in/kwexler");
  const [isPersonalOpen, setIsPersonalOpen] = useState(true);

  const [company, setCompany] = useState("Midsize Company");
  const [position, setPosition] = useState("Personality Hire");
  const [expStartDate, setExpStartDate] = useState("May 2021");
  const [expEndDate, setExpEndDate] = useState("Apr. 2024");
  const [expLocation, setExpLocation] = useState("Chicago, IL");
  const [expDesc, setExpDesc] = useState("I was a personality hire.");
  const [isExpPreview, setIsExpPreview] = useState(true);
  const [isExpOpen, setIsExpOpen] = useState(false);

  const [school, setSchool] = useState("State university");
  const [degree, setDegree] = useState("B.S. in Materials Engineering");
  const [eduStartDate, setEduStartDate] = useState("Sep. 1999");
  const [eduEndDate, setEduEndDate] = useState("May 2005");
  const [isEduPreview, setIsEduPreview] = useState(true);
  const [isEduOpen, setIsEduOpen] = useState(false);

  /*
   * Jobs, educations to render multiple.
   */
  const [jobs, setJobs] = useState([]);
  const [edus, setEdu] = useState([]);

  function updateOpen(state) {
    switch (state) {
      case "isPersonalOpen" : setIsPersonalOpen(isPersonalOpen === true ? false : true); break;
      case "isEduOpen" : setIsEduOpen(isEduOpen === true ? false : true); break;
      case "isExpOpen" : setIsExpOpen(isExpOpen === true ? false : true); break;
    }
  }

  function updateValue(value, state) {
    switch (state) {
      // personal
      case "fullName" : setFullName(value); break;
      case "email" : setEmail(value); break;
      case "phone" : setPhone(value); break;
      case "linkedIn" : setLinkedIn(value); break;
      // experience
      case "company" : setCompany(value); break;
      case "position" : setPosition(value); break;
      case "expStartDate" : setExpStartDate(value); break;
      case "expEndDate" : setExpEndDate(value); break;
      case "expLocation" : setExpLocation(value); break;
      case "expDesc" : setExpDesc(value); break;
      // education
      case "school" : setSchool(value); break;
      case "degree" : setDegree(value); break;
      case "eduStartDate" : setEduStartDate(value); break;
      case "eduEndDate" : setEduEndDate(value); break;

      case null : console.log("error");
    }
  }

  function resetExperience() {
    setCompany("");
    setPosition("");
    setExpStartDate("");
    setExpEndDate("");
    setExpLocation("");
    setExpDesc("");
    setIsExpPreview(false);
  }

  function resetEducation() {
    setSchool("");
    setDegree("");
    setEduStartDate("");
    setEduEndDate("");
    setIsEduPreview(false);
  }

  return (
    <div className="app">
      <div className="inputContainer">
        <CollapedSection isOpen={isPersonalOpen} title={"Personal Information"} icon={personLogo} dropdown={dropdown} state="isPersonalOpen" updateOpen={updateOpen} />
        <Personal updateValue={updateValue} personLogo={personLogo} dropdown={dropdown} isOpen={isPersonalOpen} updateOpen={updateOpen} />
        <CollapedSection isOpen={isExpOpen} title={"Experience"} icon={expLogo} dropdown={dropdown} state="isExpOpen" updateOpen={updateOpen} />
        <Experience company={company} position={position} expStartDate={expStartDate} expEndDate={expEndDate} expLocation={expLocation} expDesc={expDesc} updateValue={updateValue} setJobs={setJobs} resetExperience={resetExperience} setIsExpPreview={setIsExpPreview} expLogo={expLogo} dropdown={dropdown} isOpen={isExpOpen} updateOpen={updateOpen} />
        <CollapedSection isOpen={isEduOpen} title={"Education"} icon={eduLogo} dropdown={dropdown} state="isEduOpen" updateOpen={updateOpen} />
        <Education school={school} degree={degree} eduStartDate={eduStartDate} eduEndDate={eduEndDate} updateValue={updateValue} setEdu={setEdu} resetEducation={resetEducation} setIsPreview={setIsEduPreview} eduLogo={eduLogo} dropdown={dropdown} isOpen={isEduOpen} updateOpen={updateOpen} />
      </div>
      <div className="displayContainer">
        <DisplayPersonal fullName={fullName} email={email} phone={phone} linkedIn={linkedIn} />
        <DisplayExperience company={company} position={position} expStartDate={expStartDate} expEndDate={expEndDate} expLocation={expLocation} expDesc={expDesc} jobs={jobs} isPreview={isExpPreview}  />
        <DisplayEducation school={school} degree={degree} eduStartDate={eduStartDate} eduEndDate={eduEndDate} edus={edus} isPreview={isEduPreview} />
      </div>
    </div>
  );
}