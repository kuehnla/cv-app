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
    { label:"School", placeholder:"Enter university, college, or high school", key:uuid(), state:"school" },
    { label:"Degree", placeholder:"Enter degree / diploma", key:uuid(), state:"degree" },
    { label:"Start Date", placeholder:"Enter start date", key:uuid(), state:"eduStartDate" },
    { label:"End Date", placeholder:"Enter end or expected date", key:uuid(), state:"eduEndDate" }
  ];

  function handleChange(e) {
    e.preventDefault();
    props.updateValue(e.target.value, e.target.id);
  }

  return (
    <div className="education">
      <h2>Education</h2>
      <div>
          {fields.map((field) => {
            return (
              <div key={field.state} className="entry">
                <label htmlFor={field.state}> {field.label} </label>
                <input type="text" name={field.state} className="educationInput" placeholder={field.placeholder} id={field.state} onChange={handleChange} />
              </div>
            )
          })}
      </div>
    </div>
  )
}