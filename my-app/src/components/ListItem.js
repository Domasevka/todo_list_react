import React, {Component} from 'react'

class ListItem extends Component {
  render(){
    const {article} = this.props;
    console.log('---', this.props);
    const body = <section>body</section>

    return (
      <div   className ="hello">
        <h2>{article.name}</h2>
        {body}
        <h3>
          creation date: {new Date().toLocaleTimeString()}
        </h3>
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
export default Article*/}
