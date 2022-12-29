import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiURL } from "../../consts";
import StarRating from "./movieInfo/StarRating";

const MovieInfo = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const nav = useNavigate();
  
  const doAPI = useCallback( async () => {
    try {
      setMovie({});
      const sID = params["id"];
      const { data } = await axios.get(apiURL + "i=" + sID);
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  },[params])
  
  useEffect(() => {
    doAPI();
  },[doAPI]);

 
  return (
    <div className="container-fluid d-flex">
      <div className="container bg-dark text-light d-flex pt-5 flex-wrap shadow">
        <img src={movie.Poster} alt={movie.Title} className="col-md-4 col-sm-12 p-5" />
        <div className="p-5 position-relative col-md-8 col-sm-12">
          <h2>{movie.Title}</h2>
          <div className="mb-1"><span className="text-warning">Genere:</span> {movie.Genre}</div>
          <div className="mb-1"><span className="text-warning">Year:</span> {movie.Year}</div>
          <div className="mb-1"><span className="text-warning">Plot:</span> {movie.Plot}</div>
          <div className="mb-1"><span className="text-warning">Actors:</span> {movie.Actors}</div>
          <div className="mb-1"><span className="text-warning">Country:</span> {movie.Country}</div>
          <div className="mb-1"><span className="text-warning">Language: </span>{movie.Language}</div>
          <div className="mb-1"><span className="text-warning">Runtime:</span> {movie.Runtime}</div>
          <div className="mb-1"><span className="text-warning">Director:</span> {movie.Director}</div>
          <div><span className="text-warning">Rating:</span> <StarRating stars={Number(movie.imdbRating)}/></div>
          
          
          <button
            className="btn btn-info my-3 infohover position-absolute bottom-0 start-50 fs-5"
            onClick={() => {
              nav(-1);
            }}>
            Back to the List
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default MovieInfo;
