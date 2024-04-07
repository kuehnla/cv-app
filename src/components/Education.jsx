import { v4 as uuid } from 'uuid';

export default function Education({school, degree, eduStartDate, eduEndDate, setEdu, updateValue, resetEducation , setIsPreview}) {
  // [isOpen, setIsOpen] = useState(false);
  /*
   * If isOpen
   * return form
   * 
   * return + Education
  */

  const fields = [
    { label:"School", placeholder:"Enter university, college, or high school", key:uuid(), state:"school", value: school },
    { label:"Degree", placeholder:"Enter degree / diploma", key:uuid(), state:"degree", value: degree },
    { label:"Start Date", placeholder:"Enter start date", key:uuid(), state:"eduStartDate", value: eduStartDate },
    { label:"End Date", placeholder:"Enter end or expected date", key:uuid(), state:"eduEndDate", value: eduEndDate }
  ];

  function handleChange(e) {
    e.preventDefault();
    updateValue(e.target.value, e.target.id);
    setIsPreview(true);
  }

  function handleAddEdu(e) {
    e.preventDefault();
    const education = {
      id: uuid(),
      school: school,
      degree: degree,
      eduStartDate: eduStartDate,
      eduEndDate: eduEndDate,
    }
    setEdu((prevEducation) => [...prevEducation, education]);
    resetEducation();
  }

  return (
    <div className="education">
      <h2>Education</h2>
      <div>
          {fields.map((field) => {
            return (
              <div key={field.state} className="entry">
                <label htmlFor={field.state}> {field.label} </label>
                <input type="text" name={field.state} className="educationInput" placeholder={field.placeholder} id={field.state} value={field.value} onChange={handleChange} />
              </div>
            )
          })}
      </div>
      <button id="addEdu" onClick={handleAddEdu}>
        Save
      </button>
    </div>
  )
}