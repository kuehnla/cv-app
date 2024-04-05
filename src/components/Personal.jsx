import Field from './Field'
import { v4 as uuid } from 'uuid';


export default function Personal () {

  const fields = [
    { label: "Full Name", placeholder: "First and last name", id: uuid() },
    { label: "Email", placeholder: "Enter email", id: uuid() },
    { label: "Phone", placeholder: "Enter phone number", id: uuid() },
    { label: "LinkedIn", placeholder: "Enter link", id: uuid() },
    { label: "Website", placeholder: "Enter link", id: uuid() },
  ];

  return (
    <>
      <h1>Personal Information</h1>
      <form action="" method="post" className="personal">
        <div>
          {fields.map((field) => {
            return <Field label={field.label} placeholder={field.placeholder} key={field.id} className="personal" />
          })}
        </div>
      </form>
    </>
  )
  
  /*
   * return 
   * Personal Information
   * form
   *  
  */
}