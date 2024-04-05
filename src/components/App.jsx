import { useState } from 'react';
import DisplayPersonal from './DisplayPersonal'
import DisplayExperience from './DisplayExperience'
import DisplayEducation from './DisplayEducation'
import Education from './Education'
import Experience from './Experience'
import Personal from './Personal'


export default function App() {

  const [fullName, setFullName] = useState("Kimberly Wexler");
  const [email, setEmail] = useState("kwexler@hhm.com");
  const [phone, setPhone] = useState("555-555-5555");
  const [linkedIn, setLinkedIn] = useState("kwexler");
  const [website, setWebsite] = useState("kwexler");

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

  function updateValue(value, state) {
    switch (state) {
      // personal
      case "fullName" : setFullName(value); break;
      case "email" : setEmail(value); break;
      case "phone" : setPhone(value); break;
      case "linkedIn" : setLinkedIn(value); break;
      case "website" : setWebsite(value); break;
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

  return (
    <>
      <div className="inputContainer">
        <Personal updateValue={updateValue} />
        <Experience updateValue={updateValue} />
        <Education updateValue={updateValue} />
      </div>
      <div className="displayContainer">
        <DisplayPersonal fullName={fullName} email={email} phone={phone} linkedIn={linkedIn} website={website} />
        <DisplayExperience company={company} position={position} expStartDate={expStartDate} expEndDate={expEndDate} expLocation={expLocation} expDesc={expDesc} />
        <DisplayEducation school={school} degree={degree} eduStartDate={eduStartDate} eduEndDate={eduEndDate} />
      </div>
    </>
  );
}