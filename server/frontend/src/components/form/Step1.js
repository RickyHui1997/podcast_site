import React, { Component } from "react";

class Step1 extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <React.Fragment>
        <h2>What Movie Did You Watch?</h2>
        <input
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.props.handleChange}
        />
        <h2>When Was This Movie Released?</h2>
        <input
          type="number"
          name="year"
          min="1950"
          max={new Date().getFullYear()}
          value={this.props.year}
          onChange={this.props.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default Step1;
