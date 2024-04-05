// import Field from './Field'
import { v4 as uuid } from 'uuid';


export default function Personal(props) {

  const fields = [
    { label: "Full Name", placeholder: "First and last name", id: uuid() },
    { label: "Email", placeholder: "Enter email", id: uuid() },
    { label: "Phone", placeholder: "Enter phone number", id: uuid() },
    { label: "LinkedIn", placeholder: "Enter link", id: uuid() },
    { label: "Website", placeholder: "Enter link", id: uuid() },
  ];

  return (
    <div>
      <h2>Personal Information</h2>
        <div>
          {fields.map((field) => {
            return (
              <div key={field.id}>
                <label htmlFor={field.id}> {field.label} </label>
                <input type="text" name={field.id} className="personalInput" placeholder={field.placeholder} />
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