import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import CatalogueList from '../../components/CatalogueList/CatalogueList';
import Notification  from '../../components/Notification/Notification'
import NotificationWrap  from '../../components/NotificationWrap/NotificationWrap'
import Menu from '../../components/Menu/Menu';
import NewDatePicker from '../../components/NewDatePicker';
import { onRemove } from "../../actions/index";
import './style.scss';

class Catalogue extends Component {

  removeNotification = () => {
    const { dispatch } = this.props;
    dispatch(onRemove());
  };

  render() {
    const { notification } = this.props;
    console.log(this.props);

    return (
      <div className="list-wrapper">
        <Menu/>
        <h1>Catalogue</h1>
        <Link className="btn btn_blue btn_sm" to="/create_new_item">
          create new item
        </Link>
        <CatalogueList />
        <NewDatePicker />

        {notification && (
          <>
            <Notification
              message = { notification }
              onRemove={ this.removeNotification }
            />
            <NotificationWrap
              onRemove={ this.removeNotification }
            />
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notification: state.notification
});

export default connect(
  mapStateToProps
)(Catalogue)
