import React, { Component } from "react";
import Relay from "react-relay";

class Counter extends React.Component {
   render () {
      let counter = this.props.counter;
      //console.log(counter.counter.counter);
      return <li>{counter.counter}</li>;
   }
}

Counter = Relay.createContainer(Counter, {
   fragments: {
      counter: () => Relay.QL`
         fragment on Counter {
            counter
         }
      `
   }
});


export default Counter;
