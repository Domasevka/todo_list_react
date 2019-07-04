import React from 'react'
import Clock from '../Clock'
import './style.scss';
import { format} from 'date-fns'

//function ListItem({ listItem, onRemove }) {
function ListItem(props) {
  const {listItem, onRemove, onClickComplete} = props;

  console.log('---', listItem);
  return(
      <div className={`list__item ${listItem.complete ? 'complete' : ''}`}  key={listItem.id}>
        <span className="list__check" onClick={() => onClickComplete(listItem.id)}></span>
        <span className="list__text">{listItem.name}</span>
        <span className="list__time">creation date: {listItem.date.toLocaleTimeString()} </span>

        {/*<Date />*/}
        <Clock createdDate={format(listItem.date)}/>
        <button type="button" className="btn-close" onClick={() => onRemove(listItem)}>&times;</button>
      </div>
  )
}
export default ListItem

