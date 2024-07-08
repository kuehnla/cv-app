import { v4 as uuid } from 'uuid';

type CollapsedSectionProps = {
  isOpen: boolean;
  title: string;
  icon: string;
  dropdown: string;
  updateOpen: any;
  state: string;
};

export const CollapsedSection = (props: CollapsedSectionProps) => {
  const { isOpen, title, icon, dropdown, updateOpen, state } = props;

  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
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
};

export default CollapsedSection;