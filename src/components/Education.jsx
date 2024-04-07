import { v4 as uuid } from 'uuid';

export default function Education(
  { isOpen, school, degree, eduStartDate, eduEndDate, setEdu,
  updateValue, resetEducation, setIsPreview, eduLogo, dropdown, updateOpen, isEdit, editIndex, setIsEdit, edus
  }) {

  if (!isOpen) return;

  const fields = [
    { label: "School", placeholder: "Enter university, college, or high school", key: uuid(), state: "school", value: school },
    { label: "Degree", placeholder: "Enter degree / diploma", key: uuid(), state: "degree", value: degree },
    { label: "Start Date", placeholder: "Enter start date", key: uuid(), state: "eduStartDate", value: eduStartDate },
    { label: "End Date", placeholder: "Enter end or expected date", key: uuid(), state: "eduEndDate", value: eduEndDate }
  ];

  function handleClick(e) {
    e.preventDefault();
    updateOpen("isEduOpen");
  }

  function handleChange(e) {
    e.preventDefault();
    updateValue(e.target.value, e.target.id);
    setIsPreview(!isEdit);
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
    console.log(isEdit);
    if (!isEdit) {
      setEdu((prevEducation) => [...prevEducation, education]);
    } else {
      const edusCopy = Array.from(edus);
      edusCopy[editIndex] = education;
      setEdu(edusCopy);
    }
    setIsEdit(false);
    resetEducation();
  }

  return (
    <div className="education">
      <div className="eduInputHeader" onClick={handleClick}>
        <img src={eduLogo} id="sectionLogo" />
        <h2>Education</h2>
        <img src={dropdown} id="sectionDropdown" />
      </div>
      <div>
        {fields.map((field) => {
          return (
            <div key={field.state} className="entry">
              <label htmlFor={field.state}> {field.label} </label>
              <input type="text" name={field.state} className="educationInput" placeholder={field.placeholder} id={field.state}
                value={field.value} onChange={handleChange} />
            </div>
          )
        })}
      </div>
      <div className="buttons">
        <button id="cancel" onClick={resetEducation}>
          Cancel
        </button>
        <button id="addEdu" onClick={handleAddEdu}>
          Save
        </button>
      </div>
    </div>
  )
}