import { v4 as uuid } from 'uuid';


export default function Personal(props) {

  const fields = [
    { label: "Full Name", placeholder: "First and last name", key: uuid(), state: "fullName" },
    { label: "Email", placeholder: "Enter email", key: uuid(), state: "email" },
    { label: "Phone", placeholder: "Enter phone number", key: uuid(), state: "phone"},
    { label: "LinkedIn", placeholder: "Enter link", key: uuid(), state: "linkedIn" },
    { label: "Website", placeholder: "Enter link", key: uuid(), state: "website" },
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
              <div key={field.state} >
                <label htmlFor={field.state}> {field.label} </label>
                <input type="text" name={field.state} className="personalInput" id={field.state} placeholder={field.placeholder} onChange={handleChange} />
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