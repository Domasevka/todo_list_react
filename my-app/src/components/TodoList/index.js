import React, { Component } from 'react'
//import listItems from '../../users'
import ListItem from '../ListItem'
import InputForm from '../InputForm'



//https://jsonplaceholder.typicode.com/users/
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //data: null,
      listItems: [],
      /*value: '',*/
      /*showForm: true,*/
    };
    console.log('---', this.state);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.value !== this.state.value;
  // }
  /*handleSubmit = (event) => {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  };
  */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      /*.then(listItems => this.setState({ listItems }));*/
      .then(listItems => this.setState({ listItems: listItems.map(listItem => ({id:listItem.id, name: listItem.name, date: new Date()}))}));
  }

  addItem = (value) => {
    const newArr = [...this.state.listItems];
    newArr.push({id: new Date().valueOf(), name: value, date: new Date()});
    this.setState({listItems: newArr});
  };

  removeItem = (item) => {
    this.setState({listItems: this.state.listItems.filter(el => el.id !== item.id)});
    console.log('---', this.setState);
  };

  completeItem = (id) => {
    console.log(id);
    this.setState({
      listItems: this.state.listItems.map(el => {
        if (el.id === id) {
          return {...el, complete: !el.complete};
        }
        return el;
      })
    });
  };

  /*changeStateForm = () => {
    this.setState({showForm : !this.state.showForm});
  }*/

  render() {
    console.log('render');
    const { listItems /*, showForm */} = this.state;
    return (
      <div>
        {/*<button type="button" onClick={this.changeStateForm}>hide form</button>*/}
        {/*{showForm && (*/}
        { /*<form /!*onSubmit={this.handleSubmit}*!/ className="form-inline">
            <label>
              Name:
              <input type="text" value={value} onChange={this.handleChange} />
            </label>
            <button type="button" onClick={this.addItem}>Add</button>
          </form>*/}
        {/*)}*/}
        <div>
          <InputForm onAdd={this.addItem}/>
        </div>
        <div className = "list">
          {
            /*listItems &&*/
            listItems.map(listItem => (<ListItem key={listItem.id} listItem={listItem} onRemove={this.removeItem} onClickComplete={this.completeItem}/>))
          }
        </div>
      </div>
    );
  }
}

