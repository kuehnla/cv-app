import trashLogo from '../assets/trash-outline.svg'

export default function Clear({ handleClear }) {
  
  return (
    <div className="clear" onClick={(e) => {handleClear(e)}}>
      <img src={trashLogo} id="clearIcon" />
      <h4 id="clear">Clear Preview</h4>
    </div>
  )
}