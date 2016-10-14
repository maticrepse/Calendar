import React, { Component } from "react";
import Relay from "react-relay";

class CalendarDay extends React.Component {
   render () {
     let today = new Date();
     if (this.props.date === today.getDate() && this.props.month === today.getMonth() && this.props.year === today.getFullYear()) {
       return <span>Today</span>;
     }
     return <span>{this.props.date}. {this.props.month+1}. {this.props.year}</span>;
   }
}

// CalendarDay = Relay.createContainer(CalendarDay, {
//   fragments: null
// });


export default CalendarDay;
