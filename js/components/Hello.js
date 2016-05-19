import React, { Component } from "react";
import Relay from "react-relay";
import Counter from "./counter";

class Hello extends Component {
  render(){
     let i=0;
     let content = this.props.store.data.map(counter => {
        return (
           <Counter key={i++} counter={counter} />
       );
     });
    return (
      <div>
         <h3>Counters</h3>
         <ul>
            {content}
         </ul>
      </div>
   );
  }
};

Hello = Relay.createContainer(Hello, {
   fragments: {
      store: () => Relay.QL`
         fragment on Store {
            data{
               ${ Counter.getFragment("counter") }
            }
         }
      `
   }
});

export default Hello;
