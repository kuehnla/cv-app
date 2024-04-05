// import Field from './Field'
import { v4 as uuid } from 'uuid';


export default function Personal(props) {

  const fields = [
    { label: "Full Name", placeholder: "First and last name", key: uuid(), state: "fullName" },
    { label: "Email", placeholder: "Enter email", key: uuid(), state: "email" },
    { label: "Phone", placeholder: "Enter phone number", key: uuid() },
    { label: "LinkedIn", placeholder: "Enter link", key: uuid(), state: "linkedIn" },
    { label: "Website", placeholder: "Enter link", key: uuid(), state: "linkedIn" },
  ];

  function handleChange(e) {
    e.preventDefault();
    props.updateValue(e.target.value, e.target.id);
  }

  return (
    <div className="personal">
      <h2>Personal Information</h2>
        <div>
          {fields.map((field) => {
            return (
              <div key={field.id} >
                <label htmlFor={field.id} key={field.id} > {field.label} </label>
                <input type="text" name={field.id} className="personalInput" id={field.state} placeholder={field.placeholder} onChange={handleChange} key={field.id} />
             </div>
          )})}
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