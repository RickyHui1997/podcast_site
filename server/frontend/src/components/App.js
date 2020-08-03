import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MasterForm from "./form/MasterForm";
import SuccessPage from "./form/SuccessPage";
import ErrorPage from "./form/ErrorPage";
import NoMatch from "./util/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/success"
            render={(props) => <SuccessPage {...props} />}
          />
          <Route path="/error" render={(props) => <ErrorPage {...props} />} />
          <Route path="/form" component={MasterForm} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
