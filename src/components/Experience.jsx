import { v4 as uuid } from 'uuid';

export default function Experience(props) {
  // [isOpen, setIsOpen] = useState(false);
  
  /*
   * If isOpen
   * return form
   * 
   * return + Experience
  */

  // FORM

  const fields = [
    { label: "Company", placeholder: "Enter company name", id: uuid() },
    { label: "Position", placeholder: "Enter position title", id: uuid() },
    { label: "Start Date", placeholder: "Enter start date", id: uuid() },
    { label: "End Date", placeholder: "Enter end date", id: uuid() },
    { label: "Location", placeholder: "Enter location", id: uuid() },
    { label: "Description", placeholder: "Enter role description", id: uuid() }
  ];

  return (
    <div>
      <h2>Experience</h2>
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
}