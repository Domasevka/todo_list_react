import React, { Component } from 'react'
import './style.scss';
import { distanceInWordsToNow } from 'date-fns'



export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cDate: this.props.createdDate,

    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  countFormat = (date) => distanceInWordsToNow(new Date(date), 'MM/DD/YYYY');

  tick() {
    this.setState({
      cDate: this.countFormat(this.props.createdDate)
    });
  }

  render() {
    const{ cDate } = this.state;
    return (
      <span className="list__clock">now: {cDate}</span>
    );
  }
}



