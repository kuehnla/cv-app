import { v4 as uuid } from 'uuid';

export default function CollapedSection({ isOpen, title, icon, dropdown, updateOpen, state }) {

  function handleClick(e) {
    e.preventDefault();
    updateOpen(state);
  }

  if (isOpen) return;

  return (
    <div className="collapsed" key={uuid()} onClick={handleClick} >
      <img src={icon} id="sectionLogo"/>
      <h2> {title} </h2>
      <img src={dropdown} id="sectionDropdown" />
    </div>
  )
}