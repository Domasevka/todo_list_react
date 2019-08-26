import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form';
import NewItemForm from '../NewItemForm/NewItemForm';
import { onSubmit } from "../../actions/index";

import { notification } from '../../actions'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function check(values) {
  return sleep(1000) // simulate server latency
    .then(() => {
      if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.name)) {
        return ['user is not valide'];
      } /*else if (values.price !== '11') {
       throw new SubmissionError({ price: 'To long', _error: 'Login failed!' })
       }*/ else {
        /*window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)*/
        return [];
      }
    })
}


class AddNewItem extends Component {
  submit = async (values) => {
    debugger;
    const { dispatch } = this.props;
    const checkValid = await check(values);
    console.log(checkValid);
    if (!checkValid.length) {
      dispatch(onSubmit(values));
      dispatch(notification('Your order is created!'));
      this.props.history.push('/catalogue');
      console.log('values', values)
    } else {
      throw new SubmissionError({ _error: checkValid.join(',') })
    }
  };

  render() {
    return (
      <NewItemForm onSubmit={this.submit}/>
    );
  }
}

const mapStateToProps = state => ({
  newItems: state.newItems,
});



export default withRouter(connect(
  mapStateToProps
)(AddNewItem));






