//ToDo delete this item

import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { createNewItem } from '../actions'
import { notification } from '../actions'


const CreateNewItem = (props) => {
  let nameInput;
  let descrInput;
  let priceInput;

  console.log(props);

  return (
    <div>
      <h2>Create New Item</h2>
      <form onSubmit={e => {
        e.preventDefault();
        if (!nameInput.value.trim()) {
          return
        } else if (!descrInput.value.trim()){
          return
        }else if (!priceInput.value.trim()){
          return
        }
        props.dispatch(createNewItem(nameInput.value, descrInput.value, priceInput.value));
        props.dispatch(notification('Your order is created!'));
        nameInput.value = '';
        descrInput.value ='';
        priceInput.value ='';
        props.history.push('/catalogue');
      }}>
        <label>
          <span className="list__label">Name:</span>
          <input className="list__input list__input_md" name="name" ref={node => nameInput = node} /> {/*value="Name"*/}
        </label>
        <label>
          <span className="list__label">Description:</span>
          <input className="list__input list__input_md" name="description" ref={node => descrInput = node} /> {/*value="Description"*/}
        </label>
        <label>
          <span className="list__label">Price:</span>
          <input className="list__input list__input_md" name="price" ref={node => priceInput = node} /> {/*value="Price"*/}
        </label>
        <button type="submit" className="btn btn_blue btn_sm">Submit</button>
      </form>
    </div>
  )
};

export default withRouter(connect()(CreateNewItem))
