import { v4 as uuid } from 'uuid';
import '../styles/App.css'
import { Job } from './Types';

type ExperienceProps = {
  isOpen: boolean;
  company: string;
  position: string;
  expStartDate: string;
  expEndDate: string;
  expLocation: string;
  expDesc: string;
  updateValue: any;
  setJobs: any;
  jobs: Job[];
  resetExperience: any;
  setIsExpPreview: any;
  expLogo: string;
  dropdown: string;
  updateOpen: any;
  isEdit: boolean;
  editIndex: number;
  setIsEdit: any;
};

export const Experience = (props: ExperienceProps) => {
  const {
    isOpen, company, position, expStartDate, expEndDate, expLocation, expDesc, updateValue, setJobs, jobs, 
    resetExperience, setIsExpPreview, expLogo, dropdown, updateOpen, isEdit, editIndex, setIsEdit
  } = props;

  const fields = [
    { label: "Company", placeholder: "Enter company name", key: uuid(), state: "company", value: company },
    { label: "Position", placeholder: "Enter position title", key: uuid(), state: "position", value: position },
    { label: "Start Date", placeholder: "Enter start date", key: uuid(), state: "expStartDate", value: expStartDate },
    { label: "End Date", placeholder: "Enter end date", key: uuid(), state: "expEndDate", value: expEndDate },
    { label: "Location", placeholder: "Enter location", key: uuid(), state: "expLocation", value: expLocation },
    { label: "Description", placeholder: "Enter role description", key: uuid(), state: "expDesc", value: expDesc }
  ];

  function handleAddJob(e: any) {
    e.preventDefault();
    const experience = {
      id: uuid(),
      company: company,
      position: position,
      expStartDate: expStartDate,
      expEndDate: expEndDate,
      expLocation: expLocation,
      expDesc: expDesc,
    }
    if (!isEdit) {
      setJobs((prevJobs: any) => [...prevJobs, experience]);
    } else {
      const jobsCopy = Array.from(jobs);
      jobsCopy[editIndex] = experience;
      setJobs(jobsCopy);
    }
    setIsEdit(false);
    resetExperience();
  }

  function handleClick(e: any) {
    e.preventDefault();
    updateOpen("isExpOpen");
  }

  function handleChange(e: any) {
    e.preventDefault();
    updateValue(e.target.value, e.target.id);
    setIsExpPreview(!isEdit);
  }

  return (
    <div className="experience">
      <div className="expInputHeader" onClick={handleClick}>
        <img src={expLogo} id="sectionLogo" />
        <h2>Experience</h2>
        <img src={dropdown} id="sectionDropdown" />
      </div>
      
      {isOpen && <div className="infoSection">
        {fields.map((field) => {
          return (
            <div key={field.state} className="entry">
              <label htmlFor={field.state} > {field.label} </label>
              <input type="text" name={field.state} className="experienceInput" placeholder={field.placeholder}
               id={field.state} value={field.value} onChange={handleChange} />
            </div>
          )
        })}
      </div>}
      {isOpen &&<div className="buttons">
        <button id="cancel" onClick={resetExperience}>
          Cancel
        </button>
        <button id="addExp" onClick={handleAddJob}>
          Save
        </button>
      </div>}
    </div>
  )
};

export default Experience;