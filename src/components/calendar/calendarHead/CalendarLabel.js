import React, { Component } from 'react';
import MonthLabel from './MonthLabel';
import YearLabel from './YearLabel';
import CalendarDays from './CalendarDays';
class CalendarLabel extends Component {

  render() {
    return (
      <div className="calendar-label-container">
        <MonthLabel />
        <YearLabel />
        <CalendarDays />
      </div>
    );
  }
}

export default CalendarLabel;