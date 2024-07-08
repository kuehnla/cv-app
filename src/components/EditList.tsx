import penLogo from '../assets/pencil.svg'
import trashLogo from '../assets/trash-outline.svg'
import { Job, Edu } from './Types';

type EditListProps = {
  jobs: Job[];
  edus: Edu[];
  handleEdit: any;
  handleRemove: any;
}

export const EditList = (props: EditListProps) => {
  const { jobs, edus, handleEdit, handleRemove } = props;

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
};

export default EditList;