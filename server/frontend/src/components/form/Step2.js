import React, { Component } from "react";

class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <React.Fragment>
        <h2>What did Ric Think Of The Movie?</h2>
        <input
          type="number"
          name="ricScore"
          min="0"
          max="10"
          value={this.props.ricScore}
          onChange={this.props.handleChange}
        />
        <h2>What did Pat Think Of The Movie?</h2>
        <input
          type="number"
          name="patScore"
          min="0"
          max="10"
          value={this.props.patScore}
          onChange={this.props.handleChange}
        />
        <h2>What did Ref Think Of The Movie?</h2>
        <input
          type="number"
          name="refScore"
          min="0"
          max="10"
          value={this.props.refScore}
          onChange={this.props.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default Step2;
