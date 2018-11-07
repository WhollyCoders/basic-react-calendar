import React, { Component } from 'react';
import Months from '../data/Months';
class MonthLabel extends Component {
  constructor(props){
    super(props);

    this.Months = Months;
    this.currentDay = new Date();
    this.monthIndex = this.currentDay.getMonth();
    this.month = this.Months[this.monthIndex].name;
    
  }
  render() {
    return (
      <div className="calendar-label">
        <div id="month-label">{this.month}</div>
      </div>
    );
  }
}

export default MonthLabel;
