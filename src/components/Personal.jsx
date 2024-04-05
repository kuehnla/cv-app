import Field from './Field'

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
          {fields.map(() => {
            return <Field />
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