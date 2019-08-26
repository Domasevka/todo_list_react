import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Alert } from 'antd';
import 'antd/dist/antd.css';


class NewDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    }
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    return (
      <div style={{ width: 400, margin: 'margin: 20px 20px 0 0' }}>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>
          {/*Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}*/}
          <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type="success" />
        </div>
      </div>
    );
  }
}

export default NewDatePicker

//ReactDOM.render(<NewDatePicker />, document.getElementById('root'));
