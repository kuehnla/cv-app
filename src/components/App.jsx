import { useState } from 'react';
import DisplayPersonal from './DisplayPersonal'
import DisplayExperience from './DisplayExperience'
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
      case null : console.log("error");
    }
  }

  return (
    <>
      <div className="inputContainer">
        <Personal updateValue={updateValue} />
        <Experience updateValue={updateValue} />
        <Education />
      </div>
      <div className="displayContainer">
        <DisplayPersonal fullName={fullName} email={email} phone={phone} linkedIn={linkedIn} website={website} />
        <DisplayExperience company={company} position={position} expStartDate={expStartDate} expEndDate={expEndDate} expLocation={expLocation} expDesc={expDesc} />
      </div>
    </>
  );
}