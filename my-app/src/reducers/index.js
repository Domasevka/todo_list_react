import { combineReducers } from 'redux';
import todoListItems from './todoListItems';
import newItems from './newItems';
import notification from './notification';
import form from './form';

export default combineReducers({
  todoListItems,
  newItems,
  notification,
  form
})