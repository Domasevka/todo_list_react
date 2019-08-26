import React, { Component } from 'react'
import './style.scss';


export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    console.log('input', this.state);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleAdd = () => {
    const{ onAdd } = this.props;
    const{ value } = this.state;

    onAdd(value);
    this.setState({value:''});
  };

  render (){
    const{ value } = this.state;
    return (
      <form  className="form-inline">
        <input className="list__input" type="text" value={value} onChange={this.handleChange} />
        <button className="btn btn_blue btn_sm" type="button" onClick={this.handleAdd}>Add</button>
      </form>
    )
  }
}
