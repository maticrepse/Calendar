import React, { Component } from "react";
import ReactDOM from "react-dom";
import CalendarMonth from "./components/CalendarMonth";
import Relay from "react-relay";

class HomeRoute extends Relay.Route {
   static routeName = "CalendarMonth";
   static queries = {
      store: (Component) => Relay.QL`
         query MainQuery {
            store { ${Component.getFragment("store")} }
         }
      `
   };
}


ReactDOM.render(
   <Relay.RootContainer
      Component={CalendarMonth}
      route={ new HomeRoute() }
   />, document.querySelector('#react'));
