import React from 'react'
import TodoList from './TodoList'
import listItems from '../users'
import './App.scss';

function App() {
  return(
    <div className="list-wrapper">
      <h1>To do list</h1>
      <TodoList listItems={listItems} />
    </div>
  )
}

export default App

