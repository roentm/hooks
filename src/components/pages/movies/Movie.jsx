import React from "react";

const Movie = ({movie}) => {
  return (
    <div key={movie.imdbID} className="col-md-4 p-2">
      <div className="border-radius-10 rounded-3 p-2 h-100 overflow-hidden shadow position-relative text-light bg-dark">
        <img
          src={movie.Poster === "N/A" ? "/imgs/no_Image.png" : movie.Poster}
          className="float-start me-2 w-25"
          alt={movie.Title}
        />
        <h3>{movie.Title}</h3>
        <div>Year: {movie.Year}</div>
        <button className="btn btn-info position-absolute bottom-0 end-0 infohover">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Movie;
