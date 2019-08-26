import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu/Menu';


class ItemPage extends Component {
  render () {
    const { match, location, newItems } = this.props;
    const { params:{ itemId } } = match;
    console.log('userId', itemId);
    const item = newItems.find((item) => item.id === 1*itemId);
    console.log(item);
    /*let item = newItems.find((userId) => item.id === userId).text;
    console.log('userId', item);*/
    if (!item) {
      return (<div>no found</div>);
    }
    return(
      <div className="list-wrapper">
        <Menu/>
        <div>
          <p>
            <strong>User ID: </strong>
            {itemId}
          </p>
          <p><strong>User Name: </strong>
            {item.name}
          </p>
          <p><strong>User Description: </strong>
            {item.description}
          </p>
          <p><strong>User Price: </strong>
            {item.price}
          </p>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  newItems: state.newItems,
});

export default connect(
mapStateToProps
)(ItemPage);





