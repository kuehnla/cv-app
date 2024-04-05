import Field from './Field'
import { v4 as uuid } from 'uuid';

export default function Education () {
  // [isOpen, setIsOpen] = useState(false);
  
  /*
   * If isOpen
   * return form
   * 
   * return + Education
  */

  const fields = [
    { label:"School", placeholder:"Enter university, college, or high school", key:uuid() },
    { label:"Degree", placeholder:"Enter degree / diploma", key:uuid() },
    { label:"Start Date", placeholder:"Enter start date", key:uuid() },
    { label:"End Date", placeholder:"Enter end or expected date", key:uuid() }
  ];

  return (
    <div>
      <h2>Education</h2>
      <div>
        <form action="" method="post" className="education">
          {fields.map((field) => {
            return <Field label={field.label} placeholder={field.placeholder} key={field.id} className="education" />
          })}
        </form>
      </div>
    </div>
  )
}