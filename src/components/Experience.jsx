import { v4 as uuid } from 'uuid';
import '../styles/App.css'

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
    { label: "Company", placeholder: "Enter company name", key: uuid(), state: "company" },
    { label: "Position", placeholder: "Enter position title", key: uuid(), state: "position" },
    { label: "Start Date", placeholder: "Enter start date", key: uuid(), state:"expStartDate" },
    { label: "End Date", placeholder: "Enter end date", key: uuid(), state:"expEndDate" },
    { label: "Location", placeholder: "Enter location", key: uuid(), state:"expLocation" },
    { label: "Description", placeholder: "Enter role description", key: uuid(), state:"expDesc" }
  ];

  function handleAddJob(e) {
    props.setJobs((prevJobs) => [...prevJobs, ])
  }

  function handleChange(e) {
    e.preventDefault();
    props.updateValue(e.target.value, e.target.id);
  }

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div>
          {fields.map((field) => {
            return (
              <div key={field.state} className="entry">
                <label htmlFor={field.state} > {field.label} </label>
                <input type="text" name={field.state} className="experienceInput" placeholder={field.placeholder} id={field.state} onChange={handleChange} />
              </div>
          )})}
      </div>
      <button id="addExp" onClick={handleAddJob}>
        +
      </button>
    </div>
  )
}