import React from 'react';

import TodoList from './TodoList'
import Menu from '../components/Menu/Menu';

const Todo = () => (
  <div className="list-wrapper">
    <Menu/>
    <TodoList />
  </div>
);

export default Todo
