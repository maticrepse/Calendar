import React, { Component } from "react";
import Relay from "react-relay";
import CalendarDate from "./CalendarDate";
import CalendarDay from "./CalendarDay";

class CalendarMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(2016, 9, 14),
      endDate: new Date(2017, 3, 1),
      today: new Date(),
      showSeasonView: true,
      dayViewDate: new Date().getDate(),
      dayViewMonth: new Date().getMonth(),
      dayViewYear: new Date().getFullYear(),
      cenaTermina: 15
    };
  }
  day = (day) => {
    switch (day) {
      case 1:
          return "Ponedeljek";
        break;
      case 2:
          return "Torek";
        break;
      case 3:
          return "Sreda";
        break;
      case 4:
          return "Četrtek";
        break;
      case 5:
          return "Petek";
        break;
      case 6:
          return "Sobota";
        break;
      case 0:
          return "Nedelja";
        break;
    }
  }
  month = (month) => {
    switch (month) {
      case 0:
          return "Januar";
        break;
      case 1:
          return "Februar";
        break;
      case 2:
          return "Marec";
        break;
      case 3:
          return "April";
        break;
      case 4:
          return "Maj";
        break;
      case 5:
          return "Junij";
        break;
      case 6:
          return "Julij";
        break;
      case 7:
          return "Avgust";
        break;
      case 8:
          return "September";
        break;
      case 9:
          return "Oktober";
        break;
      case 10:
          return "November";
        break;
      case 11:
          return "December";
        break;
    }
  }
  // previous = () => {
  //   if (this.state.month === 0) {
  //       this.setState({year: this.state.year-1, month: 11});
  //   } else {
  //     this.setState({month: this.state.month-1});
  //   }
  // }
  // next = () => {
  //   if (this.state.month === 11) {
  //       this.setState({year: this.state.year+1, month: 0});
  //   } else {
  //     this.setState({month: this.state.month+1});
  //   }
  // }
  clickDate = (event) => {
    let clicked = event.target.id.split(".");
    this.setState({
      showSeasonView: false,
      dayViewYear: parseInt(clicked[0]),
      dayViewMonth: parseInt(clicked[1]),
      dayViewDate: parseInt(clicked[2])
    });
  }
  monthView = () => {
    this.setState({
      showSeasonView: true
    });
  }
  render(){
    let date = [];
    let stTerminov = 0;
    let pretekli = 0;
    let iDate = this.state.startDate;
    while (iDate < this.state.endDate) {
      date.push(<h4>{this.month(iDate.getMonth())}</h4>);

      for (var i = iDate.getDate(); i <= new Date(iDate.getFullYear(), iDate.getMonth()+1, 0).getDate(); i++) {
        let current = new Date(iDate.getFullYear(), iDate.getMonth(), i);
        if (current.getDay() == 5) {
          stTerminov++;
          let key = `${current.getFullYear()}${current.getMonth()}${current.getDate()}`;
          if (current < this.state.today) {
            date.push(<CalendarDate key={key} counter={null} date={i} month={current.getMonth()} year={current.getFullYear()} addClass="notThisMonth"  clickDate={this.clickDate}/>);
            pretekli++
          } else {
            date.push(<CalendarDate key={key} counter={null} date={i} month={current.getMonth()} year={current.getFullYear()} addClass="thisMonth"  clickDate={this.clickDate}/>);
          }
        }
      }
      date.push(<br />);
      date.push(<br />);
      date.push(<br />);
      date.push(<br />);
      date.push(<br />);
      date.push(<br />);
      date.push(<br />);
      iDate = new Date(iDate.getFullYear(), iDate.getMonth()+1, 1);

    }
    // for (var i = 0; i < firstDay; i++) {
    //   let prevMonth = new Date(this.state.year, this.state.month, 1-firstDay+i);
    //   let key = `${prevMonth.getFullYear()}${prevMonth.getMonth()}${prevMonth.getDate()}`;
    //   date.push(<CalendarDate key={key} counter={null} date={prevMonth.getDate()} month={prevMonth.getMonth()} year={prevMonth.getFullYear()} addClass="notThisMonth" clickDate={this.clickDate}/>);
    // }
    // date.push(<br />);
    // for (var i = 1; i <= new Date(this.state.year, this.state.month+1, 0).getDate(); i++) {
    //   let thisMonth = new Date(this.state.year, this.state.month, i);
    //   let key = `${thisMonth.getFullYear()}${thisMonth.getMonth()}${thisMonth.getDate()}`;
    //   date.push(<CalendarDate key={key} counter={null} date={i} month={thisMonth.getMonth()} year={thisMonth.getFullYear()} addClass="thisMonth"  clickDate={this.clickDate}/>);
    //   if (i%7 === 0) {
    //     date.push(<br />);
    //   }
    // }
    // let lastDay = new Date(this.state.year, this.state.month+1, 0).getDay();
    // for (var i = 1; i < 7-lastDay; i++) {
    //   let nextMonth = new Date(this.state.year, this.state.month+1, i);
    //   let key = `${nextMonth.getFullYear()}${nextMonth.getMonth()}${nextMonth.getDate()}`;
    //   date.push(<CalendarDate key={key} counter={null} date={i} month={nextMonth.getMonth()} year={nextMonth.getFullYear()} addClass="notThisMonth"  clickDate={this.clickDate}/>);
    // }

    // let datumi = [];
    // for (var i = 0; i < 7; i++) {
    //   datumi.push(<span key={this.day(i)} className="CalendarDays">{this.day(i)}</span>);
    // }
    // let gumbi = [];
    // if (this.state.month === 11) {
    //    gumbi.push(<button onClick={this.previous}>{this.month(this.state.month-1)}</button>);
    //    gumbi.push(`${this.month(this.state.month)} ${this.state.year}`);
    //    gumbi.push(<button onClick={this.next}>{this.month(0)}</button>);
    //  } else if (this.state.month === 0) {
    //    gumbi.push(<button onClick={this.previous}>{this.month(11)}</button>);
    //    gumbi.push(`${this.month(this.state.month)} ${this.state.year}`);
    //    gumbi.push(<button onClick={this.next}>{this.month(this.state.month+1)}</button>);
    //  } else {
    //    gumbi.push(<button onClick={this.previous}>{this.month(this.state.month-1)}</button>);
    //    gumbi.push(`${this.month(this.state.month)} ${this.state.year}`);
    //    gumbi.push(<button onClick={this.next}>{this.month(this.state.month+1)}</button>);
    //  }

    return (
      <div>
        {this.state.showSeasonView
         ?<div>
            <h3>Partizan 2016/2017</h3>
              {/*<div>{gumbi}</div>*/}
              {/*<div>{datumi}</div>*/}
              <div>Število vseh terminov: {stTerminov}&ensp;&ensp;Cena: {stTerminov*this.state.cenaTermina}</div>
              <div>Število preteklih terminov: {pretekli}&ensp;&ensp;Plačano: {pretekli*this.state.cenaTermina}</div>
              <div className="monthView">{date}</div>
         </div>
         :<div>
            <button onClick={this.monthView}>Month view</button>
            <CalendarDay counter={null} date={this.state.dayViewDate} month={this.state.dayViewMonth} year={this.state.dayViewYear} />
          </div>
       }
      </div>
   );
  }
};

CalendarMonth = Relay.createContainer(CalendarMonth, {
   fragments: {
      store: () => Relay.QL`
         fragment on Store {
            id
         }
      `
   }
});

export default CalendarMonth;
