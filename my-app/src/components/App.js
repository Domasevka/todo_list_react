import React from 'react'
//import TodoList from './TodoList'
import ListItem from './ListItem'
import articles from '../users'

function App() {
  return(
    <div>
      <h1>App Name</h1>
      <ListItem article = {articles[0]} />
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
