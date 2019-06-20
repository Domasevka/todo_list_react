import React, { Component } from 'react'
import ListItem from '../ListItem'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: props.listItems,
    };
  }
  removeItem = (item) => {
    console.log(item);
    this.state = {
      
    };

  };

  render() {
    const { listItems } = this.state;
    return (
      <div className = "list">
        {
          listItems.map(listItem => (<ListItem key={listItem.id} listItem={listItem} onRemove={this.removeItem}/>))
        }
      </div>
    );
  }
}

{/*import React from 'react'
import Article from './Article'


export default function ArticleList({articles}){
  const articleElements =  articles.map(article =>
    <li key={article.id}><Article article = {article}/></li>
  );
  return(
    <ul>
      {articleElements}
    </ul>
  )
}*/}

