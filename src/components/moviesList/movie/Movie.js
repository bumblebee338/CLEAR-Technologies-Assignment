import React, { useState } from "react";
import "./Movie.css";
import Button from "../../utility/buttons/Button";
import DetailsPopUp from "../../moviesList/popup/DetailsPopUp";

const Movie = (props) => {
  const [showDetailsPopUp, setShowDetailsPopUp] = useState(false);

  function handleDetails() {
    setShowDetailsPopUp(true);
    setShowDetailsPopUp(!showDetailsPopUp);
  }
  return (
    <div className="Card">
      <div className="movie-container">
        <img
          src={"http://image.tmdb.org/t/p/w500" + props.poster_path}
          alt="img"
        />
      </div>
      <div className="movie-content">
        <div className="movie-content-header">
          <a href="##">
            <h3 className="movie-title">
              {props.original_title} {props.original_name}
            </h3>
          </a>
        </div>

        <div className="info-section">
          <p>
            <span>
              Released on: {props.release_date} {props.first_air_date}
            </span>
          </p>
          <p>
            <span>Vote Average: {props.vote_average}</span>
          </p>
        </div>
        <div className="movie__btn">
          <Button
            name="Details"
            handleButtonClick={handleDetails}
            newClass="btn__lg"
          />
          <DetailsPopUp
            overview={props.overview}
            showDetailsPopUp={showDetailsPopUp}
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
