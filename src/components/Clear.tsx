import trashLogo from '../assets/trash-outline.svg'

export const Clear = (handleClear: any) => {
  return (
    <div className="clear" onClick={(e) => handleClear(e)}>
      <img src={trashLogo} id="clearIcon" />
      <h4 id="clear">Clear Preview</h4>
    </div>
  )
};

export default Clear;