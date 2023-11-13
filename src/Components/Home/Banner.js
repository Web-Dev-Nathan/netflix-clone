import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
       const request = await axios.get(requests.fetchNetflixOriginals);
       setMovie(
         request.data.results[
           Math.floor(Math.random() * request.data.results.length)
         ]
       );
      setTimeout( () => {
        
      setLoading(false);
      }, 4000);
     
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      {loading ? (
        <div className=" d-flex justify-content-center align-content-center  p-5">
          <div
            class="spinner-border text-light spinner-border-sm m-5 p-5"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <header
          className="banner-home pt-5"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie.original_name}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="banner__fadeBottom" />
        </header>
      )}
    </>
  );
}

export default Banner;
