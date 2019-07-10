import React, { Component } from 'react'
import './style.scss';


export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    console.log('---', this.state);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  render (){
    const{ onAdd } = this.props;
    const{ value } = this.state;

    return (
      <form  className="form-inline">
        <input className="list__input" type="text" value={value} onChange={this.handleChange} />
        <button className="btn btn_blue btn_sm" type="button" onClick={() => onAdd(value)}>Add</button>
      </form>
    )
  }
}
