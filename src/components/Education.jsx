import { v4 as uuid } from 'uuid';

export default function Education(props) {
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
    <div className="education">
      <h2>Education</h2>
      <div>
          {fields.map((field) => {
            return (
              <div key={field.id}>
                <label htmlFor={field.id} key={field.id} > {field.label} </label>
                <input type="text" name={field.id} className="educationInput" placeholder={field.placeholder} key={field.id} />
              </div>
          )})}
      </div>
    </div>
  )
}