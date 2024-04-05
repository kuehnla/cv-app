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
    { label: "Company", placeholder: "Enter company name", key: uuid() },
    { label: "Position", placeholder: "Enter position title", key: uuid() },
    { label: "Start Date", placeholder: "Enter start date", key: uuid() },
    { label: "End Date", placeholder: "Enter end date", key: uuid() },
    { label: "Location", placeholder: "Enter location", key: uuid() },
    { label: "Description", placeholder: "Enter role description", key: uuid() }
  ];

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div>
          {fields.map((field) => {
            return (
              <div key={field.id}>
                <label htmlFor={field.id} key={field.id} > {field.label} </label>
                <input type="text" name={field.id} className="experienceInput" placeholder={field.placeholder} key={field.id} />
              </div>
          )})}
      </div>
    </div>
  )
}