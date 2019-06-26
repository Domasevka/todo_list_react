import React, { Component } from 'react'
import ListItem from '../ListItem'
import InputForm from '../InputForm'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: props.listItems,
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
  addItem = (value) => {
    const newArr = [...this.state.listItems];
    newArr.push({id: new Date().valueOf(), name: value });
    this.setState({listItems: newArr});
  };

  removeItem = (item) => {
    console.log(item);
    this.setState({listItems: this.state.listItems.filter(el => el.id !== item.id)});
    console.log('---', this.setState);
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
            listItems.map(listItem => (<ListItem key={listItem.id} listItem={listItem} onRemove={this.removeItem}/>))
          }
        </div>
      </div>
    );
  }
}

