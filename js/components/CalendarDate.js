import React, { Component } from "react";
import Relay from "react-relay";

class CalendarDate extends React.Component {
   render () {
     return <span className="CalendarDate">{this.props.date}</span>;
   }
}

CalendarDate = Relay.createContainer(CalendarDate, {
   fragments: {
      counter: () => Relay.QL`
         fragment on Counter {
            counter
         }
      `
   }
});


export default CalendarDate;
