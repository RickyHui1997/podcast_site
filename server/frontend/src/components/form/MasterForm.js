import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./MasterForm.css";

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      redirectTo: "",
      payload: "",
      name: "",
      year: "",
      ricScore: "",
      patScore: "",
      refScore: "",
      date: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, year, ricScore, patScore, refScore, date } = this.state;
    let info = {
      movie_name: name,
      year_released: year,
      ric_score: ricScore,
      pat_score: patScore,
      ref_score: refScore,
    };
    if (date !== "") {
      info.review_date = date;
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(info),
    };
    const request = new Request("http://localhost:8000/api/reviews/", options);
    fetch(request)
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            this.setState({
              redirectTo: "/success",
              payload: json,
            });
          });
        } else {
          // 500 imdb title not found
          // 400 input error
          this.setState({
            redirectTo: "/error",
            payload: response.status,
          });
        }
      })
      .catch((error) => {
        console.log("actual error");
        console.log(error.message);
      });
  };
  next_step = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 3 : currentStep + 1;
    this.setState({ currentStep });
  };
  prev_step = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep });
  };
  get next_button() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 3) {
      return (
        <button
          className="btn btn-primary btn-lg float-right"
          type="button"
          onClick={this.next_step}
        >
          Next
        </button>
      );
    }
    return null;
  }
  get prev_button() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-lg btn-secondary"
          type="button"
          onClick={this.prev_step}
        >
          Prev
        </button>
      );
    }
    return null;
  }
  render() {
    if (this.state.redirectTo !== "") {
      return (
        <Redirect
          to={{
            pathname: this.state.redirectTo,
            state: { payload: this.state.payload },
          }}
        />
      );
    } else {
      return (
        <div id="container">
          <h1>Master Form</h1>
          <form onSubmit={this.handleSubmit}>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              name={this.state.name}
              year={this.state.year}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              ricScore={this.state.ricScore}
              patScore={this.state.patScore}
              refScore={this.state.refScore}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              date={this.state.date}
            />
            <br />
            {this.prev_button}
            {this.next_button}
          </form>
        </div>
      );
    }
  }
}

export default MasterForm;
