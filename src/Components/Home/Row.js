import React, { useState, useEffect ,Suspense } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
    //const [loading, setLoading] = useState(false);
    const [display, setdisplay] = useState(true)

  useEffect(() => {
    async function fetchData() {
     // setLoading(true);
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
       setTimeout( () => {
       //setLoading(false);
      }, 5000);
     
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "500",
    width: "900",
    playerVars: {
      autoplay: 1,
    }
  }

  
  
  const handleClick = (movie) => {
   setdisplay(true);
      if (trailerURL) {
        setTrailerURL("");
      } else {
        movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url)?.search);
            setTrailerURL(urlParams?.get("v"));
          })
      
          
      }
  }
  

  return (
    <>
    <Suspense fallback={
    "loading..."
    }>
     <div className="row">
          <h2>{title}</h2>
          <div className="row__posters">
            {movies?.map((movie) => (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie.name}
              />
            ))}
          </div>

          {trailerURL && display && (
            <div onClick={()=>setdisplay(false)} className="video-player w-100 h-100 top-0 start-0 position-fixed">
              <div style={{ padding: "40px" }}>
                <YouTube
                  videoId={trailerURL}
                  className=" w-75 h-75 position-fixed m-auto youtube-video"
                  opts={opts}
                />
              </div>
            </div>
          )}
        </div>
      
    </Suspense>
    </>
  );
}

export default Row;
