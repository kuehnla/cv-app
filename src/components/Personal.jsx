import { v4 as uuid } from 'uuid';


export default function Personal(props) {

  const fields = [
    { label: "Full Name", placeholder: "First and last name", state: "fullName" },
    { label: "Email", placeholder: "Enter email", state: "email" },
    { label: "Phone", placeholder: "Enter phone number", state: "phone"},
    { label: "LinkedIn", placeholder: "Enter link", state: "linkedIn" },
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