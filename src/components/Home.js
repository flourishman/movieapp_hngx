import React from "react";
import Movie from "./Movie";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import { useEffect, useState } from "react";
//import MoviesDetails from "./MoviesDetails";

const URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=54356498bda324f2e587e2f3b2762b26";

const Home = () => {
  //const movies = ["1", "2", "3", "4"];

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //fetchMovies();
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  //const fetchMovies = async () => {
  // const data = await fetch(url);
  //const latest = await data.json();
  //console.log(latest);
  //setMovies(latest.results);
  //};
  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <HeroSection />
      <div className=" w-[1150px] flex justify-between items-center mt-8">
        <p className=" font-bold text-[36px]">Feature Movie</p>

        <div class="relative">
          <div class="absolute inset-y-[1.2rem] right-0 flex items-center pr-0 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-5 stroke-rose-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

          <button className="text-rose-700 text-[1.4rem] pr-8">See more</button>
        </div>
      </div>
      <div className="w-[1250px] grid grid-rows-5 grid-flow-col gap-x-[52px] gap-y-4 justify-center items-center">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Home;
