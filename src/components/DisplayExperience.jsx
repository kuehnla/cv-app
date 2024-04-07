import '../styles/App.css'

export default function DisplayExperience({ company, position, expStartDate, expEndDate, expLocation, expDesc, jobs, isPreview, isEdit }) {
  return (
    <div className="cv-experience">
      <h2 id="expHeader">Experience</h2>
      {jobs.map((job) => {
        return (
          <div key={job.id} className="job">
            <p id="jobCompany">{!isEdit ? job.company : company}</p>
            <p id="jobPosition">{!isEdit ? job.position : position}</p>
            <div id="jobDuration">
              <p id="jobStart">{!isEdit ? job.expStartDate : expStartDate} {expStartDate && expEndDate || (isEdit && expStartDate && expEndDate) ? "-" : null}</p> &nbsp;
              <p id="jobEnd">{!isEdit ? job.expEndDate : expEndDate}</p>
            </div>
            <p id="jobLoc">{!isEdit ? job.expLocation : expLocation }</p>
            <p id="jobDesc">{!isEdit ? job.expDesc : expDesc}</p>
          </div>
        )
      })}
      {isPreview ?
        <div className="jobPreview">
          <p id="jobCompany">{company}</p>
          <p id="jobPosition">{position}</p>
          <div id="jobDuration">
            <p id="jobStart">{expStartDate} {expStartDate ? "-" : null}</p> &nbsp;
            <p id="jobEnd">{expEndDate}</p>
          </div>
          <p id="jobLoc">{expLocation}</p>
          <p id="jobDesc">{expDesc}</p>
        </div>
        : null
      }
    </div>
  )
}