import React from 'react'
import TodoList from './TodoList'
import listItems from '../users'

import styles from './App.scss';

function App() {
  return(
    <div style={styles.myHeader}>
      <h1>To do list</h1>
      <TodoList listItems={listItems} />
    </div>
  )
}

export default App

{/*import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'

function App() {
  return(
    <div>
      <h1>App Name</h1>
      <ArticleList articles = {articles} />
    </div>
  )
}

export default App*/}
