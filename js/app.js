import React, { Component } from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Relay from "react-relay";

class HomeRoute extends Relay.Route {
   static routeName = "Home";
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
      Component={Hello}
      route={ new HomeRoute() }
   />, document.querySelector('#react'));
