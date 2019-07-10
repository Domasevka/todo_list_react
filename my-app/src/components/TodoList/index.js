import React, { Component } from 'react'
//import listItems from '../../users'
import ListItem from '../ListItem'
import InputForm from '../InputForm'


//https://jsonplaceholder.typicode.com/users/
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      checkedItems: {},
      /*value: '',*/
      /*showForm: true,*/
    };
    console.log('---', this.state);
  }

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

  completeItem = (id, value) => {
    const checkedCopy = { ...this.state.checkedItems };
    if (value) {
      checkedCopy[id] = value;
    } else {
      delete checkedCopy[id];
    }
    this.setState({ checkedItems: checkedCopy });

    console.log(checkedCopy);
    // this.setState({
    //   listItems: this.state.listItems.map(el => {
    //     if (el.id === id) {
    //       return {...el, complete: !el.complete};
    //     }
    //     return el;
    //   })
    // });
  };

  removeAllCompleteItems = () => {
    const { checkedItems, listItems } = this.state;
    console.log('CheckedItems: ', checkedItems);
    console.log('CheckedItems: ', Object.values(checkedItems));
    const newListItems = listItems.filter(listItem => {
      const shouldStay = !checkedItems[listItem.id];
      return shouldStay
    });

    this.setState({
      listItems: newListItems,
      checkedItems: {},
    })
  };

  selectAllCompleteItems = () => {
    const { checkedItems, listItems } = this.state;


    const newCompleteListItems = listItems.map(item => {
      if (checkedItems[item.id]){
        return {...item, complete: true};
      }
      return item;
    });
    console.log('CompleteListItems: ', newCompleteListItems);
    this.setState({
      listItems: newCompleteListItems,
      checkedItems: {},
    });
  };

  /*changeStateForm = () => {
    this.setState({showForm : !this.state.showForm});
  }*/

  render() {
    console.log('render');
    const { listItems, checkedItems/*, showForm */} = this.state;
    const shownBtn = Object.values(checkedItems);

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
            listItems.map(listItem => (
              <ListItem
                isChecked={checkedItems[listItem.id]}
                key={listItem.id}
                listItem={listItem}
                onRemove={this.removeItem}
                onClickComplete={this.completeItem}
              />))
          }
        </div>
        {!!shownBtn.length &&
        <div>
          <button className="btn btn_blue btn_sm" onClick={this.removeAllCompleteItems}>  remove  </button>
          <button className="btn btn_blue btn_sm" onClick={this.selectAllCompleteItems}>  complete  </button>
        </div>
        }
      </div>
    );
  }
}

