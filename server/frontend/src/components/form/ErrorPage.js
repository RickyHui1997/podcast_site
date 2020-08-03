import React, { Component } from "react";

class ErrorPage extends Component {
  render() {
    let error_message =
      this.props.location.state.payload === 500
        ? "Check inputted values for title and title year"
        : "Format error, please try again.";
    return (
      <React.Fragment>
        <h1>Error</h1>
        <h2>{error_message}</h2>
      </React.Fragment>
    );
  }
}

export default ErrorPage;
