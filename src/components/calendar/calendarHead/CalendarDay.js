import React, { Component } from 'react';

class CalendarDay extends Component {
  constructor(props){
    super(props);

    this.day = this.props.day;
  }
  render() {
    return (
      <div className="calendar-day-container">
        {this.day}
      </div>
    );
  }
}

export default CalendarDay;