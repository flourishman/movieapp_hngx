import React from "react";
import imdb from "../images/imdb.png";
import fruit from "../images/fruit.png";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, release_date, vote_average }) => {
  return (
    <div data-testid="movie-card" className="mt-8">
      <div data-testid="movie-poster" className="w-[250px] h-[370px] mb-4">
        <img src={IMG_API + poster_path} alt={title} />
      </div>
      <p data-testid="movie-release-date">{release_date}</p>
      <h1
        data-testid="movie-title"
        className="font-bold text-sm truncate whitespace-nowrap overflow-hidden w-40"
      >
        {title}
      </h1>
      <div className="w-[218px] flex items-center justify-between mt-6">
        <div className="flex items-center justify-between space-x-3">
          <img src={imdb} alt="imdb" />
          <p className="text-black text-xs">86.0 / 100</p>
        </div>
        <div className="flex items-center justify-between space-x-3">
          <img src={fruit} alt="" />
          <p className="text-black text-xs">{vote_average + "%"} </p>
        </div>
      </div>
    </div>
  );
};
export default Movie;
