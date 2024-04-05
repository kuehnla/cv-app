import Field from './Field'
import { v4 as uuid } from 'uuid';


export default function Personal () {

  const fields = [
    { label: "Full Name", inputText: "First and last name", id: uuid() },
    { label: "Email", inputText: "Enter email", id: uuid() },
    { label: "Phone", inputText: "Enter phone number", id: uuid() },
    { label: "LinkedIn", inputText: "Enter link", id: uuid() },
    { label: "Website", inputText: "Enter link", id: uuid() },
  ];

  return (
    <>
      <form action="" method="post" className="personal">
        <div>
          {fields.map((field) => {
            return <Field label={field.label} inputText={field.inputText} key={field.id} />
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