import React, { Component } from 'react';
import MonthLabel from './MonthLabel';
import YearLabel from './YearLabel';
class CalendarLabel extends Component {

  render() {
    return (
      <div className="calendar-label-container">
        <MonthLabel />
        <YearLabel />
      </div>
    );
  }
}

export default CalendarLabel;