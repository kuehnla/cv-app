import { v4 as uuid } from 'uuid';
import Field from './Field';

export default function Experience () {
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
        <form action="" method="post" className="experience">
          {fields.map((field) => {
            return <Field label={field.label} placeholder={field.placeholder} key={field.id} className="experience" />
          })}
        </form>
      </div>
    </div>
  )
}