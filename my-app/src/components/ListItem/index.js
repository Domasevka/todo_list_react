import React, {Component} from 'react'
import styles from './style.scss';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {listItem, onRemove} = this.props;
    console.log('---', this.props);

    return (
      <div className="list__item" key={listItem.id}>
          <span className="list__text">{listItem.name}</span>
          <span className="list__time">
          creation date: {new Date().toLocaleTimeString()}
        </span>
          <button type="button" className="btn btn-close" onClick={() => onRemove(listItem)}>&times;</button>
      </div>
    )
  }
}
export default ListItem

{/*//class Article extends React.Component
 import React, {Component} from 'react'

 class Article extends Component {
 constructor(props){
 super(props);

 this.state = {
 isOpen: true
 };
 //this.handleClick = handleClick.bind(this)
 }
 /!*state = {
 isOpen: true
 };*!/

 writeDate = (article) => {
 return 'gfgf' + (new Date(article.date)).toDateString();
 };
 handleClick = () => {
 console.log('---', 'clicked');
 this.setState({
 isOpen: !this.state.isOpen
 })
 };

 render(){
 const {article} = this.props;
 console.log('---', this.props);
 const body  = this.state.isOpen && <section>{article.text}</section>

 const ShowDate = ({ article }) => (<b>---------------------------{article.date}-------------</b>)
 return (
 <div   className ="hello">
 <h2>
 {article.title}
 <button onClick={this.handleClick}>
 {this.state.isOpen ? 'close' : 'open'}
 </button>
 </h2>
 {body}
 <h3>
 creation date: {(new Date(article.date)).toDateString()} {this.writeDate(article)}
 <ShowDate article={article} />
 </h3>
 </div>
 )
 }
 }
 export default Article*/
}
