import React, { Component } from "react";
import { Link } from "react-router-dom";

class SuccessPage extends Component {
  render() {
    let payload;
    const {
      imdb_rating,
      movie_name,
      pat_score,
      ref_score,
      review_date,
      ric_score,
      year_released,
    } = this.props.location.state.payload;
    payload = (
      <div>
        <h2>Movie Name: {movie_name}</h2>
        <h2>Year Released: {year_released}</h2>
        <h2>Ric's Score: {ric_score}</h2>
        <h2>Pat's Score: {pat_score}</h2>
        <h2>Ref's Score: {ref_score}</h2>
        <h2>IMDb Score: {imdb_rating}</h2>
        <h2>Date Reviewed: {review_date}</h2>
      </div>
    );
    return (
      <React.Fragment>
        <h1>Successful</h1>
        <h2>inputted data:</h2>
        {payload}
        <Link to="/" className="btn btn-primary">
          Back to Form
        </Link>
      </React.Fragment>
    );
    // }
  }
}

export default SuccessPage;
