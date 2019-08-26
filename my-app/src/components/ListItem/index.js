import React from 'react'
import Clock from '../Clock'
import './style.scss';
import { format } from 'date-fns'

function ListItem(props) {
  const { listItem, onRemove, onClickComplete, isChecked } = props;

  console.log('---', listItem);
  return(
    <div className={`list__item ${listItem.completed ? 'completed' : ''}`}  key={listItem.id} >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(evnt) => onClickComplete(listItem.id, evnt.target.checked)}
      />
      <span className="list__text">{listItem.name}</span>
      <span className="list__time">creation date: {listItem.date.toLocaleTimeString()} </span>
      <Clock createdDate={format(listItem.date)}/>
      <button type="button" className="btn-close" onClick={() => onRemove(listItem)}>&times;</button>
    </div>
  )
}
export default ListItem

