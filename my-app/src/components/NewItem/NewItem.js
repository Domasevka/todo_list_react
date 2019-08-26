import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const NewItem = ({item, name, phone, price, email, id, onRemoveItem }) => (

  <div className="catalogue-list__item">
    <Link key={item.id} className="catalogue-list__link" to={`/catalogItem/${item.id}`}>
      <span className="catalogue-list__row">{ item.name }</span>
      <span className="catalogue-list__row">{ item.phone }</span>
      <span className="catalogue-list__row">{ item.email }</span>
      <span className="catalogue-list__row">{ item.price }</span>
    </Link>
    <button type="button" className="btn-close catalogue-list__btn" onClick={() => onRemoveItem(item)}>&times;</button>
  </div>
);

export default NewItem
