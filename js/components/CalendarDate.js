import React, { Component } from "react";
import Relay from "react-relay";

class CalendarDate extends React.Component {
   render () {
     let today = new Date();
     if (this.props.date === today.getDate() && this.props.month === today.getMonth() && this.props.year === today.getFullYear()) {
       let classes = `CalendarDate Today ${this.props.addClass}`;
       let id = `${this.props.year}.${this.props.month}.${this.props.date}`;
       return <span className={classes} onClick={this.props.clickDate} id={id}>{this.props.date}</span>;
     }
     let classes = `CalendarDate ${this.props.addClass}`;
     let id = `${this.props.year}.${this.props.month}.${this.props.date}`;
     let content;
     if (this.props.addClass === "eventThisMonth") {
       content = this.props.date+"   "+this.props.content;
     } else {
       content = this.props.date;
     }
     return <span className={classes} onClick={this.props.clickDate} id={id}>{content}</span>;
   }
}

// CalendarDate = Relay.createContainer(CalendarDate, {
//    fragments: null
// });


export default CalendarDate;
