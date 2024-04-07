import { v4 as uuid } from 'uuid';

export default function CollapedSection({ isOpen, title, icon }) {
  return (
    <div className="collapsed" key={uuid()} >
      <h2> {title} </h2>

    </div>
  )
}