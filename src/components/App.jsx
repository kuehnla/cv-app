import { useState } from 'react';
import DisplayPersonal from './DisplayPersonal'
import DisplayExperience from './DisplayExperience'
import DisplayEducation from './DisplayEducation'
import Education from './Education'
import Experience from './Experience'
import Personal from './Personal'
import '../styles/App.css'


export default function App() {

  /*
   * Text states used to re-render the preview upon an input value changing.
   */
  const [fullName, setFullName] = useState("Kimberly Wexler");
  const [email, setEmail] = useState("kwexler@hhm.com");
  const [phone, setPhone] = useState("555-555-5555");
  const [linkedIn, setLinkedIn] = useState("/in/kwexler");

  const [company, setCompany] = useState("Midsize Company");
  const [position, setPosition] = useState("Personality Hire");
  const [expStartDate, setExpStartDate] = useState("05/01/2021");
  const [expEndDate, setExpEndDate] = useState("04/01/2024");
  const [expLocation, setExpLocation] = useState("Chicago, IL");
  const [expDesc, setExpDesc] = useState("I was a personality hire.");

  const [school, setSchool] = useState("State university");
  const [degree, setDegree] = useState("B.S. in Materials Engineering");
  const [eduStartDate, setEduStartDate] = useState("09/01/1999");
  const [eduEndDate, setEduEndDate] = useState("05/15/2004");

  /*
   * Jobs state used to add multiple jobs.
   */
  const [jobs, setJobs] = useState([]);
  const [edus, setEdu] = useState([]);


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
  }

  function resetEducation() {
    setSchool("");
    setDegree("");
    setEduStartDate("");
    setEduEndDate("");
  }

  return (
    <div className="app">
      <div className="inputContainer">
        <Personal updateValue={updateValue} />
        <Experience company={company} position={position} expStartDate={expStartDate} expEndDate={expEndDate} expLocation={expLocation} expDesc={expDesc} updateValue={updateValue} setJobs={setJobs} resetExperience={resetExperience} />
        <Education school={school} degree={degree} eduStartDate={eduStartDate} eduEndDate={eduEndDate} updateValue={updateValue} setEdu={setEdu} resetEducation={resetEducation} />
      </div>
      <div className="displayContainer">
        <DisplayPersonal fullName={fullName} email={email} phone={phone} linkedIn={linkedIn} />
        <DisplayExperience company={company} position={position} expStartDate={expStartDate} expEndDate={expEndDate} expLocation={expLocation} expDesc={expDesc} jobs={jobs} />
        <DisplayEducation school={school} degree={degree} eduStartDate={eduStartDate} eduEndDate={eduEndDate} edus={edus} />
      </div>
    </div>
  );
}