import penLogo from '../assets/pencil.svg'
import trashLogo from '../assets/trash.svg'

export default function EditList({ jobs, edus, handleEdit, handleRemove }) {

  if (jobs.length === 0 && edus.length === 0) return;

  return (
    <div className="editContainer">
      {jobs.map((job, index) => {
        return (
          <div className="editJob" key={index}>
            <h3 className="editJobTitle"> {job.company} </h3>
            <div className="updateBtns">
              <img id="penLogo" src={penLogo} onClick={(e) => handleEdit(e, index)} />
              <img id="trashLogo" src={trashLogo} onClick={(e) => handleRemove(e, index)} />
            </div>
          </div>
        )
      })}
    </div>
  )
}