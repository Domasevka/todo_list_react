import React from 'react'
import './style.scss';

function ListItem({ listItem, onRemove }) {
  // const {listItem, onRemove} = props;

  console.log('---', listItem);
  return(
      <div className="list__item" key={listItem.id}>
          <span className="list__text">{listItem.name}</span>
          <span className="list__time">
            creation date: {new Date().toLocaleTimeString()}
          </span>
          <button type="button" className="btn btn-close" onClick={() => onRemove(listItem)}>&times;</button>
      </div>
  )
}
export default ListItem

