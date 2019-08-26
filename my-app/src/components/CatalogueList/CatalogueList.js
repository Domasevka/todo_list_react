import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewItem from '../NewItem/NewItem';

class CatalogueList extends Component {

  removeItem = (item) => {
    this.props.onRemoveItem(item.id);
  };

  render(){
    const { newItems } = this.props;
    return (
      <>
      <div className="catalogue-list">
        { newItems.map(el => (
            <NewItem
              item={el}
              onRemoveItem={this.removeItem}
            />
        ))}
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  newItems: state.newItems,
});

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItem: (id) => {
      console.log('id', id);
      dispatch(
        {
          type: 'REMOVE_ITEM',
          id: id,
        }
      )
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogueList)
