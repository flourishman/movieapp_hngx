import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import TvSeries from "./TvSeries";
import Upcoming from "./Upcoming";

const NavRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </>
  );
};

export default NavRoute;
