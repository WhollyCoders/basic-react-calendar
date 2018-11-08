import React, { Component } from 'react';
import Days from '../data/Days';
import CalendarDay from './CalendarDay';
class CalendarDays extends Component {

  render() {
    console.log(Days);
    return (
      <div className="calendar-days-container">
        {Days.map((day, i) => {
            return <CalendarDay key={i} day={day.abbr}/>
        })}
      </div>
    );
  }
}

export default CalendarDays;