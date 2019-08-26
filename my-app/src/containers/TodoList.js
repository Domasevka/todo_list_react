import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/index';
import ListItem from '../components/ListItem/index'
import InputForm from '../components/InputForm/index'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: {},
    };
    //console.log('---', this.state);
  }

  componentDidMount() {
    this.props.fetchData('https://jsonplaceholder.typicode.com/users/')
    // fetch('https://jsonplaceholder.typicode.com/users/')
    //   .then(response => response.json())
    //   /*.then(listItems => this.setState({ listItems }));*/
    //  .then(listItems => this.setState({ listItems: listItems.map(listItem => ({id:listItem.id, name: listItem.name, date: new Date()}))}));
  }

  addItem = (value) => {
    this.props.onAdd({id: Date.now().toString(), name: value, date: new Date(), completed: false});
  };

  removeItem = (item) => {
    this.props.onRemove(item.id);
  };

  completeItem = (id, value) => {
    const checkedCopy = { ...this.state.checkedItems };

    if (value) {
      checkedCopy[id] = value;
    } else {
      delete checkedCopy[id];
    }
    this.setState({ checkedItems: checkedCopy });
    //console.log(checkedCopy);
  };

  removeAllCompleteItems = () => {
    const { checkedItems } = this.state;
    const { removeChecked } = this.props;
    removeChecked(Object.keys(checkedItems));

    this.setState({
      checkedItems: {},
    })
  };

  selectAllCompleteItems = () => {
    const { checkedItems } = this.state;
    const { completeAll } = this.props;
    completeAll(Object.keys(checkedItems));
    this.setState({
      checkedItems: {},
    });
  };

  render() {
    const { checkedItems/*, showForm */} = this.state;
    const { listItems } = this.props;
    const shownBtn = Object.values(checkedItems);

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <h1>To do list</h1>
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
          <button className="btn btn_blue btn_sm" onClick={this.removeAllCompleteItems}>remove</button>
          <button className="btn btn_blue btn_sm" onClick={this.selectAllCompleteItems}>complete</button>
        </div>
        }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  listItems: state.todoListItems.data,

  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    onRemove: (id) => {
      dispatch(
        {
          type: 'REMOVE_TODO_ITEM',
          id: id,
        }
      );
    },
    onAdd: (payload) => {
      console.log('payload', payload)
      dispatch(
        {
          type: 'ADD_TODO_ITEM',
          payload,
        }
      );
    },
    onClickComplete: (id) => {
      dispatch(
        {
          type: 'CHECKED_ITEM',
          id: id,
        }
      );
    },

    completeAll: (values) => {
      dispatch(
        {
          type: 'COMPLETE_ALL',
          values: values,
        }
      )
    },

    removeChecked: (values) => {
      dispatch(
        {
          type: 'REMOVE_CHECKED',
          values,
        }
      )
    },

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


/*
export default connect(
  state => ({
    todoLlistItems: state.todoListItems
  }),
  dispatch => ({})

)(TodoList);
*/
