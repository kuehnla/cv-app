import { v4 as uuid } from 'uuid';


export default function Personal({ fullName, email, phone, linkedIn, isOpen, updateValue, personLogo, dropdown, updateOpen }) {

  if (!isOpen) return;

  const fields = [
    { label: "Full Name", placeholder: "First and last name", state: "fullName", value: fullName },
    { label: "Email", placeholder: "Enter email", state: "email", value: email },
    { label: "Phone", placeholder: "Enter phone number", state: "phone", value: phone },
    { label: "LinkedIn", placeholder: "/in/kwexler", state: "linkedIn", value: linkedIn },
  ];

  function handleChange(e) {
    e.preventDefault();
    updateValue(e.target.value, e.target.id);
  }

  function handleClick(e) {
    e.preventDefault();
    updateOpen("isPersonalOpen");
  }

  return (
    <div className="personal">
      <div className="personalInputHeader" onClick={handleClick}>
        <img src={personLogo} id="sectionLogo" />
        <h2>Personal Information</h2>
        <img src={dropdown} id="sectionDropdown" />
      </div>
      <div>
        {fields.map((field) => {
          return (
            <div key={field.state} className="entry" >
              <label htmlFor={field.state}> {field.label} </label>
              <input type="text" value={field.value} name={field.state} className="personalInput" id={field.state} placeholder={field.placeholder} onChange={handleChange} />
            </div>
          )
        })}
      </div>
    </div>
  )

  /*
   * return 
   * Personal Information
   * form
   *  
  */
}