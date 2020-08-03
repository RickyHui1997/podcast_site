import React, { Component } from "react";

class Step3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <React.Fragment>
        <h2>Enter Date If This Was Reviewed Before</h2>
        <input
          type="text"
          name="date"
          value={this.props.date}
          placeholder="yyyy-mm-dd"
          onChange={this.props.handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-success btn-lg btn-block"
        />
      </React.Fragment>
    );
  }
}

export default Step3;
