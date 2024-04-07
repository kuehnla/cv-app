import '../styles/App.css'
export default function DisplayEducation({ school, degree, eduStartDate, eduEndDate, edus, isPreview, isEdit }) {
  return (
    <div className="cv-education">
      <h2 id="eduHeader">Education</h2>
      {edus.map((edu) => {
        return (
          <div key={edu.id} className="edu">
            <p id="eduSchool">{!isEdit ? edu.school : school}</p>
            <p id="eduDegree">{!isEdit ? edu.degree : degree}</p>
            <div id="eduDuration">
              <p id="eduStart">{!isEdit ? edu.eduStartDate : eduStartDate} {edu.eduStartDate && edu.eduEndDate || (isEdit && eduStartDate && eduEndDate) ? "-" : null}</p> &nbsp;
              <p id="eduEnd">{!isEdit ? edu.eduEndDate : eduStartDate}</p>
            </div>
          </div>
        )
      })}
      {isPreview ?
        <div className="eduPreview">
          <p id="eduSchool">{school}</p>
          <p id="eduDegree">{degree}</p>
          <div id="eduDuration">
            <p id="eduStart">{eduStartDate} {eduStartDate ? "-" : null}</p> &nbsp;
            <p id="eduEnd">{eduEndDate}</p>
          </div>
        </div>
        : null
      }
    </div>
  )
}