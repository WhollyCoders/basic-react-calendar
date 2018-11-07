import React, { Component } from 'react';

class YearLabel extends Component {
  constructor(props){
    super(props);

    this.currentDay = new Date();
    this.year = this.currentDay.getFullYear();

  }
  render() {
    return (
      <div className="calendar-label">
        <div id="year-label">{this.year}</div>
      </div>
    );
  }
}

export default YearLabel;