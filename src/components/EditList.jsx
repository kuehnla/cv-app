import penLogo from '../assets/pencil.svg'
import trashLogo from '../assets/trash.svg'

export default function EditList({ jobs, edus, handleEdit, handleRemove }) {

  if (jobs.length === 0 && edus.length === 0) return;

  return (
    <div className="editContainer">
      {jobs.map((job, index) => {
        return (
          <div className="editEntry" key={index}>
            <h3 className="editEntryTitle"> {job.company} </h3>
            <div className="updateBtns">
              <img id="penLogo" src={penLogo} onClick={(e) => handleEdit(e, index, "exp")} />
              <img id="trashLogo" src={trashLogo} onClick={(e) => handleRemove(e, index, "exp")} />
            </div>
          </div>
        )
      })}
      {edus.map((edu, index) => {
        return (
          <div className="editEntry" key={index}>
            <h3 className="editEntryTitle"> {edu.school} </h3>
            <div className="updateBtns">
              <img id="penLogo" src={penLogo} onClick={(e) => handleEdit(e, index, "edu")} />
              <img id="trashLogo" src={trashLogo} onClick={(e) => handleRemove(e, index, "edu")} />
            </div>
          </div>
        )
      })}
    </div>
  )
}