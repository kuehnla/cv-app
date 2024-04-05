import { useState } from 'react';
import DisplayPersonal from './DisplayPersonal'
import Education from './Education'
import Experience from './Experience'
import Personal from './Personal'


export default function App() {

  const [fullName, setFullName] = useState("Kimberly Wexler");
  const [email, setEmail] = useState("kwexler@hhm.com");
  const [phone, setPhone] = useState("555-555-5555");
  const [linkedIn, setLinkedIn] = useState("kwexler");
  const [website, setWebsite] = useState("kwexler");

  function updateValue(value, state) {
    switch (state) {
      case "fullName" : setFullName(value); break;
      case "email" : setEmail(value); break;
      case null : console.log("error");
    }
  }

  return (
    <>
      <div className="inputContainer">
        <Personal updateValue={updateValue} />
        <Experience />
        <Education />
      </div>
      <div className="displayContainer">
        <DisplayPersonal fullName={fullName} email={email} />
      </div>
    </>
  );
}