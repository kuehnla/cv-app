import { useState } from 'react';
import DisplayPersonal from './DisplayPersonal'
import DisplayExperience from './DisplayExperience'
import DisplayEducation from './DisplayEducation'
import CollapedSection from './CollapedSection'
import Education from './Education'
import Experience from './Experience'
import Personal from './Personal'
import EditList from './EditList'
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

  const [company, setCompany] = useState("Hamlin, Hamlin, & McGill");
  const [position, setPosition] = useState("Attorney");
  const [expStartDate, setExpStartDate] = useState("May 1999");
  const [expEndDate, setExpEndDate] = useState("Apr. 2004");
  const [expLocation, setExpLocation] = useState("Albuquerque, NM");
  const [expDesc, setExpDesc] = useState("I know we're never supposed to say our clients are guilty, but hey, not my client anymore. He's guilty as sin.");
  const [isExpPreview, setIsExpPreview] = useState(true);
  const [isExpOpen, setIsExpOpen] = useState(false);

  const [school, setSchool] = useState("University of New Mexico School of Law");
  const [degree, setDegree] = useState("Juris Doctor");
  const [eduStartDate, setEduStartDate] = useState("Sep. 1999");
  const [eduEndDate, setEduEndDate] = useState("May 2002");
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

  function handleEdit(e, index) {
    e.preventDefault();
    console.log(index);
  }

  function handleRemove(e, index) {
    e.preventDefault();
    console.log(index)
  }

  return (
    <div className="app">
      <div className="inputContainer">
        <CollapedSection isOpen={isPersonalOpen} title={"Personal Information"} icon={personLogo} dropdown={dropdown} state="isPersonalOpen" updateOpen={updateOpen} />
        <Personal fullName={fullName} email={email} phone={phone} linkedIn={linkedIn} updateValue={updateValue} personLogo={personLogo} dropdown={dropdown} isOpen={isPersonalOpen} updateOpen={updateOpen} />

        <CollapedSection isOpen={isExpOpen} title={"Experience"} icon={expLogo} dropdown={dropdown} state="isExpOpen" updateOpen={updateOpen} />
        <Experience company={company} position={position} expStartDate={expStartDate} expEndDate={expEndDate} expLocation={expLocation} expDesc={expDesc} updateValue={updateValue} setJobs={setJobs} resetExperience={resetExperience} setIsExpPreview={setIsExpPreview} expLogo={expLogo} dropdown={dropdown} isOpen={isExpOpen} updateOpen={updateOpen} />

        <CollapedSection isOpen={isEduOpen} title={"Education"} icon={eduLogo} dropdown={dropdown} state="isEduOpen" updateOpen={updateOpen} />
        <Education school={school} degree={degree} eduStartDate={eduStartDate} eduEndDate={eduEndDate} updateValue={updateValue} setEdu={setEdu} resetEducation={resetEducation} setIsPreview={setIsEduPreview} eduLogo={eduLogo} dropdown={dropdown} isOpen={isEduOpen} updateOpen={updateOpen} />

        <EditList jobs={jobs} edus={edus} handleEdit={handleEdit} handleRemove={handleRemove} />
      </div>
      <div className="displayContainer">
        <DisplayPersonal fullName={fullName} email={email} phone={phone} linkedIn={linkedIn} />
        <DisplayExperience company={company} position={position} expStartDate={expStartDate} expEndDate={expEndDate} expLocation={expLocation} expDesc={expDesc} jobs={jobs} isPreview={isExpPreview}  />
        <DisplayEducation school={school} degree={degree} eduStartDate={eduStartDate} eduEndDate={eduEndDate} edus={edus} isPreview={isEduPreview} />
      </div>
    </div>
  );
}